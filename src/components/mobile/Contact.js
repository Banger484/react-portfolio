import React from "react";

export default function Contact(props) {
  return (
    <div className="contact-container">
      <h1>
        {props.me.firstName} {props.me.lastName}
      </h1>
      <h2>{props.me.title}</h2>
      <p>// {props.me.area} //</p>
      <p>// {props.me.proficient} //</p>
      <h2 className="contact-links" onClick={() => (window.location = `mailto:${props.me.email}`)}> Send me an Email</h2>
      <h2 className="contact-links" onClick={() => (window.location = `${props.me.github}`)}> Visit my GitHub Profile</h2>

    </div>
  );
}
