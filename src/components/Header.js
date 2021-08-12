import React from "react";
import "./Header.css";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import ForumTwoToneIcon from "@material-ui/icons/ForumTwoTone";
import { IconButton } from "@material-ui/core";


function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonOutlineTwoToneIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        alt="tinder icon"
        src="https://www.kindpng.com/picc/m/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png"
      ></img>
      <IconButton>
        <ForumTwoToneIcon fontSize="large"  className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
