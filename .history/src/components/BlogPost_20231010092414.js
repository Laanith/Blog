function BlogPost(){
    return (
    <div className="mx-[200px]">
    <div className="flex h-[300px] text-black shadow-2xl shadow-slate-300 border-b-4 justify-between BlogPost">
                <img className="w-[150px] m-5 BlogPost_Image" alt="teri maa ki .." src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*NZikwvxFY6gVsjY64itdiw.jpeg"></img>
                <div>
                <h3 className="font-bold text-5xl m-5 BlogPost_Title"><a href="#">Namaste</a></h3>
                <p className="m-5 BlogPost_Primer">need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
            <hr></hr>
    </div>
    )
}

export default BlogPost;