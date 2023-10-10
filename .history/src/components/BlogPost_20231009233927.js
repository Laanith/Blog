function BlogPost(){
    return (
        <div className="h-[300px] text-black mx-[200px] shadow-2xl shadow-slate-300 BlogPost">
            <img className="BlogPost_Image" src="../images/love.jpg"></img>
            <div>
            <h3 className="BlogPost_Title">Namaste</h3>
            <p className="BlogPost_Primer"></p>
            </div>
            
            <hr></hr>
        </div>
    )
}

export default BlogPost;