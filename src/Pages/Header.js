// import React from "react";
// import { slide as Menu } from "react-burger-menu";

// import { Link } from "react-router-dom";
// import "./Header.css";
// function Header() {
//   return (
//     <>
//       <div className="headerr">
//         <div className="homeContainer">
//           <div className="headerName">
//             <h5>psychology Facts</h5>
//             <span className="bellIcone">@</span>
//             <span className="likeIcone">@</span>
//           </div>
//         </div>
//         <Menu>
//           <div className="menContent">
//             <div className="sideBar_header">
//               <h1>
//                 psychology
//                 <br /> factes
//               </h1>
//             </div>
//             <div className="menuBar">
//               <ul>
//                 <li>
//                   <Link to="/" className="menu-item">
//                     @ home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/allfact/brainFacts"} className="menu-item">
//                     @ brainy facts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     @ random facts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     @ fact of th day
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/favoutites"} className="menu-item">
//                     @ favourites
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     @ favourite image facts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     @ vidoes
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="communicate">
//               <span>communicate</span>
//               <ul>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     {" "}
//                     remove ads
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     settings
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     share
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     rate
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     feedback
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     {" "}
//                     more apps
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"#"} className="menu-item">
//                     about
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Menu>
//       </div>
//     </>
//   );
// }

// export default Header;
import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
} from "@ionic/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <Link to={"/favoutites"}>favourite</Link>
      </div>
    </>
  );
}
export default Header;
