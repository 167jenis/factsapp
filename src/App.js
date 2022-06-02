import React from "react";
import Home from "./Pages/Home";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import FactsByCategory from "./Pages/FactsByCategory";
import Popular from "./Pages/Popular";
import General from "./Pages/General";
import Favoutites from "./Pages/Favourites";
import AllFact from "./Pages/AllFact";
import SliderAll from "./Pages/SliderAll";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
function App() {
  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route
              path="/factsBYctegory"
              component={FactsByCategory}
              exact={true}
            />
            <Route path="/popular" component={Popular} exact={true} />
            <Route path="/general" component={General} exact={true} />
            <Route path="/favoutites" component={Favoutites} exact={true} />
            <Route path="/allfact/:name" component={AllFact} exact={true} />
            <Route
              path="/sliderfacts:name"
              component={SliderAll}
              exact={true}
            />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </>
  );
}
export default App;
