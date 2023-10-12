import TitleBar from '../TitleBar';
import Header from '../Header';
import Footer from '../Footer';
import ImageComponent from '../ImageComponent'



const props = {
    imgSrc : 'https://www.azquotes.com/picture-quotes/quote-the-more-articulate-one-is-the-more-dangerous-words-become-may-sarton-25-92-40.jpg',
    type :'cover'

}

function BlogPost_1(){
    return (
        <>
        <Header></Header>
        <ImageComponent props={props}></ImageComponent>
        <Footer></Footer>
        </>
    );
}

export default BlogPost_1;