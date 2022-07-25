import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import NavButton from "./NavButton";

export default function SideMenu({ categories }) {
  return (
    <div className="side-menu">
      <div className="menu-buttons-container">
        <Link to={'/'} className='home-links'>
          <NavButton
            key={'Home'}
            title={"Home"}
            description={"Back to where it all started"}
          />
        </Link>
        {categories.map((category) => {
          return (
            <NavButton
              key={category.title}
              title={category.title}
              description={category.description}
              route={category.route}
            />
          );
        })}
      </div>
    </div>
  );
}
