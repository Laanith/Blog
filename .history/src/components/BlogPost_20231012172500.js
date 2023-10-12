function BlogPost(props){
    return (
    <div className="mx-[200px] mb-[35px]">
    <div className="flex h-[300px] text-black shadow-2xl hover:shadow-slate-600 border-b-4 justify-between BlogPost">
                <img className="w-[150px] m-5 BlogPost_Image" alt={props.props.imgAlt} src={props.props.imgSrc} style={{objectFit : props.props.type}}></img>
                <div>
                <h3 className="font-bold text-5xl m-5 BlogPost_Title"><a href={props.props.link}>{props.props.title}</a></h3>
                <p className="m-5 BlogPost_Primer">{props.props.content}</p>
                </div>
            </div>
            <hr></hr>
    </div>
    )
}


BlogPost.defaultProps = {
    props : {
        scale : 0.9
    }
}

export default BlogPost;