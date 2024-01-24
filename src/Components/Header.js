import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
    return (
      <div>
        <div className="flex flex-row min-w-full w-full max-w-full h-fit justify-between p-[20px] mb-auto">
          <div className="w-[30vw] font-semibold text-4xl hover:text-cyan-700 segoe-ui">
            T_A_B_
          </div>
          <div className="w-[70vw]">
            <ul className="flex flex-col ml-[90px] xs:flex-row xs:mr-0 justify-evenly mt-[10px] text-blue-700">
              <li
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer"
              >
                Home
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/project-ideas");
                }}
              >
                Project Ideas
              </li>
              <li
                onClick={() => {
                  navigate("/github-mock");
                }}
                className="cursor-pointer"
              >
                Github
              </li>
            </ul>
          </div>
        </div>
        <div className="text-4xl xs:text-5xl font-bold p-[20px] hover:text-cyan-700 segoe-ui">
          The Anonymous Blogger
        </div>
      </div>
    );
}

export default Header;