// src/components/About.jsx
import React from "react";
import "../styles/About.css"
function About() {
  return (
    <section id="about" className="about-section" style={{ padding: "2em 1em", background: "#fdf6f0" }}>
      <h2>About Us</h2>
      <p>
        At Not So Basic Cafe, we believe coffee is an experience — thoughtfully crafted and uniquely presented.
        Located in the heart of the city, we bring premium espresso blends, creative signature drinks, and cozy vibes to all our guests.
        Our passion is to serve quality beverages with a twist and create a welcoming space where moments turn into memories.
      </p>
    </section>
  );
}

export default About;
