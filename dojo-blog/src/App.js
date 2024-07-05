import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {title}
        <Home/>
      </header>
    </div>
  );
}

export default App;
