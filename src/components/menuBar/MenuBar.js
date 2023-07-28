import { useState } from "react";
import styles from "./MenuBar.module.css";

import menuBarData from "./menuBarData";

const MenuBar = () => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  const [clickedMenuItem, setClickedMenuItem] = useState(0);

  const handleMouseEnter = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  const handleMouseLeave = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  const onMenuChange = (id, URL) => {
    console.log("Clicked on menu item:", id);

    setTimeout(() => {
      setClickedMenuItem(0);
    }, 7000);

    window.open(URL, "_blank");
  };

  if (!menuBarOpen) {
    return (
      <div
        className={styles.wrapperHidden}
        onMouseEnter={handleMouseEnter}
      ></div>
    );
  }

  return (
    <>
      <div className={styles.wrapper} onMouseLeave={handleMouseLeave}>
        <ul className={styles.ul}>
          {menuBarData.map((data) => (
            <li
              style={{ textAlign: "center" }}
              key={data.id}
              id={data.id}
              onClick={() => onMenuChange(data.id, data.URL)}
            >
             
              <img
                className={
                  clickedMenuItem === data.id ? styles.bounceAnimation : ""
                }
                src={data.image}
                alt="image_alt"
              />

            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
