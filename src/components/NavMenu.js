import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function NavMenu({ setNavOpen, categories }) {
  return (
    <div className="nav-menu">
      <div>
          <NavButton
            route={''}
            key={'Home'}
            title={"Home"}
            description={"Back to where it all started"}
            setNavOpen={setNavOpen}
          />
        {categories.map((category) => {
          return (
            <NavButton
              key={category.title}
              title={category.title}
              description={category.description}
              route={category.route}
              setNavOpen={setNavOpen}
            />
          );
        })}
      </div>
    </div>
  );
}
