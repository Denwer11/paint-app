import React from "react";
import s from "./Menu.module.scss";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity }) => {
  return (
    <div className={s.menu}>
      <label className={s.label}>Цвет кисти</label>
      <input type="color" onChange={(e) => setLineColor(e.target.value)} />
      <label className={s.label}>Ширина кисти</label>
      <input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label className={s.label}>Прозрачность кисти</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
    </div>
  );
};

export default Menu;
