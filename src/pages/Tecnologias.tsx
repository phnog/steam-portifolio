import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  background: #1b2838;
  min-height: 100vh;
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

function SteamBadgePage() {
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
                        <a>Tecnologias</a>
                    </p>
                </div>
            </TopBar>

            {/* BOX DA BADGE */}
            <BadgeBox>
                <h2>Comitê de Tecnologias</h2>

                <div className="tasks">
                    <div className="task">
                        <img src="js.png" alt="task" />
                        <span>Java Script</span>
                    </div>
                    <div className="task">
                        <img src="ts.png" alt="task" />
                        <span>Type Script</span>
                    </div>
                    <div className="task">
                        <img src="nodejs.png" alt="task" />
                        <span>NodeJS</span>
                    </div>
                    <div className="task">
                        <img src="nestjs.png" alt="task" />
                        <span>
                            NestJS
                        </span>
                    </div>
                    <div className="task">
                        <img src="php.png" alt="task" />
                        <span>
                            PHP
                        </span>
                    </div>
                    <div className="task">
                        <img src="laravel.png" alt="task" />
                        <span>
                            Laravel
                        </span>
                    </div>
                    <div className="task">
                        <img src="java.png" alt="task" />
                        <span>
                            Java
                        </span>
                    </div>
                    <div className="task">
                        <img src="git.png" alt="task" />
                        <span>
                            Git
                        </span>
                    </div>
                    <div className="task">
                        <img src="docker.png" alt="task" />
                        <span>
                            Docker
                        </span>
                    </div>
                    <div className="task">
                        <img src="flutter.png" alt="task" />
                        <span>
                            FlutterFlow
                        </span>
                    </div>
                    <div className="task">
                        <img src="post.png" alt="task" />
                        <span>
                           PostgreSQL
                        </span>
                    </div>
                    <div className="task">
                        <img src="mysql.png" alt="task" />
                        <span>
                            MySQL
                        </span>
                    </div>
                    <div className="task">
                        <img src="react.png" alt="task" />
                        <span>
                            ReactJS
                        </span>
                    </div>
                    <div className="task">
                        <img src="next.png" alt="task" />
                        <span>
                            NextJS
                        </span>
                    </div>
                </div>
            </BadgeBox>
        </Page>
    );
}

export default SteamBadgePage;
