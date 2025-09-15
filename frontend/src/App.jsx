import './css/App.css';
import Favorites from './pages/favorites';
import Home from './pages/home';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
    <main className = "main-content">
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/favorites" element = {<Favorites />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
