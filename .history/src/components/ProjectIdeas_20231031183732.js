import Footer from "./Footer";
import Header from "./Header";


function ProjectIdeas(){
    return (
      <>
        <Header></Header>
        <div className="mx-[200px] mb-[260px]">
          <p className="text-gray-600 prompt mx-[5px]">
            I'm just an undergraduate, exploring the fields of Data-science, AI
            and Web-development.
            <br></br>
            <br></br>
            This page, is exclusively maintained for myself to keep track of
            stupid project ideas I have in my mind.
          </p>

          <ul className="mx-[40px] mt-[35px]">
            <li className="mb-[15px] text-gray-600 prompt mx-[30px]">
              Cricket world cup is now ruling the sports industry, and I love
              the fact that I am finding myself interested in the sport. Well, I
              have an idea of a data visualisation project where I can scrape
              data about every ICC world cup player and display it on computer.
              <br></br>I should try to find a dataset for the project or else
              use web-scraping to make a dataset for myself.
              <br></br>
              <br></br>
              <strong>
                <i>Update : Oct 31,2023</i>
              </strong>{" "}
              I have scraped out details of 10 teams participating in ICC World
              Cup 2023. Now that I have the data, all that remains is data
              visualisation.
              <br></br>
              Thanks.
            </li>
            {/* <li className="my-[15px]">
                <p className="text-gray-600 prompt mx-[30px]">
                    I have an idea to make my own portfolio
                </p>
            </li> */}
          </ul>
        </div>
        <Footer></Footer>
      </>
    );
}

export default ProjectIdeas;