import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Component Imports
import BlogTemplate from "./Components/BlogTemplate";
import Primer from "./Primer";
import "./index.css";
import BlogPost_1 from "./BlogPosts/BlogPost_1";
import BlogPost_2 from "./BlogPosts/BlogPost_2";
import BlogPost_3 from "./BlogPosts/BlogPost_3";
import BlogPost_4 from "./BlogPosts/BlogPost_4";
import ProjectIdeas from "./ProjectIdeas";
import GithubMock from "./GithubMock";
import BlogPost_5 from "./BlogPosts/BlogPost_5";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}






    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage></HomePage>}></Route>
    //     {/* <Route path='/articulation' element={<BlogPost_1></BlogPost_1>}></Route> */}
    //     <Route
    //       path="/project-ideas"
    //       element={<ProjectIdeas></ProjectIdeas>}
    //     ></Route>
    //     <Route path="/github-mock" element={<GithubMock></GithubMock>}></Route>
    //     <Route
    //       path="/computer-vision"
    //       element={<BlogPost_2></BlogPost_2>}
    //     ></Route>
    //     <Route path="/cplusplus" element={<BlogPost_3></BlogPost_3>}></Route>
    //     <Route path="/mnist-deployment" element={<BlogPost_4></BlogPost_4>}></Route>
    //     <Route path="/revamp" element={<BlogPost_5></BlogPost_5>}></Route>



    //   </Routes>
    // </BrowserRouter>
  // );







function App() {

  const [fontClass, setFontClass] = useState('cmu');



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Primer setFontClass={setFontClass} fontClass={fontClass}></Primer>} />
        <Route path="/github-mock" element={<GithubMock></GithubMock>} />
        <Route
          path="/project-ideas"
          element={<ProjectIdeas></ProjectIdeas>}
        ></Route>
        <Route path="/computer-vision" element={<BlogPost_1 />} />
        <Route path="/cplusplus" element={<BlogPost_2 />} />
        <Route path="/mnist-deployment" element={<BlogPost_3 />} />
        <Route path="/revamp" element={<BlogPost_4 />} />
        <Route path="/return" element={<BlogPost_5 />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
