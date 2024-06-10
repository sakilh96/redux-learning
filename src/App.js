
import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
