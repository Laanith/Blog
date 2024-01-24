import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ImageComponent from "./Components/ImageComponent";

function ProjectIdeas() {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px]">
        <p className="mx-[5px]">
          I'm just an undergraduate, exploring the fields of Data-science, AI
          and Web-development.
          <br></br>
          <br></br>
          This page, is exclusively maintained for myself to keep track of
          stupid project ideas I have in my mind.
        </p>

        <ul className="mx-[40px] mt-[35px]">
          <li className="mb-[15px] mx-[30px]">
            Cricket world cup is now ruling the sports industry, and I love the
            fact that I am finding myself interested in the sport. Well, I have
            an idea of a data visualisation project where I can scrape data
            about every ICC world cup player and display it on computer.
            <br></br>I should try to find a dataset for the project or else use
            web-scraping to make a dataset for myself.
            <br></br>
            <br></br>
            <strong>
              <i className="date">Update : Oct 31,2023,</i>
            </strong>{" "}
            <br></br>I have scraped out details of 10 teams participating in ICC
            World Cup 2023. Now that I have the data, all that remains is data
            visualisation.
            <br></br>
            Thanks.
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProjectIdeas;
