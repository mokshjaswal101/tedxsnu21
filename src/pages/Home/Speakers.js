import "./Speakers.scss";
const reqSvgs = require.context("../../assets/svgs/Speakers", true, /\.svg$/);
const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

function speakers() {
  const style = (index) => {
    if (index === 0 || index === 8) return { marginLeft: "400px" };
    else if (index === 7 || index === 1) return { marginLeft: "250px" };
    else if (index === 6 || index === 2) return { marginLeft: "100px" };
    else if (index === 5 || index === 3) return { marginLeft: "50px" };
  };

  return (
    <>
      <div className="speakers">
        <div className="speakers__left">
          <h1>Our Speakers</h1>
        </div>
        <div className="speakers__right">
          {svgs.map((svg, index) => (
            <img
              src={svg.default}
              alt="img"
              height="100px"
              width="100px"
              style={style(index)}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default speakers;
