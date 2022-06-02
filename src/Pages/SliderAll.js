import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderAll.css";
// import { FaCopy } from "react-icons/fa";
import { db, dp } from "./Firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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
import { IonContent, IonIcon } from "@ionic/react";
function SliderAll() {
  const param = useParams();
  const { name } = param;
  const categotiesCollectionRef = collection(db, "categories");
  const colorCollectionRef = collection(dp, "color");
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const [titleCopy, setTitlecopy] = useState(String);
  const [swiper, setSwiper] = useState(null);
  const indexchang = (index) => swiper.slideTo(index);

  useEffect(() => {
    setTimeout(() => {
      indexchang(2);
    }, 500);
  }, []);
  const changColor = [
    "linear-gradient(to left, #7f0077, #e100ff)",
    "linear-gradient(202deg, rgba(0,233,94,1) 0%, rgba(105,8,184,1) 100%)",
    "linear-gradient(to left, #159957,#155799)",
    "linear-gradient(to left, #c33764,#1d2671)",
    "linear-gradient(to left, #1d4350, #a43931)",
    "linear-gradient(to left, #2c3e50,#3498db)",
  ];
  let [count, setcount] = useState(0);

  const colorChang = () => {
    if (count == changColor.length || count < changColor.length) {
      setcount((count += 1));
    } else {
      setcount((count = 0));
    }
    // });
  };
  useEffect(() => {
    const getcotegories = async () => {
      const data = await getDocs(categotiesCollectionRef);
      setCategories(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        data.docs.map((doc) => console.log("sxxxssxsxsx", doc.id))
      );
    };
    getcotegories();

    const getcolor = async () => {
      const daatacolor = await getDocs(colorCollectionRef);
      setColor(daatacolor.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getcolor();
  }, []);
  // useEffect(() => {
  //   if (swiper) {
  //     const timer = setTimeout(() => {
  //       swiper.slideTo(2);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [swiper]);
  return (
    <IonContent>
      <div>
        <div className="body" style={{ background: changColor[count] }}>
          {categories.map((item, i) => (
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mySwiper"
              key={i}
              onSwiper={setSwiper}
            >
              {name === item.name ? (
                item.facts.map((e, ind) => (
                  <SwiperSlide className="swiper-slider-All" key={ind}>
                    {e.title}
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          ))}
        </div>
        <div className="general_fact_bottom">
          <span onClick={() => colorChang()}>
            <IonIcon icon={colorPalette} />
          </span>
          <span>
            <IonIcon
              icon={copy}
              onClick={() => navigator?.clipboard?.writeText(titleCopy)}
            />
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
    </IonContent>
  );
}
export default SliderAll;
