import React from "react";
import { Input } from "../features/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeContact, selectContact } from "../features/input/inputSlice";

export const ContactInfoStep = () => {
  const dispatch = useDispatch();
  const getContact = useSelector(selectContact);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChangeContact({ name, value }))
  }
  
  return (
    <>
      <h3>Contact Information</h3>
      <span>
        * Personal information is important and required. Please fill these
        fields correctly.
      </span>
      <Input
        labelName="Select your born Date"
        value={getContact.bornDate}
        handleChange={(e) => handleChangeInput(e)}
        name="bornDate"
        type="date"
      />
      <Input
        labelName="Phone Number"
        value={getContact.phoneNumber}
        handleChange={(e) => handleChangeInput(e)}
        name="phoneNumber"
      />
      <Input
        labelName="gmail"
        value={getContact.gmail}
        handleChange={(e) => handleChangeInput(e)}
        name="gmail"
      />
      <Input
        labelName="linkedin"
        value={getContact.linkedin}
        handleChange={(e) => handleChangeInput(e)}
        name="linkedin"
      />
      <Input
        labelName="github"
        value={getContact.github}
        handleChange={(e) => handleChangeInput(e)}
        name="github"
      />
    </>
  );
};
