import { useEffect, useState } from "react";
import SteamDetails from "../steamDetails";
import { getLevelByGPQ } from "../utils/getLevelByGPQ";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface Article {
	title: string;
	link: string;
	pubDate: Date;
	description: string;
}

interface UserGitHub {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string | null;
	hireable: boolean;
	bio: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
}

interface Repo {
	stargazers_count: number;
	language: string;
}

interface LanguagePercentage {
	name: string;
	percentage: string;
}

interface UserRepos {
	repos: Repo[];
	totalStars: number;
	totalCommits: number;
	language: LanguagePercentage;
}

const userGitHub = "phnog";

const fetchData = async (
	setUserInfo: (userInfo: UserGitHub) => void,
	setUserRepos: (userRepos: UserRepos) => void,
	github_api_key: string,
	setLoading: (loading: boolean) => void,
) => {
	setLoading(true);
	try {
		// Fetch user information
		const userResponse = await axios.get<UserGitHub>(
			"https://api.github.com/users/" + userGitHub,
			{
				headers: { Authorization: `Bearer ${github_api_key}` },
			},
		);
		setUserInfo(userResponse.data);
		console.log("User Info", userResponse.data);

		// Fetch public repositories of the user
		const reposResponse = await axios.get<Repo[]>(
			"https://api.github.com/users/" + userGitHub + "/repos?sort=updated",
			{
				headers: { Authorization: `Bearer ${github_api_key}` },
				params: { type: "public" },
			},
		);
		const repos = reposResponse.data;

		// Fetch commits of all repositories of the user
		const commitsResponse = await axios.get(
			`https://api.github.com/search/commits?q=${encodeURIComponent(`author:${userGitHub} is:merge`)}`,
			{
				headers: {
					Authorization: `token ${github_api_key}`,
					Accept: "application/vnd.github.cloak-preview",
				},
			},
		);
		const totalCommits = commitsResponse.data.total_count;

		// Calculate total stars received
		const totalStars = repos.reduce(
			(acc, repo) => acc + repo.stargazers_count,
			0,
		);

		// Calculate percentage of the most used language
		const languages: { [key: string]: number } = repos.reduce(
			(acc, repo) => {
				if (repo.language) {
					acc[repo.language] = acc[repo.language] ? acc[repo.language] + 1 : 1;
				}
				return acc;
			},
			{} as { [key: string]: number },
		);
		const totalRepos = repos.length;
		const languagePercentageArray: LanguagePercentage[] = [];
		for (const language in languages) {
			const percentage = ((languages[language] / totalRepos) * 100).toFixed(2);
			languagePercentageArray.push({
				name: language,
				percentage: `${percentage}%`,
			});
		}

		setUserRepos({
			repos,
			totalStars,
			totalCommits,
			language: languagePercentageArray[0],
		});
	} catch (error) {
		console.error("Error fetching data:", error);
	}
	setLoading(false);
};

