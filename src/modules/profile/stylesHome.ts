import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
    },
    header:{
        width: "100%",
        height: 380,
        backgroundColor: "#4d9df8",
        paddingTop: "6%",
        borderBottomLeftRadius: 42,
        borderBottomRightRadius: 42,
        marginBottom: 24, 
    },
    img:{
        height: 350,
        width: "100%",
        borderBottomLeftRadius: 42,
        borderBottomRightRadius: 42,
        paddingHorizontal: 42,
        objectFit: "cover",
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 24,
    },
    buttomHeader:{
        backgroundColor: "#FFF",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    body:{
        marginHorizontal: 24,
    },
    nameProduct:{
        fontWeight:"bold",
        fontSize: 24,
    },
    rowBody:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8, 
    },
    rate:{
        color: "rgba(0,0,0,0.5)",
    },
    rowIncraseBtn:{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "center",
    },
    valueIncrase:{
        fontWeight: "bold",
        fontSize: 18,
        minWidth: 25,
        textAlign: "center",
    },
    btnIncrase:{
        // padding: 6,
        borderRadius: 20,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        fontSize: 24,
    },
    titleSubSection:{
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8, 
    },
    description:{
        textAlign: "justify",
        color: "rgba(0,0,0,0.5)",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width:"100%",
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "rgba(0,0,0,0.1)",
    },
    titlePrice:{
        color: "rgba(0,0,0,0.5)",
        fontSize: 14,
    },
    price:{
        fontSize: 22,
        fontWeight: "bold",
    },
    btnCart: {
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        height: 51.5,
    },
    btnCartText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
    },
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#4d9df8',
        height: 65,
        padding: 10
    },
    Icon: {
        height: 50,
        width: 50,
        margin: 5
    },

});
