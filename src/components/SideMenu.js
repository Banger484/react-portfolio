import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import HomeButton from "./HomeButton";

export default function SideMenu({ categories }) {
  return (
    <div className="side-menu">
      <div className="home-buttons-container">
        <Link to={'/'}>
          <HomeButton
            title={"Home"}
            description={"Back to where it all started"}
          />
        </Link>
        {categories.map((category) => {
          return (
            <HomeButton
              title={category.title}
              description={category.description}
            />
          );
        })}
      </div>
    </div>
  );
}
