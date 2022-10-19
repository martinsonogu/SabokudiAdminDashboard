
import './App.css';
import Sidebar from "../src/components/sidebar/sidebar" 
import Home from "../src/pages/home/home"


function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Home/>

    </div>
  );
}

export default App;
