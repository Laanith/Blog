import './App.css';
import './index.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost_1 from './components/BlogPosts/BlogPost_1';
import GithubMock from './components/GithubMock';
import ProjectIdeas from './components/ProjectIdeas';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route>
      <Route path='/project-ideas' element={<ProjectIdeas></ProjectIdeas>}></Route>
      <Route path='/github-mock' element={<GithubMock></GithubMock>}></Route>

    </Routes>
    </BrowserRouter> 

  );
}

export default App;
