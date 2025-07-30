import React from "react";
import "../styles/Menu.css";

const menuData = [
  {
    category: "Coffee",
    items: [
      { name: "Caffe Latte", price: 220 },
      { name: "Strawberry Mocha", price: 220 },
      { name: "Doppio Espresso", price: 220 },
      { name: "Matcha Latte Macchiato", price: 220 },
      { name: "Classic Cappuccino", price: 180 },
      { name: "Cold Brew Coffee", price: 200 },
    ],
  },
  {
    category: "Bakery",
    items: [
      { name: "Freshly Baked Croissants", price: 150 },
      { name: "Chocolate Muffins", price: 140 },
    ],
  },
];

function Menu() {
  return (
    <section id="menu" className="menu-section" style={{ padding: "2em 1em" }}>
      <h2>Our Menu</h2>
      <p>Discover a variety of handcrafted beverages and delicious treats at Not So Basic Cafe.</p>

      {menuData.map(({ category, items }) => (
        <div key={category} className="menu-category">
          <h3>{category}</h3>
          <ul>
            {items.map(({ name, price }) => (
              <li key={name} className="menu-item">
                <span className="item-name">{name}</span>
                <span className="item-price">₹ {price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Menu;
