import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../features/input/Input";
import { addTools, handleChangeSkills, selectSkills } from "../features/input/inputSlice";
import styles from "../features/input/Input.module.css";

// { language: "", tools: [] }

export const TechnoSkillsStep = () => {
  const getSkills = useSelector(selectSkills);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChangeSkills({ name, value }));
  };
  const add = (tool, e) => {
    e.preventDefault()
    tool.map((item) => dispatch(addTools(item)))
  }
  return (
    <div>
      <h3>Type Your Technical Skills</h3>
      {getSkills.map((skill, index) => (
        <div key={index}>
          <Input
            labelName={`Skill N${index + 1}`}
            value={skill.language}
            handleChange={(e) => handleChangeInput(e)}
            name="language"
          />
          <div className={styles.skill_tools_content}>
            <div className={styles.skill_tools}>
                {skill.tools.map((item, qty) => (
                    <div key={qty} className={styles.skill_tool}>
                        <Input
                        labelName={`Tool N${qty + 1}`}
                        value={item.tool}
                        handleChange={(e) => handleChangeInput(e)}
                        name="tool"
                        />
                    </div>
                ))}
            </div>
            <button onClick={(e) => add(skill.tools, e)}>add</button>
          </div>
        </div>
      ))}
    </div>
  );
};
