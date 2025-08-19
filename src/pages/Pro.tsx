import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  background: #1b2838;
  min-height: 110vh;
  color: #c7d5e0;
  font-family: "Motiva Sans", sans-serif;
`;

/* TOPO */
const TopBar = styled.div`
  background: #171a21;
  margin:0 auto;
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #2a475e;

    .avatar {
        width: 5rem;
        height: 5rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .border {
            width: 6rem;
            height: 6rem;
            position: absolute;
            margin-left: -5.5rem;
            margin-top: -0.5rem;
        }
    }

    a {
    text-decoration: none; /* remove o underline */
    color: inherit;        /* herda a cor do pai */
    }

    a:hover {
    color: #ffffff; /* ou a cor que você quiser no hover */
    }

  .info {
    display: flex;
    flex-direction: column;

    .username {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      margin: 0;
    }

    .breadcrumbs {
      font-size: 13px;
      margin-top: 2px;
      color: #8f98a0;

      span {
        margin: 0 0.3rem;
      }

      a {
        color: #66c0f4;
        text-decoration: none;

      }
    }
  }
`;

/* BOX DA BADGE */
const BadgeBox = styled.div`
  background: #101822;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 2rem auto;
  padding: 1.5rem;
  width: 800px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);

    .responsabilidades {
        margin-top: 1.5rem;
        color: #c7d5e0;
        font-size: 14px;
        line-height: 1.6;
    }

    .responsabilidades h3 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 0.8rem;
        color: #ffffff;
    }

    .responsabilidades ul {
        margin-left: 1.2rem;
        padding-left: 1rem;
    }

    .responsabilidades ul li {
        margin-bottom: 0.6rem;
        list-style-type: "• "; /* bolinha customizada */
    }

    .responsabilidades ul ul {
        margin-top: 0.4rem;
        margin-left: 1.5rem;
    }

    .responsabilidades ul ul li {
        list-style-type: "➝ "; /* marcador diferente para subtópicos */
        font-size: 13px;
        color: #c7d5e0;
    }



    p {
        border-radius: 0 0 7px 7px;
        margin-bottom: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 40;
        -webkit-box-orient: vertical;
    }


    h2 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #ffffff;
        border-bottom: 1px solid #2a2a2a;
        padding-bottom: 0.5rem;
    }

    .badge-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        img {
        width: 72px;
        height: 72px;
        }

        .details {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .title {
            font-size: 15px;
            color: #66c0f4;
            font-weight: bold;
        }

        .xp {
            font-size: 14px;
            color: #ffffff;
            font-weight: bold;
        }

        .date {
            font-size: 12px;
            color: #8f98a0;
        }
        }
    }

    .tasks {
        margin-top: 1rem;
        font-size: 14px;
        color: #c7d5e0;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8rem;

        .task {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        background: #0b1016;
        padding: 0.6rem;
        border: 1px solid #2a2a2a;
        border-radius: 2px;

        img {
            width: 32px;
            height: 32px;
        }

        span {
            font-size: 13px;
            color: #c7d5e0;
        }
        }
    }
`;

function ProPage() {
    const navigate = useNavigate();

	const fixedAvatar =
		"https://media.licdn.com/dms/image/v2/D5603AQGkPgYw_mzA7Q/profile-displayphoto-scale_200_200/B56ZhhgdAiH0AY-/0/1753982554919?e=1758758400&v=beta&t=C1HPFSo6OVtie2Vl3Edo2m-jqsTe34gSStO0G44PpVk";

	const avatarBorder =
		"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png";

    return (
        <Page>
            {/* TOPO */}
            <TopBar>
                <div className="avatar">
						<img src={fixedAvatar} alt="" />
						<img className="border" src={avatarBorder} alt="" />
                </div>  
                <div className="info">
                    <p className="username"><a href='' onClick={() => navigate("/")}>Pedro Henrique Nogueira</a></p>
                    <p className="breadcrumbs">
                        <a>Experiência</a>
                    </p>
                </div>
            </TopBar>

            {/* BOX DA BADGE */}
            <BadgeBox>
                <h2>Pró Empresa - Desenvolvedor de Software</h2>


                <h3>Principais Responsabilidades e Conquistas: </h3>

                <section className="responsabilidades">
                    <ul>
                        <li>Liderei o desenvolvimento front-end de projetos web e mobile, atuando desde a 
                            concepção e prototipagem no Figma até a codificação final das interfaces.</li>

                        <li>Desenvolvi interfaces de usuário (UI) ricas, responsivas e de alta performance 
                            utilizando React e Vue.</li>

                        <li>Realizei a integração de APIs RESTful para conectar as aplicações a serviços 
                            de back-end, garantindo a funcionalidade e o fluxo de dados.</li>

                        <li>Prestei manutenção em sistemas legados em PHP.</li>

                        <li>Desenvolvi APIs escaláveis utilizando PHP e Node.js, com foco em performance, 
                            manutenção e segurança, garantindo a eficiência na comunicação entre front-end 
                            e back-end.</li>

                        <li>Liderei o desenvolvimento do back-end de uma plataforma SaaS, sendo responsável 
                            pela definição da stack tecnológica, arquitetura do sistema, implementação das 
                            APIs e estrutura base do projeto. A eficiência do SaaS foi comprovada por meio 
                            de testes internos, que demonstraram melhorias no desempenho e na gestão de processos.</li>

                        <li>Liderei a modelagem de um banco de dados em MySQL para um sistema de e-commerce, 
                            assegurando integridade dos dados, eficiência nas consultas e facilidade de 
                            escalabilidade, além de prestar manutenção em um banco de dados em PostgreSQL.</li>

                        <li>Participei ativamente de projetos estratégicos, incluindo:
                        <ul>
                            <li>Criação de um portal e aplicativo mobile para corretores de imóveis com 
                                atuação em Portugal e Brasília.</li>
                            <li>Desenvolvimento de uma plataforma SaaS para gestão empresarial e seu 
                                respectivo aplicativo mobile.</li>
                            <li>Desenvolvimento de um e-commerce focado nas feiras de Brasília.</li>
                        </ul>
                        </li>
                    </ul>

                <h3>Principais Responsabilidades e Conquistas: </h3>
                 <ul>
                    <li>
                    <strong>Linguagens e Frameworks:</strong>
                    JavaScript, TypeScript, PHP, Laravel, Node.js, NestJS, React, Vue, Next.js
                    </li>
                    <li>
                    <strong>Bancos de Dados:</strong>
                    PostgreSQL, MySQL
                    </li>
                    <li>
                    <strong>DevOps &amp; Infraestrutura:</strong>
                    Docker, Kubernetes, CI/CD, Git
                    </li>
                    <li>
                    <strong>Metodologias e Práticas:</strong>
                    Scrum, Kanban, Metodologias Ágeis, Clean Code, Boas Práticas de Arquitetura
                    </li>
                    <li>
                    <strong>Ferramentas e Design:</strong>
                    Figma, FlutterFlow
                    </li>
                </ul>

                </section>
                
            </BadgeBox>
        </Page>
    );
}

export default ProPage;
