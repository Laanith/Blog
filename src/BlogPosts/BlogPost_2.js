import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ImageComponent from "../Components/ImageComponent";
import DoubleImageComponent from "../Components/DoubleImageComponent";
import trainImg from '../images/hcgbhavnagar_micu_mon--405_2022_5_30_7_20_12.jpeg';
import img from '../images/image.png';
import imgMask from '../images/imagemask.png';


function BlogPost_2() {
  
  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px] lg:mx-[200px]">
        <p>
          {" "}
          <i className="date">October 22, 2023</i>
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
          For those who want to have a look at the Cherno, I am including an
          iframe here that points to the introduction video of C++ playlist.
          Let's meet next time. I seriously don't know when it will be. Bye
          until then.
          <div className="flex mb-[30px] mt-[30px] justify-center">
            <iframe
              style={{ boxShadow: "5px 5px 5px  #000" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/18c3MTX0PK0?si=4adLXYup9GYXIzSA&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogPost_2;
