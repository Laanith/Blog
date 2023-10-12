import './App.css';
import './index.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost_1 from './components/BlogPosts/BlogPost_1';
import GithubMock from './components/GithubMock';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route>
      <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route>
    </Routes>
    </BrowserRouter> 

  );
}

export default App;
