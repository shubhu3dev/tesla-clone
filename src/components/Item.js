import React from "react";
import Button from "./button";
import "./Item.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnLink,
  leftBtnTxt,
  rightBtnLink,
  rightBtnTxt,
  twoButtons,
  first,
}) => {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item__container">
        <div className="item__text">
          <p>{title}</p>
          <div className="item__textDesc">
            <p style={{ color: "#8e8e8e" }}>
              {desc}
              <a href="#">{descLink}</a>
            </p>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
