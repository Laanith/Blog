function TitleBar(){
    return (
        <>
        <div  className="flex align-middle justify-between mx-[200px]" id="draggableArea">
            <h1 className="inline font-mono font-bold text-4xl my-3 text-cyan-700 capitalize hover:text-blue-900">
                T_A_B_
            </h1>
        <div id="links" className="inline">
            <a href='/' className="align-center hover:text-blue-500 mx-[50px]" style={{marginTop : 20, display:'inline-block'}} >
                Home
            </a>
            <a href='/github-mock' className="align-center hover:text-blue-500 mx-[50px]" style={{marginTop : 20, display:'inline-block'}}>
                Github
            </a>
            <a href='/project-ideas' className="align-center hover:text-blue-500 mx-[50px]" style={{marginTop : 20, display:'inline-block'}}>
                Project Ideas
            </a>
        </div>
        </div> 
        </>

    );
}

export default TitleBar;