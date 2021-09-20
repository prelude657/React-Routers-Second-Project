import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="bpc">
      <div className=" navtext2 ">React Meetups</div>
      <nav className="navheight">
        <ul className="navflex">
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
