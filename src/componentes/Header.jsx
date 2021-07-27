import React from "react";
import {Text,View} from "react-native";
import { Styles } from "../style/Style";


export default function Header(){
    return(
        <View style={Styles.viewHeader}>
            <Text style={Styles.textHeader}>FOLLOWING YOUR LIFE</Text>
        </View>
    )
}