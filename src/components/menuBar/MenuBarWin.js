import { useState, useEffect, useCallback } from "react";
import styles from "./MenuBarWin.module.css";

import MenuBarDataWin from "./MenuBarDataWin";

const MenuBar = () => {
 
  const [clickedMenuItem, setClickedMenuItem] = useState(0);
  const onMenuChange = (id, URL) => {
    

    setTimeout(() => {
      setClickedMenuItem(0);
    }, 7000);

    window.open(URL, "_blank");
  };

  const [currentTime, setCurrentTime] = useState("");

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  const getTime = useCallback(() => {
    console.log("worked");
    var date = new Date();
    var d = date.getDay();
    var mm = date.getDay() + 1;
    var aaaa = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();

    m = checkTime(m);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var currentDayAndTime = `${days[d].substr(0, 3)} ${h}:${m} p.m ${mm}`;
    setCurrentTime(currentDayAndTime);
  }, []);

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [getTime]);
  

  return (
    <>
      <div className={styles.wrapperWin} >
        <ul className={styles.ul}>
          {MenuBarDataWin.map((data) => (
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
