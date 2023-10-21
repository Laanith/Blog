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

function BlogPost_2() {
    return (
        <>
            <Header></Header>
            <div id='wrapper' className='mx-[200px]'>
                    <br></br>
                    <br></br>
                <p className='text-gray-600 prompt'><i>16th October 2023,</i>
                    <br></br>
                    <br></br>
                    Hi,
                    <br></br>
                    <br></br>
                    Last weekend was too hectic, I felt too overwhelmed actually. There was a competition going on upon Kaggle
                    being hosted by my University. The problem statement was to extract screen-region of several ECG monitors 
                    captured in different orientations.
                    <br></br>
                    <br></br>
                    The dataset was clean. The actual problem in the statement is that the screens need not be rectangular. 
                    Actually , applying a rectangular bounding box using YOLO would have been easy if all the train images were 
                    homogeneous. They contain screens which are quadrilateral in shape too actually, as the camera was capturing the
                    image of ECG machine from different orientations in the room.



                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default BlogPost_2;