import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./Pages/AllMeetUps";
import FavoriteMeetupPage from "./Pages/FavoriteMeetup";
import NewMeetUpPage from "./Pages/NewMeetUP";
import MainNavigation from "./Components/Layouts/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavoriteMeetupPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
