function TitleBar(){
    return (
        <>
        <div  className="flex align-middle justify-between " id="draggableArea">
            <h1 className="inline font-mono text-4xl my-3 text-blue-900 capitalize">
                T_A_B_
            </h1>
        <div id="links" className="inline">
            <a className="" style={{marginTop : 10}} >
                Home
            </a>
            <a className="" style={{marginTop : 10}}>
                Github
            </a>
        </div>
        </div> 
        </>

    );
}

export default TitleBar;