import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import RulesDisplay from './components/RulesDisplay';


function App() {
  return (
    <div className="App">
      <NavBar />
      <RulesDisplay/>
      <Footer />
    </div>
  );
}

export default App;
