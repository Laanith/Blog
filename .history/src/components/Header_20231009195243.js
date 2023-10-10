import TitleBar from "./TitleBar";

function Header(){


    return (
        <div>
            <TitleBar></TitleBar>
            <header className="flex my-9">
            <h1 className="text-5xl font-large mx-[50px] title">The Anonymous Blogger</h1>
            </header>
        </div>
    );

}

export default Header;