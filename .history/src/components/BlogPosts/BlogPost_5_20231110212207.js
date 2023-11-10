import TitleBar from "../TitleBar";
import Header from "../Header";
import Footer from "../Footer";
import ImageComponent from "../ImageComponent";
import thambolabefore from "../../images/thambola-before.jpeg";
import thambolaafter from "../../images/thambola-after.jpeg";

const props1 = {
  imgSrc: thambolabefore,
  type: "contain",
  imgAlt: "quote by May Sarton - Belgian Female Novelist",
  scale: 0.8,
  marginTop: 0,
  marginBottom: -450,
};

const props2 = {
  imgSrc: thambolaafter,
  type: "contain",
  imgAlt: "quote by May Sarton - Belgian Female Novelist",
  scale: 0.8,
  marginTop: 0,
  marginBottom: 0,
};

function BlogPost_5() {
  return (
    <>
      <Header></Header>
      <div id="wrapper" className="mx-[200px]">
        {/* <ImageComponent props={props}></ImageComponent> */}

        <p className="text-gray-600 prompt">
          <i>November 10, 2023</i>
          Hi all. ( Incase there are multiple people reading this except me and
          you.)
          <br></br>
          <br></br>I got a free weekend on which I actually wasted ( not
          literally wasted but actually learnt something) 3hrs spending time
          working on revamping the UI of my previously completed mini-project
          kinda thing.
          <br></br>
          <br></br>
          Well here we go. The project actually uses XAMPP stack. It is just a
          stupid little project that is all about generating number board and
          tickets for thambola game. I got to know about PHP shell_exec function
          actually through it, a function in PHP through which you run shell
          commands on server through PHP and collect the following output as
          string.
          <br></br>
          <br></br>
          Incase you don't know about thambola it's other name is Housie. I
          found a python script that actually prints out tickets needed for
          thambola game. I modified it to generate 6 tickets through a for loop.
          It needs a module called 'Housie' to be installed through pip.
          <br></br>
          <br></br>
          And then, I collected the output string that has tickets sepearated by
          two '\n' characters. Used some regex in PHP to actually collect the
          numbers and used them with javascript to populate the UI of tickets.
          <br></br>
          <br></br>
          Numberboard for housie game is actually built by generating random
          numbers from 1 to 90 and storing the already generated numbers to make
          sure that they will not get duplicated again. Accounts that were
          created are diverted to MySQL database that comes along with XAMPP
          server. So you can assume signin and signup pages were also made.
          <br></br>
          <br></br>
          However, this was the scene 1.5 years ago. I didn't like its CSS then.
          I always thought of modifying it, which actually took 3 hrs but needed
          a motivation that continued for one and a half year in order to start
          doing the thing. The UI still looks minimal, cuz I am not pro in CSS.
          But it looks better actually. I have to go for a mini militia session
          with my college mates here. So I currently end writing this blog. I am
          sharing this above statement as it will remain a memory when I read it
          again someday hopefully. Along with this, I am sharing the images of
          the project before and after revamping the UI.
          <br></br>
          <br></br>
          <ImageComponent props={props1}></ImageComponent>
          <ImageComponent props={props2}></ImageComponent>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogPost_5;
