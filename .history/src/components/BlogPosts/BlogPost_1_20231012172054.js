import TitleBar from '../TitleBar';
import Header from '../Header';
import Footer from '../Footer';
import ImageComponent from '../ImageComponent'



const props = {
    imgSrc : 'https://www.azquotes.com/picture-quotes/quote-the-more-articulate-one-is-the-more-dangerous-words-become-may-sarton-25-92-40.jpg',
    type :'cover',
    imgAlt : 'quote by May Sarton - Belgian Female Novelist',
    scale : '0.1'
}

function BlogPost_1(){
    return (
        <>
        <Header></Header>
        <div id='wrapper' className='mx-[200px]'>
        <ImageComponent props={props} scale={0.5}></ImageComponent>

        <p>The quote above tells everything, I guess.....
            <br></br>
            <br></br>

        </p>
        </div>
        <Footer></Footer>
        </>
    );
}

export default BlogPost_1;