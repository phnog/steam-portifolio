import styled from "styled-components";

const TopBar = styled.div`
  background: #1b2838; /* fundo topo Steam */
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Motiva Sans", sans-serif;
  border-bottom: 1px solid #2a475e;

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: #2a475e; /* placeholder */
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .username {
      font-size: 16px;
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

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

function SteamTopBar() {
  return (
    <TopBar>
      <div className="avatar" /> {/* Aqui você pode trocar por <img src="..." /> */}
      <div className="info">
        <p className="username">nog</p>
        <p className="breadcrumbs">
          <a href="#">Insígnias</a>
          <span>»</span>
          <a href="#">Comitê de Indicação dos Prêmios Steam de 2017</a>
        </p>
      </div>
    </TopBar>
  );
}

export default SteamTopBar;
