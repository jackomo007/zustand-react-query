import styled from "styled-components";

const CardLayout = styled.div`
  height: 100px;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 10fr 1fr;
  gap: 8px 5px;

  @media (max-width: 475px) {
    width: 260px;
  }
`;

const CardButton = styled.span`
  height: 4vh;
  cursor: pointer;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 475px) {
    width: 175px;
    overflow: auto;
  }
`;

const Title = styled.span`
  font-size: large;
  font-weight: bold;
  text-align: left;

  @media (max-width: 475px) {
    font-size: 4vw;
  }
`;

const Topic = styled.span`
  color: #4dd0e1;
  font-size: small;
  text-align: center;
  padding: 2px;
`;

const Icon = styled.img`
  width: 1rem;
`;

const Image = styled.img`
  width: 5rem;
  border-style: "outset";
  border-radius: 12px;
  padding: 5px;
`;

export {
  CardLayout,
  CardButton,
  Column,
  ColumnIcon,
  Row,
  Title,
  Topic,
  Icon,
  Image,
};
