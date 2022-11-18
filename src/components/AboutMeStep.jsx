import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChangeAboutMe,
  selectHandleChangeAboutMe,
} from "../features/input/inputSlice";

export const AboutMeStep = () => {
  const getInfo = useSelector(selectHandleChangeAboutMe);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>About You</h3>
      <span>
        * About Me information is important and required. Please fill these
        fields correctly.
      </span>
      <textarea
        className="form_txtArea"
        value={getInfo}
        onChange={(e) => dispatch(handleChangeAboutMe(e.target.value))}
        name="aboutMe"
        cols="50"
        rows="20"
        placeholder="Type About You..."
      ></textarea>
    </div>
  );
};
