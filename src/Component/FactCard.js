import { Link } from "react-router-dom";
function FactCard() {
  return (
    <>
      <div>
        <div className="card_main">
          <Link to={"/allfact/healthFacts"} className="card">
            <div className="card_img"></div>
            <p>health facts </p>
          </Link>
          <Link to={"/allfact/menFacts"} className="card">
            <div className="card_img"></div>
            <p>men facts</p>
          </Link>
          <Link to={"/allfact/brainFacts"} className="card">
            <div className="card_img"></div>
            <p>brain facts</p>
          </Link>
          <Link to={"/allfact/musicFacts"} className="card">
            <div className="card_img"></div>
            <p>music facts </p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default FactCard;
