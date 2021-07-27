import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Styles } from "../style/Style";


export default class ListaIMC extends Component {

    render() {
        return (
            <View style={Styles.viewConteudoLista}>
                <Text style={Styles.textConteudoLista01}
                >{this.props.lista01}</Text>

                <Text style={Styles.textConteudoLista01}
                >{this.props.lista02}</Text>

                <Text style={Styles.textConteudoLista01}
                >{this.props.lista03}</Text>

                <Text style={Styles.textConteudoLista02}
                >{this.props.lista04}</Text>

                <Text style={Styles.textConteudoLista03}
                >{this.props.lista05}</Text>

                <Text style={Styles.textConteudoLista04}
                >{this.props.lista06}</Text>

                <Text style={Styles.textConteudoLista04}
                >{this.props.lista07}</Text>

                <Text style={Styles.textConteudoLista04}
                >{this.props.lista08}</Text>

            </View>

        )
    }
}