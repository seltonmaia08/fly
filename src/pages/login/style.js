import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    logo: {
        width: "50%",
        height: "20%",
    },
    title: {
        letterSpacing: 5,
        color: "#000",
        fontSize: 18,
        marginBottom: 10,
    },
    form: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 50,
        padding: 20,
    },
    label: {
        fontSize: 15,
        paddingLeft: 15,
        marginBottom: 10,
        alignItems: "flex-start",
        width: "90%"
    },
    input: { 
        width: "90%",
        height: 40,
        paddingLeft: 14,
        borderRadius: 50,
        backgroundColor: "#e0e0e0",
        marginBottom: 10,
    },
    btnLogin: {
        width: "90%",
        height: 40,
        backgroundColor: "#007bff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 220
    },
    btnRegister: {
        width: "90%",
        height: 40,
        backgroundColor: "#ff8400",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    textBtn:{
        color: "#fff",
        letterSpacing: 5,
    },
})

export default styles