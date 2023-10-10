function TitleBar(){
    return (
        <>
        <div  className="flex align-middle justify-between mx-[200px]" id="draggableArea">
            <div className=" text-cyan-700 capitalize hover:text-blue-900">
            <h1 className="inline font-mono text-4xl my-3">
                T_A_B_
            </h1>
            <hr style={{display:'inline', transform : 'rotateZ(90deg)'}}></hr>
            <h1 className="inline font-sans font-bold text-4xl my-3">The Anonymous Blogger</h1>
            </div>
        <div id="links" className="inline">
            <a className="align-center hover:text-blue-500 mx-[50px]" style={{marginTop : 20, display:'inline-block'}} >
                Home
            </a>
            <a className="align-center hover:text-blue-500 mx-[50px]" style={{marginTop : 20, display:'inline-block'}}>
                Github
            </a>
        </div>
        </div> 
        </>

    );
}

export default TitleBar;