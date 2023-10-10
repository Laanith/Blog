function TitleBar(){
    return (
        <>
        <div  className="flex align-middle justify-between " id="draggableArea">
            <h1 className="inline font-mono text-4xl my-3 text-blue-900 capitalize underline decoration-dotted underline-offset-4">
                T_A_B_
            </h1>
        <div id="links" className="inline">
            <a className="align-center" style={{marginTop : 20, display:'inline-block'}} >
                Home
            </a>
            <a className="align-center" style={{marginTop : 20, display:'inline-block'}}>
                Github
            </a>
        </div>
        </div> 
        </>

    );
}

export default TitleBar;