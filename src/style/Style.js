import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({

    viewHeader:{
        backgroundColor: "#3CB371",
        height: 100,
        justifyContent:"center",
    },
    textHeader:{
        fontSize: 30,
        color:"white",
        textAlign: "center"
    },
    viewContent:{
        backgroundColor: "#3CB371",
        flex: 5,
        textAlign: "center"
    },
    viewInfo:{
        backgroundColor: "#F8F8FF",
        justifyContent:"center",
        alignItems: "center",
        textAlign:"center",
    },
    viewTituloInfo:{
        marginTop: 20,
        marginBottom: 10
    },
    textTituloInfo:{
        fontWeight:"bold",
        fontSize: 24,
        textAlign: "center",
    },
    viewTituloConteudoInfo:{
        marginBottom: 20,
    },
    textTituloConteudoInfo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    textConteudoInfo:{
        fontSize: 18,
        textAlign: "center",
        lineHeight: 26
    },
    textAutorInfo:{
        fontStyle: "italic",
        fontSize: 14,
        padding:20
    },
    viewIMC:{
        height: 450,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8FF"
    },
    textIMC:{
        color: "#FF8C00",
        fontSize:24,
        fontWeight: "bold"
    },
    viewInput:{
        backgroundColor: "#3CB371",
        height: 100,
        width: 310,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    input:{
        backgroundColor: "white",
        width: 145,
        height: 50,
        margin: 5,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#FF8C00",
        borderRadius: 10
    },
    viewResultado:{
        backgroundColor: "#FF8C00",
        width: 310,
        height: 100,
        alignItems: "center",
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    viewConteudoLista:{
       borderWidth: 2,
       margin: 10,
    },
    textConteudoLista01:{
        fontSize:18,
        backgroundColor: "#1E90FF",
        padding: 10,
        color: "white"
    },
    textConteudoLista02:{
        fontSize:18,
        backgroundColor: "#7FFF00",
        padding: 10,
    },
    textConteudoLista03:{
        fontSize:18,
        backgroundColor: "yellow",
        padding: 10,
    },
    textConteudoLista04:{
        fontSize:18,
        backgroundColor: "#CD0000",
        padding: 10,
        color: "white"
    },
    imcResultado:{
        backgroundColor: "white",
        width: 300,
        height: 50,
        textAlign: "center",
        padding: 12,
        margin: 20,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#3CB371",
        borderRadius: 10
    },
    btn:{
        backgroundColor:"#3CB371",
        height: 50,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "green",
        marginTop:30,
        
    },
    textBtn: {
        color: "white",
        fontSize: 20,
    }
})