function App() {
	const [userInfo, setUserInfo] = useState<UserGitHub | undefined>();
	const [userRepos, setUserRepos] = useState<UserRepos | undefined>();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY || "";
		fetchData(setUserInfo, setUserRepos, githubApiKey, setLoading);
	}, []);

	// ARTIGO DE BLOG - CONSUMINNDO UM XML - COMENTE SE NÃO QUISER USAR NO SEU PROJETO
	const [articles, setArticles] = useState<Article[]>([]);

	// ARTIGO DE BLOG - CONSUMINNDO UM XML - COMENTE SE NÃO QUISER USAR NO SEU PROJETO
	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(
					"https://raw.githubusercontent.com/Yagasaki7K/website-yagasaki/refs/heads/main/article.xml",
				); // Substitua pela URL real
				const xmlData = await response.text();

				// Usando DOMParser para analisar o XML no navegador
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(xmlData, "application/xml");

				// Acessando os itens do feed RSS
				const items = xmlDoc.getElementsByTagName("item");
				const fetchedArticles: Article[] = [];

				for (let i = 0; i < items.length; i++) {
					const item = items[i];
					const title = item.getElementsByTagName("title")[0].textContent || "";
					const link = item.getElementsByTagName("link")[0].textContent || "";
					const pubDate = new Date(
						item.getElementsByTagName("pubDate")[0].textContent || "",
					);
					const description =
						item.getElementsByTagName("description")[0].textContent || "";

					fetchedArticles.push({ title, link, pubDate, description });
				}

				// Ordena os artigos por data (mais recente primeiro)
				fetchedArticles.sort(
					(a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
				);

				// Seleciona os quatro artigos mais recentes
				setArticles(fetchedArticles.slice(0, 4));
			} catch (error) {
				console.error("Erro ao processar o arquivo XML:", error);
			}
		};

		fetchArticles();
	}, []);

	const subnick = 'Pedro Henrique Nogueira';

	// BlueLight
	// const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png";
	// Cuttie
	// const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2855140/4324f3a8e05e1c110fad71443d61c7ba82c4e474.png";
	// Halloween
	// const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png";
	// Fire
	// const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/322330/beaee5e90d93bfafa5f5f55acb23abfd28ad180c.png";
	// Summer


	const flag = "br";

	// Year of your birthday
	const birthday = 2001;

	// since your are developer
	const sinceExperience = 2019;
	const infoSubTitle = "Solucionando problemas com código.";

	const badgeTitle = "Mid Software Developer";
	const badgeEXP = "777";
	const badgeIcon =
		"https://community.fastly.steamstatic.com/public/images/badges/61_summersale_minigame2022/80/badge_clorthax_3.png?t=7337941";
	// Default
	// const badgeIcon = "/badge_icon.png";

	const linkedln = "https://www.linkedin.com/in/phnogueira";
	const awardIconLink = "";

	const perfilIconLink = "";

	const fixedAvatar =
		"https://media.licdn.com/dms/image/v2/D5603AQGkPgYw_mzA7Q/profile-displayphoto-scale_200_200/B56ZhhgdAiH0AY-/0/1753982554919?e=1758758400&v=beta&t=C1HPFSo6OVtie2Vl3Edo2m-jqsTe34gSStO0G44PpVk";

	const avatarBorder =
		"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png";

	const nickname = userInfo?.name;
	const location = userInfo?.location;
	const infoTitle = userInfo?.bio;
	const githubLink = "https://github.com/" + userGitHub;

	console.log(userRepos, userInfo);

	return loading ? (
		<div
			className="loading-screen"
			style={{
			backgroundImage: "url('/gamedev.gif')",
			backgroundSize: "cover",
			backgroundPosition: "center",
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			}}
		>
			<div
			style={{
				border: "8px solid rgba(255, 255, 255, 0.3)",
				borderTop: "8px solid #fff",
				borderRadius: "50%",
				width: "60px",
				height: "60px",
				animation: "spin 1s linear infinite",
			}}
			></div>

			<style>
			{`
				@keyframes spin {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(360deg); }
				}
			`}
			</style>
		</div>
	) : (
		<SteamDetails>
			<div className="background"></div>

			<div className="content">
				<div className="header">
					<div className="avatar">
						<img src={fixedAvatar} alt="" />
						<img className="border" src={avatarBorder} alt="" />
					</div>

					<div className="nickname">
						<h2>{nickname}</h2>

						<div className="subnick">
							<p>{subnick}</p>
							<p className="city">
								<img
									src={
										"https://community.cloudflare.steamstatic.com/public/images/countryflags/" +
										flag +
										".gif"
									}
								/>{" "}
								{location}
							</p>
						</div>

						<div className="info">
							<p>{infoTitle}</p>
							<i>{infoSubTitle}</i>
							Tentando virar um profissional melhor.
							{/*(<a href={githubLink}>View more info</a>*/}
						</div>
					</div>

					<div className="level">
						<h2>
							Nível <span>{new Date().getFullYear() - birthday}</span>
						</h2>

						<div className="badge">
							<div className="leftContent">
								<img src={badgeIcon} alt="BadgeIcon" />
							</div>

							<div className="rightContent">
								<h4>{badgeTitle}</h4>
								<p>{badgeEXP} XP</p>
							</div>
						</div>

						<div className="buttons">
							<a href={linkedln} target="_blank">
								Entrar em contato
							</a>
							
								<img className="award" src="award_icon.svg" alt="" />
							
							
								<img className="avatar" src="equipped_items_icon.svg" alt="" />
							
							<button >
								...
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="subgroups">
					<div className="group">
						<h3>Sobre</h3>
						<p>
							<img
								src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true"
								width="15px"
							/>{" "}
							Oi, me chamo <b>Pedro Henrique Nogueira</b>, sou Engenheiro de Software formado pela Universidade de Brasília (UnB) e tenho mais de 4 anos de experiência em desenvolvimento Full-Stack. Trabalho principalmente com ReactJS, TypeScript e NodeJS, mas também tenho sólida experiência com PHP, Laravel, Java e Docker, o que me permite atuar em diferentes contextos e arquiteturas de software. Ao longo da minha trajetória, participei de projetos que vão desde a concepção até a entrega de soluções escaláveis e de alto impacto. Sou apaixonado por tecnologia, busco constantemente aprender novas ferramentas e aprimorar minhas habilidades, sempre em busca de desafios que impulsionem meu crescimento profissional.

						</p>

						<h3>Tecnologias</h3>
						<div className="groupDetails">
							<div className="badges">
								<img
									src="js.png"
									alt="BadgeIcon"
									title="Desenvolvedor JavaScript"
								/>
								<img
									src="ts.png"
									alt="BadgeIcon"
									title="Desenvolvedor Typescript"
								/>
								<img
									src="nodejs.png"
									alt="BadgeIcon"
									title="Desenvolvedor NodeJS"
								/>

								<img
									src="nestjs.png"
									alt="BadgeIcon"
									title="Experiencia em NestJS"
								/>
								<img src="php.png" alt="BadgeIcon" title="Desenvolvedor PHP" />
								<img
									src="laravel.png"
									alt="BadgeIcon"
									title="Desenvolvedor Laravel"
								/>
								<button
									title="See more on Github"
									onClick={() => navigate("/tecnologias")}
								>
									+8
								</button>
							</div>
						</div>

						<h3>Experiência</h3>

						<div className="groupDetails">
							<Link to="/exp/pro" className="experienceLink">
								<div className="experience">
									<div className="task">
										<div className="left">
											<img src="pro.png" alt="RetroArch" />
											<span className="title">Pró Empresa</span>
										</div>
										<div className="right">
											<div>Jan de 2022 - Julho de 2025</div>
											<div>Desenvolvedor de Software</div>
										</div>
									</div>
									    <div className="bottom">
											<img src="js.png" alt="ach" />
											<img src="ts.png" alt="ach" />
											<img src="php.png" alt="ach" />
											<img src="laravel.png" alt="ach" />

										</div>


								</div>
							</Link>	
						</div>

					</div>
				</div>
				<div className="sidebar">
					<h2>Estudando Java</h2>

					<div className="links">
						<a href="">
							Badges <span></span>
						</a>

						<div className="badges">
							<img src="/quickdraw.png" alt="BadgeIcon" title="Gitty up!" />
							<img src="/pair.png" alt="BadgeIcon" title="Coauthored commits on merged pull requests." />
							<img src="/pullshark.png" alt="BadgeIcon" title="Opened pull requests that have been merged." />

							<img
								src={
									"https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears" +
									(new Date().getFullYear() - sinceExperience) +
									"_54.png"
								}
								alt="BadgeIcon"
								title="Anos de Experiência"
							/>

						</div>

						<a href={githubLink} target="_blank" rel="noreferrer">
							Repositorios Públicos <span>{userInfo?.public_repos}</span>
						</a>
						<a href={githubLink} target="_blank" rel="noreferrer">
							Total de Estrelas <span>{userRepos?.totalStars}</span>
						</a>
						<a href={githubLink} target="_blank" rel="noreferrer">
							Seguindo <span>{userInfo?.following}</span>
						</a>
						<a href={githubLink} target="_blank" rel="noreferrer">
							Seguidores <span>{userInfo?.followers}</span>
						</a>
					</div>
				</div>
			</div>
			<div className="copyright">
				<a
					href="https://github.com/Yagasaki7K"
					target="_blank"
					rel="noreferrer"
				>
					© 2025 - {new Date().getFullYear()} Pedro Henrique Nogueira - Baseado em: <a href='https://github.com/Yagasaki7K/website-steamfolio?tab=readme-ov-file'>Anderson "Yagasaki" Marlon</a>{" "}
				</a>
			</div>
		</SteamDetails>
	);
}

export default App;
