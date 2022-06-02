import React, { useState } from "react";
// import { BsArrowLeft, BsDownload, BsStar, BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Popular() {
  const data =
    "people who get embarrassed easily tend to be more teustworthy,loyal,honest, and generous.";
  function click() {
    const value = localStorage.getItem("list");
    console.log("dddddd", data);
    if (value) {
      localStorage.removeItem("list");
    } else {
      localStorage.setItem("list", data);
    }
  }
  return (
    <>
      <ion-content>
        <div className="container">
          <div>
            <Link to="/">@</Link>
            <div>popular</div>
          </div>
          <div className="card_div_main">
            <div className="box_card_div">
              <Link to="/" className="popular_link">
                <div className="popular_back_div">
                  <div className="popular_img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6l2EztwYE-H9ZaMIml1Rf4wf4vxDe3U2VA&usqp=CAU"
                      width="80px"
                      height="80px"
                    ></img>
                  </div>
                  <div>
                    <p>{data}</p>
                  </div>
                </div>
              </Link>
              <div className="card_div">
                <span>@</span>
                <span onClick={click}>@</span>
                <span>@</span>
              </div>
            </div>
            <div className="box_card_div">
              <Link to="/" className="popular_link">
                <div className="popular_back_div">
                  <div className="popular_img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6l2EztwYE-H9ZaMIml1Rf4wf4vxDe3U2VA&usqp=CAU"
                      width="80px"
                      height="80px"
                    ></img>
                  </div>
                  <div>
                    <p>
                      people who get embarrassed easily tend to be more
                      teustworthy,loyal,honest, and generous.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="card_div">
                <span>@</span>
                <span>@</span>
                <span>@</span>
              </div>
            </div>
            <div className="box_card_div">
              <Link to="/" className="popular_link">
                <div className="popular_back_div">
                  <div className="popular_img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6l2EztwYE-H9ZaMIml1Rf4wf4vxDe3U2VA&usqp=CAU"
                      width="80px"
                      height="80px"
                    ></img>
                  </div>
                  <div>
                    <p>
                      people who get embarrassed easily tend to be more
                      teustworthy,loyal,honest, and generous.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="card_div">
                <span>@</span>
                <span>@</span>
                <span>@</span>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </>
  );
}
export default Popular;
