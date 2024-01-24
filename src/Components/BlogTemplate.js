import Header from "./Header";
import Footer from "./Footer";
import ImageComponent from "./ImageComponent";

function BlogTemplate() {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-screen selection:bg-[#79d2ffe6]">
      <Header></Header>
      <div id="BODY" className="p-[20px]">
        <p>

          </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogTemplate;
