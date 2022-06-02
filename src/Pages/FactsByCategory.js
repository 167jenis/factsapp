import { useEffect, useState } from "react";
// import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

function FactsByCategory() {
  const [user, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "categories");

  useEffect(() => {
    async function getusers() {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getusers();
  }, []);
  console.log("user--?array-->---->", user);
  return (
    <>
      <ion-content>
        <div>
          <div>
            <Link to={"/home"}>
              <IonIcon icon={arrowBack} />
            </Link>
            <div>Facts By Ctegory</div>
          </div>

          {/* {data.map((sata, index) => (
          <div className="main_bakc_div" key={index}>
            {sata.categories.map((item, index) => (
              <Link to={item.link} key={index}>
                <div className="back_img" style={{ background: item.img }}>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        ))} */}
          {user.map((item, index) => (
            <div className="main_bakc_div" key={index}>
              <Link to={item.link}>
                <div className="back_img" style={{ background: item.img }}>
                  <span>{item.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ion-content>
    </>
  );
}
export default FactsByCategory;
