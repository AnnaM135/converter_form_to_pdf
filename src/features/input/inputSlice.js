import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    personalData: {
        firstName: "",
        lastName: "",
        profession: "",
        image: "",
        bgColor: "#706B6B",
    },
    aboutMe: "",
    educationData: {
        institutionName: "",
        yearRangeStart: "",
        yearRangeEnd: "",
        profession: "",
        skills: "",
        projectDesc: "",
    },
    experienceData: {
        companyName: "",
        yearRangeStart: "",
        yearRangeEnd: "",
        position: "",
        skills: "",
        projectDesc: "",
    },
    technoSkills: [
        { language: "skill 1", tools: [{tool: "t1"}] },
        // Ex. {language: "JS", tools: ["TS", "Canvas"]}
    ],
    contactInfo: {
        bornDate: "",
        phoneNumber: "",
        gmail: "",
        linkedin: "",
        github: ""
    },
    languages: [
        { language: "", level: "" }
    ]
};

export const inputValueSlice = createSlice({
    name: "inputValue",
    initialState,
    reducers: {
        personalDataValue: (state, action) => {
            state.personalData = action.payload
        },
        handlePersonalChange: (state, action) => {
            const { name, value, files } = action.payload;
            if (name === "image") {
                state.personalData[name] = URL.createObjectURL(files[0])
            } else {
                state.personalData[name] = value
            }
        },
        handleChangeAboutMe: (state, action) => {
            state.aboutMe = action.payload
        },
        handleChangeEducation: (state, action) => {
            const { name, value } = action.payload
            state.educationData[name] = value
        },
        handleChangeExperience: (state, action) => {
            const { name, value } = action.payload
            state.experienceData[name] = value
        },
        handleChangeSkills: (state, action) => {
            const { name, value } = action.payload;
            // console.log(state.technoSkills[0][name], value)  
            // console.log(state.technoSkills[0].tools[0], value)   
            // console.log(state.technoSkills[0][name][0], value)   

            state.technoSkills.map((skill) => {
                if(name === "tool") {
                    skill.tools.map((tool, i) => {
                        return tool[name] = value
                    })
                } else {
                    skill[name] = value
                }
                return skill
            })
        },
        addTools: (state, action) => {
            console.log(state.technoSkills[0].tools, action.payload)
            state.technoSkills[0].tools = [...state.technoSkills[0].tools, action.payload]
        },
        handleChangeContact: (state, action) => {
            const { name, value } = action.payload
            state.contactInfo[name] = value
        },
    }
})

// get function dispatch
export const { 
    personalDataValue,
    handlePersonalChange,
    handleChangeAboutMe,
    handleChangeEducation,
    handleChangeExperience,
    handleChangeSkills,
    addTools,
    handleChangeContact,
} = inputValueSlice.actions;

// get initial State
export const selectPersonalDataValue = (state) => state.inputValue.personalData;
export const selectHandleChangePersonal = (state) => state.inputValue.personalData;
export const selectHandleChangeAboutMe = (state) => state.inputValue.aboutMe;
export const selectEducation = (state) => state.inputValue.educationData;
export const selectExperience = (state) => state.inputValue.experienceData;
export const selectSkills = (state) => state.inputValue.technoSkills;
export const selectContact = (state) => state.inputValue.contactInfo;

export default inputValueSlice.reducer;
