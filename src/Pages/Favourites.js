import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Storage } from "@capacitor/storage";
import {
  arrowBack,
  colorPalette,
  copy,
  shareSocial,
  arrowDown,
  starOutline,
  star,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Favoutites() {
  const [dataArray, setDataArray] = useState();

  const getdata = async () => {
    const { value } = await Storage.get({ key: "key" });
    console.log("ccccccccccccccc", value);
    const user = JSON.parse(value);
    setDataArray(user);
  };

  function click() {
    console.log("Ccc");
  }
  useEffect(() => {
    getdata();
  }, []);
  // useEffect(() => {getdata}, [dataArray]);
  return (
    <>
      <ion-content>
        {console.log("llllllllllllll'''", dataArray)}
        <div className="container">
          <div>
            <Link to="/">
              <IonIcon icon={arrowBack} />
            </Link>
            <div>favourites</div>
          </div>
          <div className="general_fact_container">
            {dataArray?.map((data, index) => (
              <div className="general_fact_card" key={index}>
                <Link to={"#"}>
                  <div
                    id="general_facts_back"
                    style={{ backgroundColor: "red" }}
                  >
                    <span>{data.text}</span>
                    {/* {console.log("hjhjhjhjhjhjhjh--->", data.text)} */}
                  </div>
                </Link>
                <div className="general_fact_bottom">
                  <span onClick={() => click()}>
                    <IonIcon icon={colorPalette} />
                  </span>
                  <span
                    onClick={() => navigator.clipboard.writeText(data.text)}
                  >
                    <IonIcon icon={copy} />
                  </span>
                  <span>
                    <IonIcon icon={shareSocial} />
                  </span>
                  <span>
                    <IonIcon icon={arrowDown} />
                  </span>
                  <span className="star_span">
                    <span>
                      <IonIcon icon={star} />
                    </span>
                    <span>
                      <IonIcon icon={starOutline} />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ion-content>
    </>
  );
}
export default Favoutites;
