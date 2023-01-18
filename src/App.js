
import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/AccountBox/index.jsx';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flexdirection: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return ( 
    <AppContainer>
      <AccountBox />
    </AppContainer>
  
  );
}

export default App;
