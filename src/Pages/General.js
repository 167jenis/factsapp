import { useEffect, useState } from "react";
// import { FaCopy } from "react-icons/fa";
// import { IoIosColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";
// import {
//   BsArrowLeft,
//   BsDownload,
//   BsStar,
//   BsShareFill,
//   BsFillStarFill,
// } from "react-icons/bs";
import data from "../general.json";

function General() {
  const [col, setcol] = useState();

  // to get local data
  const getlocalItems = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };
  const [dataArray, setDataArray] = useState(getlocalItems());
  const [dataObj, setDataObj] = useState({});
  function check() {
    alert("hello");
  }
  const addItem = (index) => {
    data[0].general.forEach((i) => {
      if (i.id === index) {
        i.star = true;
      }
    });
    setDataObj({
      text: data[0]?.general[index]?.text,
      id: data[0]?.general[index]?.id,
    });
    ddf();
    console.log("dataobj0dededeffefef------------->", dataObj);
  };
  const ddf = () => {
    setDataArray([...dataArray, dataArray.push(dataObj)]);
  };

  console.log("dataobj0------------->", dataObj);
  console.log("dataArray---->", dataArray);

  const removeItem = (index) => {
    data[0].general.forEach((i) => {
      if (i.id === index) {
        i.star = false;
      }
    });
    const updateData = dataArray.filter((elem, ind) => {
      return elem.id !== index;
    });
    setDataArray(updateData);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(dataArray));
  }, [dataArray]);

  const click = (index) => {
    data[0].general.forEach((e) => {
      // console.log("e.id-----color-->", e.id);
      // console.log("index-----color-->", index);
      if (e.id === index) {
        if (e.color.length < e.iid || e.color.length === e.iid) {
          setcol((e.iid = 0));
        } else {
          setcol((e.iid += 1));
        }
      }
    });
  };

  useEffect(() => {}, [col]);

  return (
    <>
      <div className="container">
        <div>
          <Link to="/">@</Link>
          <div>General</div>
        </div>
        {data[0].general.map((item, index) => (
          <div className="general_fact_container" key={index}>
            <div className="general_fact_card" key={index}>
              <Link to="#" onClick={check}>
                <div
                  id="general_facts_back"
                  style={{ backgroundColor: item.color[item.iid] }}
                >
                  <span>{item.text}</span>
                </div>
              </Link>
              <div className="general_fact_bottom">
                <span onClick={() => click(index)}>@</span>
                <span onClick={() => navigator.clipboard.writeText(item.text)}>
                  @
                </span>
                <span>@</span>
                <span>@</span>
                <span className="star_span">
                  {item.star ? (
                    <span onClick={() => removeItem(index)}>@</span>
                  ) : (
                    <span onClick={() => addItem(index)}>@</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default General;
