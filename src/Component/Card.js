import React from "react";
import { Link } from "react-router-dom";
import { IonContent, IonMenu } from "@ionic/react";
function Card() {
  return (
    <>
      <div className="card_main">
        <Link to={"/allfact/angerFacts"} className="card">
          <div className="card_img"></div>
          <p>anger facts</p>
        </Link>
        <Link to={"/allfact/humanBehaviourFacts"} className="card">
          <div className="card_img"></div>
          <p>human behaviour facts</p>
        </Link>
        <Link to={"/allfact/loveFacts"} className="card">
          <div className="card_img"></div>
          <p>love facts</p>
        </Link>
        <Link to={"/allfact/personalityFacts"} className="card">
          <div className="card_img"></div>
          <p>personality </p>
        </Link>
      </div>
    </>
  );
}
export default Card;
