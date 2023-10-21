import TitleBar from '../TitleBar';
import Header from '../Header';
import Footer from '../Footer';
import ImageComponent from '../ImageComponent'



const props = {
    imgSrc: 'https://www.azquotes.com/picture-quotes/quote-the-more-articulate-one-is-the-more-dangerous-words-become-may-sarton-25-92-40.jpg',
    type: 'contain',
    imgAlt: 'quote by May Sarton - Belgian Female Novelist',
    scale: 0.6
}

function BlogPost_1() {
    return (
        <>
            <Header></Header>
            <div id='wrapper' className='mx-[200px]'>
                    <br></br>
                    <br></br>
                <p className='text-gray-600 prompt'>
                    <br></br>
                    <br></br>

                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default BlogPost_1;