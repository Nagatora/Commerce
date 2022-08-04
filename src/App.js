import './App.css';
import NavBar from './components/NavBar';
import CardList from './containers/CardsList';
import "bootstrap/dist/css/bootstrap.min.css";
import Itemlistcontainer from './containers/CardsList'

const App = () => {
  return (
    <>
          <NavBar/>
          <Itemlistcontainer/>
    </>
  );
}

export default App;
