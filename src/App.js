import './App.css';
import Intro from "./pages/intro";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Val from './pages/val'
import Out from './pages/Out'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Router>
    <Routes>
      <Route path="/" Component={Intro} />
      <Route path="/val" Component={Val} />
      <Route path="/out" Component={Out} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
