import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const text = ["Lol", "Kek", "Cheburek"];
  return (
    <div className="App">
      <Header></Header>
      <Link to="/">Main page</Link>
      <br></br>
      <Link to="/lists">Lists</Link>
      <Routes>
        <Route path='/'/>
        <Route path='/lists' element={<List size="3" text={text}/>} />
      </Routes>
    </div>
  );
}

export default App;
