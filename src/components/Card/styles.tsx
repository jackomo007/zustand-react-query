import styled from "styled-components";

const CardLayout = styled.div`
  display: grid;
  grid-template:
        "a a a" 40px
        "b c c" 40px
        "b c c" 40px / 1fr 2fr 1fr;
  border-radius: 8px;
  background-color: #414141;
  margin-bottom: 1rem;
  padding: 5px;
`

const CardButton = styled.span`
  padding: 5px;
  height: 12vh;
  cursor: pointer;
`

const Column = styled.div`
display: flex;
flex-direction: column;
`;

const ColumnIcon = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
`;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 padding-left: 10px;
`;

const Title = styled.span`
  font-size: large;
  font-weight: bold;
  text-align: left;
  padding: 5px;
`

const Topic = styled.span`
  color: #4DD0E1;
  font-size: small;
  text-align: center;
  padding: 5px;
  width: fit-content;
  border-radius: 10%;
`;

const Icon = styled.img `
  width: 2rem;
`;

export {CardLayout,
  CardButton,
  Column,
  ColumnIcon,
  Row,
  Title,
  Topic,
  Icon }