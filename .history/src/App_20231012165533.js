import './App.css';
import './index.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import {HomePage} from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>
    </BrowserRouter> 

  );
}

export default App;
