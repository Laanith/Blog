function TitleBar(){
    return (
        <>
        <div  className="flex align-middle justify-between " id="draggableArea">
            <h1 className="inline font-mono text-4xl my-3 text-blue-900 capitalize">
                T_A_B_
            </h1>
        <div id="links" className="inline align-middle">
            <a className="align-middle" >
                Home
            </a>
            <a>
                Github
            </a>
        </div>
        </div> 
        </>

    );
}

export default TitleBar;