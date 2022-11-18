import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../features/input/Input";
import { personalDataValue } from "../features/input/inputSlice";
import { useDispatch } from "react-redux";
import { CvPdf } from "./CvPdf";

export const CvFields = () => {
  const [steps, setSteps] = useState(1);
  const [personalData, setPersonalData] = useState({
    firstName: "Ani",
    lastName: "Karapetyan",
    profession: "Web Developer",
    bornDate: "",
    image: "",
    bgColor: "#706B6B",
    companyName: "",
  });
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    const { name, value, files } = e.target;
    if(name === "image") {
      setPersonalData({ ...personalData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setPersonalData({ ...personalData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSteps((prev) => prev+1)
    dispatch(personalDataValue(personalData));
  };

  return (
    <>
      <div className="form_container">
        <form className="form_container_left" onSubmit={handleSubmit}>
          {steps === 1 ? (
            <div className="first_content">
              <h3>Personal Information</h3>
              <span>
                * Personal information is important and required. Please fill these
                fields correctly.
              </span>
              <Input
                labelName="Enter Your First Name"
                value={personalData.firstName}
                handleChange={(e) => handleChangeInput(e)}
                name="firstName"
              />
              <Input
                labelName="Enter Your Last Name"
                value={personalData.lastName}
                handleChange={(e) => handleChangeInput(e)}
                name="lastName"
              />
              <Input
                labelName="Enter Your profession"
                value={personalData.profession}
                handleChange={(e) => handleChangeInput(e)}
                name="profession"
              />
              <Input
                labelName="Select your born Date"
                value={personalData.bornDate}
                handleChange={(e) => handleChangeInput(e)}
                name="bornDate"
                type="date"
              />
              <Input
                labelName="Choose CV picture"
                handleChange={(e) => handleChangeInput(e)}
                name="image"
                type="file"
              />
              <Input
                labelName="Choose Background color for left side in cv"
                value={personalData.bgColor}
                handleChange={(e) => handleChangeInput(e)}
                name="bgColor"
                type="color"
                bgColor={personalData.bgColor}
              />
            </div>

          ) : steps === 2 ? (
            <div className="edu_content">
              <h3>Education Information</h3>
              <span>
                * Education information is important and required. Please fill these
                fields correctly.
              </span>
              <Input
                labelName="Enter Your Education"
                value={personalData.companyName}
                handleChange={(e) => handleChangeInput(e)}
                name="companyName"
              />
              
            </div>
          ) : (
            <div className="experiense_content">
              <h3>Experiense Information</h3>
              <span>
                * Experiense information is important and required. Please fill these
                fields correctly.
              </span>
              <Input
                labelName="Enter Your companyName"
                value={personalData.companyName}
                handleChange={(e) => handleChangeInput(e)}
                name="companyName"
              />
              
            </div>
          )
        }
          <button type="submit" >Set Data To Pdf</button>
        </form>
          {/* <button onClick={() => setSteps((prev) => prev - 1)} >Back To confirm data</button> */}
        <div>
          <CvPdf />
        </div>
      </div>
      <Link to="/" className="Welcome_btn">
        RESET
      </Link>

    </>
  );
};
