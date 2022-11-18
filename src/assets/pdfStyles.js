import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "row",
    },
    viewer: {
        width: window.innerWidth / 2, //the pdf viewer will take up all of the width and height
        height: "90vh",
    },
    section_right: {
        width: "60%",
        padding: "40px 20px"
    },
    left_area: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    pictureBlock: {
        width: 200,
        height: 200,
        borderRadius: "50%",
        border: "5px solid white",
        margin: "30px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    picture: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover",
    },
    contact_item: {
        display: "flex",
        flexDirection: "row",
        margin: "5 0"
    },
    contact_icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: "50%",
        objectFit: "cover"
    },

    // Text's
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
        borderBottom: "2px solid black",
        marginBottom: 10,
    },
    personalNames: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    profession: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },
    descMax: {
        fontSize: 14
    },
    year: {
        color: "#595959",
        fontSize: 11
    },
    descMin: {
        fontSize: 11
    }

});