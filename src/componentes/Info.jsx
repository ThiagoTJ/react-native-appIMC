import React, {Component} from "react";
import {Text, View} from "react-native";
import { Styles } from "../style/Style";

export default class Info extends Component{

    render(){
        return (
            <View style={Styles.viewInfo}>

                <View style={Styles.viewTituloInfo}>
                    <Text style={Styles.textTituloInfo}>
                        {this.props.titulo}
                    </Text>
                </View>

                <View style={Styles.viewTituloConteudoInfo}>
                    <Text style={Styles.textTituloConteudoInfo}
                    >{this.props.tituloConteudo}</Text>
                </View>

                <View style={Styles.viewConteudoInfo}>
                    <Text style={Styles.textConteudoInfo}
                    >{this.props.conteudo}</Text>

                    <Text style={Styles.textAutorInfo}
                    >{this.props.autor}</Text>
                </View>

            </View>
        )
    }
}