import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db, dp, storage } from "./Firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { IonIcon } from "@ionic/react";
import {
  colorPalette,
  arrowBack,
  copy,
  shareSocial,
  arrowDown,
  starOutline,
  star,
  key,
} from "ionicons/icons";
import { Storage } from "@capacitor/storage";

function AllFact() {
  const param = useParams();
  const { name } = param;
  // const { id } = param;
  const [col, setcol] = useState();
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const categotiesCollectionRef = collection(db, "categories");
  const colorCollectionRef = collection(dp, "color");
  const [starDark, setstarDark] = useState([]);
  let [dataStor, setdataStor] = useState([]);

  useEffect(() => {
    const getcotegories = async () => {
      const data = await getDocs(categotiesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // data.docs.map((doc) => console.log("sxxxssxsxsx", doc.id))
      );
    };
    getcotegories();

    const getcolor = async () => {
      const daatacolor = await getDocs(colorCollectionRef);
      setColor(daatacolor.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getcolor();
  }, []);

  function colorChang(ind, i) {
    categories[i].facts.forEach((em) => {
      if (em.iidchek === ind) {
        if (em.colorArr.length < em.iid || em.colorArr.length === em.iid) {
          setcol((em.iid = 0));
        } else {
          setcol((em.iid += 1));
        }
      }
    });
  }

  const storeData = async (ind, i, ii, id, title) => {
    let ref = doc(db, "categories", ii);
    let dosc = await getDoc(ref);
    let updatedObj = {
      ...dosc.data(),
    };
    updatedObj["facts"][id].star = true;
    await updateDoc(ref, updatedObj);
    categories[i].facts.forEach((em) => {
      if (em.iidchek === ind) {
        setstarDark((em.star = true));
      }
    });
    let newObj = {
      text: title,
      id: id,
    };
    setdataStor([...dataStor, newObj]);
    Storage.set({ key: "key", value: JSON.stringify([...dataStor, newObj]) });
  };

  const removeStoreData = async (ind, i, ii, id) => {
    let remRef = doc(db, "categories", ii);
    let remDosc = await getDoc(remRef);
    let remObj = {
      ...remDosc.data(),
    };
    remObj["facts"][id].star = false;
    await updateDoc(remRef, remObj);
    categories[i].facts.forEach((em) => {
      if (em.iidchek === ind) {
        setstarDark((em.star = false));
      }
    });
    console.log("cccccccccc", ind);

    dataStor.forEach((e) => {
      console.log("e.id--->", e.id);
      // console.log("indexxx----->", indexx);
      if (ind === e.id) {
        console.log("e.id-== if=== in->", e.id);
        const index = dataStor.map((obj) => obj.id).indexOf(e.id);
        console.log("index---give--->", index);

        // dataStor.splice(index, 1);
        console.log("dcdcdcdcccccc", dataStor.splice(index, 1));
        Storage.set({
          key: "key",
          value: JSON.stringify([...dataStor, dataStor.splice(index, 1)]),
        });
      }
    });
  };
  console.log("array of onject----->", dataStor);

  // if (categories && color.length !== 0) {
  categories.forEach((e) => {
    e.facts.forEach((ft) => {
      ft.colorArr = color[0]?.colorarray;
    });
  });
  // }/
  // useEffect(() => {}, [storeData, removeStoreData]);
  return (
    <>
      <ion-content>
        <div className="container">
          <div>
            <Link to={"/factsBYctegory"}>
              <IonIcon icon={arrowBack} />
            </Link>
            <div>{name}</div>
          </div>
          {color.length !== 0 ? (
            categories.map((item, i) => (
              <div className="general_fact_container" key={i}>
                {name === item.name ? (
                  item?.facts.map((e, ind) => (
                    <div className="general_fact_card" key={ind}>
                      <div>
                        <Link to={item.sliderLink}>
                          <div
                            id="general_facts_back"
                            style={{ background: e.colorArr[e.iid] }}
                          >
                            <span>{e.title}</span>
                          </div>
                        </Link>
                        <div className="general_fact_bottom">
                          <span onClick={() => colorChang(ind, i)}>
                            <IonIcon icon={colorPalette} />
                          </span>
                          <span
                            onClick={() =>
                              navigator?.clipboard?.writeText(e.title)
                            }
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
                            {e.star ? (
                              <span
                                className="true"
                                onClick={() =>
                                  removeStoreData(
                                    ind,
                                    i,
                                    item.id,
                                    e.iidchek,
                                    e.title
                                  )
                                }
                              >
                                <IonIcon icon={star} />
                              </span>
                            ) : (
                              <span
                                className="false"
                                onClick={() => {
                                  {
                                    storeData(
                                      ind,
                                      i,
                                      item.id,
                                      e.iidchek,
                                      e.title
                                    );
                                  }
                                }}
                              >
                                <IonIcon icon={starOutline} />
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </ion-content>
    </>
  );
}
export default AllFact;
