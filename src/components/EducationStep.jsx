import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../features/input/Input";
import { handleChangeEducation, selectEducation } from "../features/input/inputSlice";

export const EducationStep = () => {
  const getEducationValue = useSelector(selectEducation);
  const dispatch = useSelector(useDispatch);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(handleChangeEducation({ name, value }))
  };

  return (
    <div className="edu_content">
      <h3>Education Information</h3>
      <span>
        * Education information is important and required. Please fill these
        fields correctly.
      </span>   
      <Input
        labelName="Enter Your Institution Name where you study"
        value={getEducationValue.institutionName}
        handleChange={(e) => handleChangeInput(e)}
        name="institutionName"
      />
      <div>
        <Input
          labelName="Enter year Range start"
          value={getEducationValue.yearRangeStart}
          handleChange={(e) => handleChangeInput(e)}
          name="yearRangeStart"
          type="date"
        />
        <Input
          labelName="Enter year Range end"
          value={getEducationValue.yearRangeEnd}
          handleChange={(e) => handleChangeInput(e)}
          name="yearRangeEnd"
          type="date"
        />
      </div>
      
      <Input
        labelName="Enter Your Profession that you geting when study"
        value={getEducationValue.profession}
        handleChange={(e) => handleChangeInput(e)}
        name="profession"
      />
      <textarea
        className="form_txtArea"
        value={getEducationValue.skills}
        onChange={(e) => handleChangeInput(e)}
        name="skills"
        cols="50"
        rows="3"
        placeholder="Type Your skills..."
      ></textarea>
      <textarea
        className="form_txtArea"
        value={getEducationValue.projectDesc}
        onChange={(e) => handleChangeInput(e)}
        name="projectDesc"
        cols="50"
        rows="3"
        placeholder="Type Your projectDesc..."
      ></textarea>
    </div>
  );
};
