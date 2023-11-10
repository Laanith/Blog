import './App.css';
import './index.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost_1 from './components/BlogPosts/BlogPost_1';
import GithubMock from './components/GithubMock';
import ProjectIdeas from './components/ProjectIdeas';
import BlogPost_2 from './components/BlogPosts/BlogPost_2';
import BlogPost_3 from './components/BlogPosts/BlogPost_3';
import BlogPost_4 from './components/BlogPosts/BlogPost_4';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        {/* <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route> */}
        <Route
          path="/project-ideas"
          element={<ProjectIdeas></ProjectIdeas>}
        ></Route>
        <Route path="/github-mock" element={<GithubMock></GithubMock>}></Route>
        <Route
          path="/computer-vision"
          element={<BlogPost_2></BlogPost_2>}
        ></Route>
        <Route path="/cplusplus" element={<BlogPost_3></BlogPost_3>}></Route>
        <Route path="/mnist-deployment" element={<BlogPost_4></BlogPost_4>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
