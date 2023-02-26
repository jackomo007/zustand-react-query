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

  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
  
  & {
  background: #191c29;
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 5px;
  width: 100%;
}

.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
&:hover:before, &:hover:after {
  animation: none;
  opacity: 0;
}


&:before {
  content: "";
  width: 105%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

&:after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
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
