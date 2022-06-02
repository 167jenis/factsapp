import "./Home.css";
import "swiper/css/pagination";
import { useHistory } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { IonIcon, IonItem } from "@ionic/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Card from "../Component/Card";
import FactCard from "../Component/FactCard";
import FeaturedFacts from "./FeaturedFacts";
import { apps, image, settings, book } from "ionicons/icons";

// import { appsOutline } from "ionicons/icons";

function Home() {
  const history = useHistory();
  function clickeMy() {
    history.push("/general");
  }
  return (
    <>
      <ion-content>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="sliderSlider">
            <Swiper
              spaceBetween={30}
              pagination={true}
              loop={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div>your blood is as salty as the ocean.</div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  alexithymia describes a person who has a difficult time
                  expressing their feelings to others.
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  toddlers don't star in their own dreams till they are about
                  3-4 years old.
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  toddlers don't star in their own dreams till they are about
                  3-4 years old.
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  toddlers don't star in their own dreams till they are about
                  3-4 years old.
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="linkDiv">
            <IonItem
              button
              routerLink={"/factsBYctegory"}
              routerDirection="none"
              className="linkTag"
            >
              {/* <IonIcon icon={add} /> */}
              <IonIcon icon={apps} />
              {/* <ion-icon name="apps-outline"></ion-icon> */}

              <div> categories</div>
            </IonItem>

            <IonItem
              button
              routerLink={"/popular"}
              routerDirection="none"
              className="linkTag"
            >
              <IonIcon icon={image} />
              <div>popular</div>
            </IonItem>
            {/* to={"/general"} */}
            <button onClick={clickeMy} className="linkTag">
              <IonIcon icon={settings} />
              <div>general</div>
            </button>
            <Link to={"#"} className="linkTag">
              <IonIcon icon={book} />
              <div> articles</div>
            </Link>
          </div>
          <div>
            <p className="most">most popular</p>
            <Card />
          </div>
          <div>
            <div className="facts_div">
              <p className="most">Facts by Category</p>
              <Link to={"/factsBYctegory"}>View All </Link>
            </div>
            <FactCard />
          </div>
          <div>
            <p className="most">Featured Facts</p>
            <FeaturedFacts />
          </div>
        </div>
      </ion-content>
    </>
  );
}
export default Home;
