import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CvPdf } from "./CvPdf";
import { PersonalStep } from "../components/PersonalStep";
import { EducationStep } from "../components/EducationStep";
import { AboutMeStep } from "../components/AboutMeStep";
import { ExperienceStep } from "../components/ExperienceStep";
import { TechnoSkillsStep } from "../components/TechnoSkillsStep";
import { ContactInfoStep } from "../components/ContactInfoStep";

export const CvFields = () => {
  const [steps, setSteps] = useState(1);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setSteps((prev) => prev+1)
  };

  return (
    <>
      <div className="form_container">
        <form className="form_container_left" onSubmit={handleSubmit}>
          {steps === 6 ? (
            <PersonalStep />
          ) : steps === 2 ? (
            <AboutMeStep />
            ) : steps === 3 ? (
            <EducationStep />
          ) : steps === 4 ? (
            <ExperienceStep />
          ) : steps === 5 ? (
            <TechnoSkillsStep />
          ) : steps === 1 ? (
            <ContactInfoStep />
          ) : (
            <div className="experiense_content">
              <h3>Experiense Information</h3>
              i don't know, what do am i show in here ?
             
              
            </div>
          )
        }
          <button type="submit" >Next</button>
        </form>
          <button onClick={() => setSteps((prev) => prev - 1)} >Back To confirm data</button>
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
