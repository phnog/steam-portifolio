import styled from "styled-components";

const TecContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2a475e; /* fundo do card */
  border: 1px solid #1b2838; /* borda escura */
  border-radius: 4px;
  padding: 1.5rem;
  width: 42rem;
  color: #c7d5e0;
  font-family: "Motiva Sans", sans-serif;
  text-align: left;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0.3rem 0;
    color: #ffffff;
  }

  .subtitle {
    font-size: 14px;
    color: #66c0f4;
    margin-bottom: 0.5rem;
  }

  .xp {
    font-size: 13px;
    color: #66c0f4;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  .date {
    font-size: 12px;
    color: #8f98a0;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;

    li {
      background: rgba(27, 40, 56, 0.6); /* cinza-azulado translúcido */
      border: 1px solid #1b2838;
      border-radius: 4px;
      padding: 0.6rem;
      font-size: 13px;
      color: #c7d5e0;
      display: flex;
      align-items: center;
      gap: 0.6rem;

      &::before {
        content: "★";
        color: #ffd700; /* dourado mais vivo */
        font-size: 14px;
      }
    }
  }
`;

function TecBadge() {
  return (
    <TecContainer>
      <h2>Comitê de Indicação dos Prêmios Steam de 2017</h2>
      <p className="subtitle">Comitê de Indicação dos Prêmios Steam de 2017</p>
      <p className="xp">100 XP</p>
      <p className="date">Alcançada em 22/nov/2017 às 20:22</p>

      <ul>
        <li>Indique pelo menos 1 jogo</li>
        <li>Indique um jogo para cada categoria</li>
        <li>Jogue um jogo indicado por você</li>
        <li>Escreva ou atualize uma análise de um jogo indicado</li>
      </ul>
    </TecContainer>
  );
}

export default TecBadge;
