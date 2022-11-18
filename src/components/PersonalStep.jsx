import React from "react";
import { Input } from "../features/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePersonalChange,
  selectHandleChangePersonal,
} from "../features/input/inputSlice";

export const PersonalStep = () => {
  const dispatch = useDispatch();
  const getPersonalValue = useSelector(selectHandleChangePersonal);

  const handleChangeInput = (e) => {
    const { name, value, files } = e.target;
    dispatch(handlePersonalChange({ name, value, files }));
  };

  return (
    <div className="first_content">
      <h3>Personal Information</h3>
      <span>
        * Personal information is important and required. Please fill these
        fields correctly.
      </span>
      <Input
        labelName="Enter Your First Name"
        value={getPersonalValue.firstName}
        handleChange={(e) => handleChangeInput(e)}
        name="firstName"
      />
      <Input
        labelName="Enter Your Last Name"
        value={getPersonalValue.lastName}
        handleChange={(e) => handleChangeInput(e)}
        name="lastName"
      />
      <Input
        labelName="Enter Your profession"
        value={getPersonalValue.profession}
        handleChange={(e) => handleChangeInput(e)}
        name="profession"
      />
      <Input
        labelName="Choose CV picture"
        handleChange={(e) => handleChangeInput(e)}
        name="image"
        type="file"
      />
      <Input
        labelName="Choose Background color for left side in cv"
        value={getPersonalValue.bgColor}
        handleChange={(e) => handleChangeInput(e)}
        name="bgColor"
        type="color"
        bgColor={getPersonalValue.bgColor}
      />
    </div>
  );
};
