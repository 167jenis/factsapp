import React from "react";
import { Link } from "react-router-dom";
function FeaturedFacts() {
  return (
    <>
      <div>
        <div className="card_main">
          <Link to={"/allfact/colorsFacts"} className="card ">
            <div className="card_img featured_card">
              <p>colors facts</p>
            </div>
          </Link>
          <Link to={"/allfact/humanBehaviourFacts"} className="card ">
            <div className="card_img featured_card">
              <p>human behaviour facts</p>
            </div>
          </Link>
          <Link to="#" className="card ">
            <div className="card_img featured_card">
              <p>love facts</p>
            </div>
          </Link>
          {/* fftg  */}
          <Link to="#" className="card ">
            <div className="card_img featured_card">
              <p>personality </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default FeaturedFacts;
