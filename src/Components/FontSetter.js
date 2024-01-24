export default function FontSetter(props) {
  const handleClick = (e) => {
    console.log(e.target.className);
    document.getElementsByTagName("body")[0].classList.remove(props.fontClass);
    document.getElementsByTagName("body")[0].classList.add(e.target.className);
    props.setFontClass(e.target.className);
  };

  return (
    <div className={`${props.fontClass} mx-[100px] px-[40px] py-[20px] border-4 rounded-xl border-gray-500`} id="font-setter">
      <p>
        Before you get in... <br></br>
        Well, the typeface matters a lot. In my view, the font in which we read
        a blog must be attractive enough to pull the readers' attention. In that
        regard, what can be the best font that can surpass the user's favorite
        typeface.
        <br></br>
        Hence I came up with a solution. Here are
        some fonts that are handpicked by me belonging to several classes of
        typefaces. Pick the one that suits you best.
      </p>
      <ul id="font-display" className="my-[40px] gap-8 flex flex-row flex-wrap">
        <li className="albertsthal" onClick={handleClick}>
          Albertsthal
        </li>
        <li className="cmu" onClick={handleClick}>
          CMU-Typewriter
        </li>

        <li className="monolisa" onClick={handleClick}>
          Monolisa Regular
        </li>
        <li className="ubuntu" onClick={handleClick}>
          Ubuntu mono
        </li>
        <li className="source-serif" onClick={handleClick}>
          Source Serif 4
        </li>
        <li className="consolas" onClick={handleClick}>
          Consolas
        </li>
        <li className="segoe-ui" onClick={handleClick}>
          Segoe UI
        </li>
        <li className="source-pro" onClick={handleClick}>
          Source Serif Pro
        </li>
      </ul>
    </div>
  );
}
