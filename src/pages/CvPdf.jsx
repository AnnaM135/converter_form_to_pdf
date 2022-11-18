import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import {
  selectExperience,
  selectEducation,
  selectHandleChangeAboutMe,
  selectHandleChangePersonal,
  selectSkills,
  selectContact,
} from "../features/input/inputSlice";
import { styles } from "../assets/pdfStyles";
import bornIcon from "../assets/images/born2.jpg";
import phoneIcon from "../assets/images/phone.jpg";
import gmailIcon from "../assets/images/gmail.png";
import githubIcon from "../assets/images/github3.png";
import linkedinIcon from "../assets/images/linkedin.png";


// Create Document Component
export function CvPdf() {
  const getValue = useSelector(selectHandleChangePersonal);
  const getAboutInfo = useSelector(selectHandleChangeAboutMe);
  const getEducation = useSelector(selectEducation);
  const getExperience = useSelector(selectExperience);
  const getSkills = useSelector(selectSkills);
  const getContact = useSelector(selectContact);

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View
            style={{
              backgroundColor: getValue.bgColor,
              width: "40%",
              padding: 20,
              minHeight: "100vh",
            }}
          >
            <View style={styles.left_area}>
              {getValue.image && (
                <View style={styles.pictureBlock}>
                  <Image
                    src={getValue.image}
                    style={styles.picture}
                    alt="cv-picture"
                  />
                </View>
              )}
              {getContact.bornDate ? (
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.title}>Contacts</Text>
                  <View style={styles.contact_item}>
                    <Image style={styles.contact_icon} src={bornIcon} />
                    <Text>{getContact.bornDate}</Text>
                  </View>
                  <View style={styles.contact_item}>
                    <Image style={styles.contact_icon} src={phoneIcon} />
                    <Text>{getContact.phoneNumber}</Text>
                  </View>
                  <View style={styles.contact_item}>
                    <Image style={styles.contact_icon} src={gmailIcon} />
                    <Text>{getContact.gmail}</Text>
                  </View>
                  <View style={styles.contact_item}>
                    <Image style={styles.contact_icon} src={linkedinIcon} />
                    <Text>{getContact.linkedin}</Text>
                  </View>
                  <View style={styles.contact_item}>
                    <Image style={styles.contact_icon} src={githubIcon} />
                    <Text>{getContact.github}</Text>
                  </View>
                </View>
              ) : null}
             
            </View>
          </View>
          <View style={styles.section_right}>
            <Text style={styles.personalNames}>
              {getValue.firstName} {getValue.lastName}
            </Text>
            <Text style={styles.profession}>{getValue.profession}</Text>
            <Text style={styles.profession}>{getValue.companyName}</Text>
            {getAboutInfo ? (
              <View style={{ marginTop: 30 }}>
                <Text style={styles.title}>About Me</Text>
                <Text style={styles.descMax}>{getAboutInfo}</Text>
              </View>
            ) : null}
            {getEducation.institutionName ? (
              <View style={{ marginTop: 30 }}>
                <Text style={styles.title}>Education</Text>
                <Text style={styles.descMax}>
                  {getEducation.institutionName}
                </Text>
                <Text style={styles.descMin}>
                  {getEducation.yearRangeStart} - {getEducation.yearRangeEnd}
                </Text>
                <Text style={styles.descMin}>
                  {getEducation.profession} - {getEducation.skills}
                </Text>
                <Text style={styles.descMin}>{getEducation.projectDesc}</Text>
              </View>
            ) : null}
            {getExperience.companyName ? (
              <View style={{ marginTop: 30 }}>
                <Text style={styles.title}>Experience</Text>
                <Text style={styles.descMax}>{getExperience.companyName}</Text>
                <Text style={styles.descMin}>
                  {getExperience.yearRangeStart} - {getExperience.yearRangeEnd}
                </Text>
                <Text style={styles.descMin}>
                  {getExperience.position} - {getExperience.skills}
                </Text>
                <Text style={styles.descMin}>{getExperience.projectDesc}</Text>
              </View>
            ) : null}
            {getSkills[0] ? (
              <View style={{ marginTop: 30 }}>
                <Text style={styles.title}>Skills</Text>
                <View>
                  {getSkills.map((skill, i) => (
                    <View key={i}>
                      <Text>{skill.language}</Text>
                      {skill.tools.map((item, qty) => (
                        <Text key={qty}>{item.tool}</Text>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
