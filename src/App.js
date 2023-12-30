import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <Home/>
      <Articles/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
