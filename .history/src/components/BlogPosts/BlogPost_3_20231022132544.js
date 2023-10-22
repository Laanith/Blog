import TitleBar from "../TitleBar";
import Header from "../Header";
import Footer from "../Footer";
import ImageComponent from "../ImageComponent";
import cpp from "../../images/C++.png";

const props = {
  imgSrc:cpp,
  type: "contain",
  imgAlt: "quote by May Sarton - Belgian Female Novelist",
  scale: 0.3,
  marginTop: -400,
  marginBottom : -400
};

function BlogPost_3() {
  return (
    <>
      <Header></Header>
      <div id="wrapper" className="mx-[200px]">
        <ImageComponent props={props}></ImageComponent>

        <p className="text-gray-600 prompt">
          <i>October 22, 2023</i>
          <br></br>
          <br></br>
          Hi, I seriously regret the fact that I haven't learn C++ totally until
          now. As developers,we know the fact that C++ is the best programming
          language which is supported for multiple platforms. Many devs use it
          to code fast and optimal programs and tools that require high
          computation, for example Chrome V8 engine, that lead to invention of
          Node.js also uses C++.
          <br></br>
          <br></br>
          Despite it being a useful career making language, I hate the fact that
          I have ignored learning it until the prefinal year of my undergraduate
          degree. I knew that <strong>'The Cherno'</strong> youtube tutorials
          are very good for C++. I just now (by 12:15 pm in the afternoon) had a
          look at the introduction video of his C++ course. Damn !! That was
          actually amazing.
          <br></br>
          <br></br>
          Well, it turns out that the Cherno is a game developer in EA, and they
          have to learn C++ and C# for those purposes, C++ for Unreal Engine and
          C# for Unity. It's a profession I love a lot, actually. Hell no, I've
          lost a lot of programming knowledge not learning C++ until now. But I
          have some time yet. Maybe I should start it from now on.
          <br></br>
          <br></br>
          From this week, in order to make my lifestyle a bit more organised, I
          am willing to have a goal of watching 9 videos per week. It's a
          playlist that contains about 100 videos, and 9 is my lucky number. So,
          let it be so...
          <br></br>
          <br></br>
          The determination is to watch 9 videos per week, and to complete The
          Cherno Playlist by 11 weeks approximately from now. I hope I will be
          consistent about it.
          <br></br>
          Thanks.
          <br></br>
          <br></br>
          For those who want to have a look at the Cherno, I am including an I frame here that points to the introduction video of C++ playlist. Let's meet next time. I seriously don't know when it will be. Bye until then.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_3;
