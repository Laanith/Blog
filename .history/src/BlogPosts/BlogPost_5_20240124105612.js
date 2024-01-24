import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ImageComponent from "../Components/ImageComponent";
import kermitScared from "../images/kermit-scared.gif";
import png37 from "../images/37.png";
import png124 from "../images/124.png";


function BlogPost_5() {

  const gifProps = {
    imgSrc: kermitScared,
    caption: "",
    style: {
      marginBottom: -10,
      objectFit : "cover"
    }
  };


  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px] lg:mx-[200px]">
        <p>
          <i className="date">January 24, 2024</i>
          <br />
          <br />
          A happy new year to everyone...first of all.
          <br />
          <br />
          It has been a long break. One and I half month since I coded in a
          focused manner. This blog, is about my comeback.
          <br />
          <br />
          Well, after those stupid university end semester examinations, I was
          interrupted by a vacation that spanned for the whole month of December
          2023. I went home, enjoyed my vacations. Explored all the town with my
          pal, did some mischief with my sister and what not ?.... Going home
          after spending a whole lot of time alone all by yourself feels good.
          Holidays went well, all thanks to that best friend.
          <br />
          <br />
          Then came the time when I had to come to the university campus again.
          Well, that was fine too. The totally unexpected shit that happened
          immediately after coming right here( I am in the campus as of now ..)
          is that my laptop got short circuited. The motherboard is damaged, to
          be more precise.
          <br />
          <br />
          AAAAAAAAAAAAAAAAAAAA.............
          <ImageComponent imgProps={gifProps} />
          Wow ! What a miserable moment to go through, a sudden hole in my
          pocket after bearing expenses of travelling from my home which is 2000
          kilometers away. Anyways, I sent it for repair and had to wait for a
          span of 3 weeks approximately to get it back to my room.
          <br />
          <br />
          Meanwhile, my university professors who remained dormant until my 5th
          semester started off this new semester by announcing us course
          projects. Wow again. 6 course projects in total, one for each course.
          A professor teaching another course called MMDP ( Multi modal data
          processing and learning ) also announced two more mini projects. I
          mean.... why. Why now. Why exactly at the time when my laptop went for
          repair should all this happen ? ( Ah and yes, you're thinking right, I
          am exactly complaining about my campus courses here. )
          <br />
          <br />
          <img
            src={png37}
            className="mx-auto border-2 border-gray-500"
            alt="funny"
          ></img>
          <br />
          <br />
          Anyways, putting aside all these disheartening announcements about
          course logistics, amidst my miserable situation, I managed to finish a
          good book about deep learning using Keras in 3 days. Productivity
          boosted up exponentially without the presence of my laptop, I guess.
          <br />
          <br />
          However, laptop returned.And guess what, the first thing I did after
          its return is binge watch a movie. ( Don't expect me to code 24 x 7
          bruh. I know I disappointed you. 🌚 )
          <br />
          <br />
          And now as usual, I am here, sticking to my laptop screen, coding some
          useless shit and writing this blog. That's all I have to tell you. I
          know, I know, this story seems like my Laptop's comeback more than my
          comeback.
          <br />
          <br />
          Anyways, bye for now. Hope we'll meet soon again. Keep reading my
          blogs. I will post things soon.
          <img
            src={png124}
            className="mx-auto border-2 border-gray-500 w-[280px]"
            alt="funny"
          ></img>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogPost_5;
