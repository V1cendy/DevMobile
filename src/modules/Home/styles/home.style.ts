import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Shop: {
        padding: 10
    },
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#4d9df8',
        height: 65,
        padding: 10
    },
    NameProduct: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 20
    },
    Description: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 15,
        marginBottom:50
    },
    Price: {
        fontSize: 24,
        width: 200,       
    },
    ImageProduct: {
        width: 250,
        height: 395,
        marginLeft: '15%',
        marginBottom: 5,
        borderRadius: 5,
        display: 'flex',
    },
    Avaliation: {
        width: 30,
        height: 30
    },
    Icon: {
        height: 50,
        width: 50,
        margin: 5
    },
    IconAdd: {
        height: 30,
        width: 30,
        margin: 5,
        marginLeft: 40
    },
    optProduct: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: '80%'
    }
})