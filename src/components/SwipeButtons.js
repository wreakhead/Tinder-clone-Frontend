
import { IconButton } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import React from "react";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="sb_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="sb_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="sb_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="sb_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="sb_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
