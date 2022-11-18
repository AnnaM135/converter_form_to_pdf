import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../features/input/Input";
import { handleChangeExperience, selectExperience } from "../features/input/inputSlice";

export const ExperienceStep = () => {
  const getExperienceValue = useSelector(selectExperience);
  const dispatch = useSelector(useDispatch);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(handleChangeExperience({ name, value }));
  };
  return (
    <div>
      <h3>Experience Information</h3>
      <span>
        * Experience information is important and required. Please fill these
        fields correctly.
      </span>
      <Input
        labelName="Enter Your Company Name"
        value={getExperienceValue.companyName}
        handleChange={(e) => handleChangeInput(e)}
        name="companyName"
      />
      <div>
        <Input
          labelName="Enter year Range start"
          value={getExperienceValue.yearRangeStart}
          handleChange={(e) => handleChangeInput(e)}
          name="yearRangeStart"
          type="date"
        />
        <Input
          labelName="Enter year Range end"
          value={getExperienceValue.yearRangeEnd}
          handleChange={(e) => handleChangeInput(e)}
          name="yearRangeEnd"
          type="date"
        />
      </div>
      <Input
        labelName="Enter Your Position"
        value={getExperienceValue.position}
        handleChange={(e) => handleChangeInput(e)}
        name="position"
      />
      <textarea
        className="form_txtArea"
        value={getExperienceValue.skills}
        onChange={(e) => handleChangeInput(e)}
        name="skills"
        cols="50"
        rows="3"
        placeholder="Type Your skills..."
      ></textarea>
      <textarea
        className="form_txtArea"
        value={getExperienceValue.projectDesc}
        onChange={(e) => handleChangeInput(e)}
        name="projectDesc"
        cols="50"
        rows="3"
        placeholder="Type Your projectDesc..."
      ></textarea>
    </div>
  );
};
