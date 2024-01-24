import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FontSetter from "./Components/FontSetter";
import BlogRouter_1 from "./BlogRouters/BlogRouter_1";
import BlogRouter_2 from "./BlogRouters/BlogRouter_2";
import BlogRouter_3 from "./BlogRouters/BlogRouter_3";
import BlogRouter_4 from "./BlogRouters/BlogRouter_4";
import BlogRouter_5 from "./BlogRouters/BlogRouter_5";

function Primer(props) {
    return (
      <div className="flex flex-col min-w-[100vw] min-h-screen">
        <Header></Header>
        <div id="BODY" className="p-[20px] lg:mx-[200px]">
          <p>
            {" "}
            <i className="date">October 10, 2023</i>
            <br></br>
            <br></br>
            Watched <strong>The Social Network </strong> again two days
            ago...after two semesters. Pretty much long time, I think.
            <br></br>
            <br></br>
            Well, Zuckerberg blogged when he was in Harvard. So, why shouldn't I
            do that. I am no Mark Zuckerberg myself, but I am a human just like
            him. Infact, I prefer to be the "John Hopkins" that Andew Garfield
            told himself to be in TASM-2, while sending off his Gwen Stacy for
            final Oxford University admission interview.
            <br></br>
            <br></br>
            The main point of starting off this blog is to improve my typing
            speed. I need to be consistent about something atleast. Currently it
            is about 45 wpm. I need to increase it up as much as I can. Apart
            from that, I have to learn ways to articulate myself. This is a way
            to do that.
            <br></br>
            <br></br>
            It's not about consistency. It's about motivation. It's about
            keeping myself busy, working on several things at a time. The nerdy
            depiction of Zuck (Zuckerberg) has inspired me to some tremendous
            extent. So here I am, starting off a blog 2 days after watching the
            movie.
            <br></br>
            <br></br>
            This blog is a good place for me to share my thoughts. I'm alone in
            my room, trying to improvise my communication skills and improvise
            my knowledge. But the point is, I have to be anonymous. I think
            there is no problem with thinking to live anonymous, I guess. I am
            still building this. It is also a way to improvise my web-dev
            skills. As of now I am using React to host this. I don't know what I
            will shift to later on. It's a platform where I intend to share my
            knowledge, get it rectified and improvise myself.
            <br></br>
            <br></br>I wind up the primer with this....Hope to share you some
            knowledge very soon.
            <hr
              style={{ backgroundColor: "#aaa", height: 2, marginTop: 10 }}
            ></hr>
            <br></br>
            <i className="date">October 12, 2023</i>
            <br></br>
            <br></br>
            As of now, I created the components needed to make blogs....
            everything is set up .. except my vocabulary and topics to discuss.
            <br></br>
            <br></br>
            Thanks for reading.
          </p>
        </div>
        <FontSetter
          setFontClass={props.setFontClass}
          fontClass={props.fontClass}
        />

        <div id="BLOGROUTERS" className="p-[20px] lg:p-[120px]">
          <BlogRouter_1 />
          <BlogRouter_2 />
          <BlogRouter_3 />
          <BlogRouter_4 />
          <BlogRouter_5 />
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Primer;