function BlogPost(props){
    return (
    <div className="mx-[200px]">
    <div className="flex h-[300px] text-black shadow-2xl shadow-slate-600 border-b-4 justify-between BlogPost">
                <img className="w-[150px] m-5 BlogPost_Image" alt={props.imgAlt} src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*NZikwvxFY6gVsjY64itdiw.jpeg"></img>
                <div>
                <h3 className="font-bold text-5xl m-5 BlogPost_Title"><a href="#">{props.name}</a></h3>
                <p className="m-5 BlogPost_Primer">{props.content}</p>
                </div>
            </div>
            <hr></hr>
    </div>
    )
}

export default BlogPost;