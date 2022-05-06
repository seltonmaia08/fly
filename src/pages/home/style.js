import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // menu container
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    },
    title: {
        letterSpacing: 5,
        color: "#000",
        fontSize: 10,
        marginBottom: 50,
    },
    navigationContainer: {
        backgroundColor: "#fff"
    },
    btnMenu: {
        width: "100%",
        height: "9%",
        backgroundColor: "#ececec",
        padding: 10,
        marginBottom: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    iconsMenu: {
        marginLeft: 35,
        marginRight: 15
    },
    textBtn:{
        color: "#409cff",
        letterSpacing: 5,
    },
    textBtnLog:{
        color: "#fff",
        letterSpacing: 5,
    },
    textBtnSwitch:{
        color: "#fff",
        letterSpacing: 5,
    },
    btnSwitch: {
        width: "90%",
        height: 40,
        backgroundColor: "#4169e1",
        marginBottom: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 220,
    },
    btnLogOff: {
        width: "90%",
        height: 40,
        backgroundColor: "#ff8400",
        marginBottom: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    //header container
    home: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    header: {
        width: "100%",
        height: "10%",
        backgroundColor: "#409cff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 18, 
        letterSpacing: 5
    },
    btnMenuHeader: {
        padding: 0,
        left: 10,
        margin: 0,
    },
    btnUser: {
        padding: 0,
        right: 10,
        margin: 0,
    },
    searchContainer: {
        width: "100%",
        height: "auto",
        backgroundColor: "#e0e0e0",
        padding: 5,
        paddingLeft: 5,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
        marginTop: -14
    }, 
    searchInput: {
        width: "80%",
        backgroundColor: "#e0e0e0",
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50
    },
    searchBtn: {
        marginRight: 20
    },
    textLabel: {
        marginTop: 20,
        marginLeft: 20
    },
    sliderContainer: {
        backgroundColor: "#cecece",
        width: "100%",
        height: "15%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    slider: {
        width: "30%",
        height: "100%",
        margin: 5,
        backgroundColor: "#fff"
    }

});

export default styles