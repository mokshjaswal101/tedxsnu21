import "./Speakers.scss";
const reqSvgs = require.context("../../assets/svgs/Speakers", true, /\.svg$/);
const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

function speakers() {
  const style = (index) => {
    const styleOb = {
      marginLeft: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    };
    if (index === 0 || index === 8) styleOb.marginLeft = "400px";
    else if (index === 7 || index === 1) styleOb.marginLeft = "250px";
    else if (index === 6 || index === 2) styleOb.marginLeft = "100px";
    else if (index === 5 || index === 3) styleOb.marginLeft = "50px";
    if (index > 4) styleOb.marginBottom = "-50px";
    else if (index < 4) styleOb.marginTop = "-50px";
    return styleOb;
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
