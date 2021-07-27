import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Styles } from "../style/Style";


export default function Imc() {
    const [numero, setNumero] = useState({
        altura: 0,
        peso: 0,
        resultado: "AQUI O SEU IMC"
    })

    const handleInputChange = (prop, value) => {
        setNumero({
            ...numero, [prop]: value
        })
    }

    const indiceIMC = () => {
        let indice = numero.peso / (numero.altura ** 2)
        if (indice < 18.5) {
            setNumero({
                ...numero, resultado: `${indice.toFixed(1)} IMC - ABAIXO DO PESO}`
            })
        }
        else if (indice >= 18.6 && indice <= 25) {
            setNumero({
                ...numero, resultado: `${indice.toFixed(1)} IMC - PESO NORMAL`
            })
        }
        else {
            setNumero({
                ...numero, resultado: `${indice.toFixed(1)} IMC - ACIMA DO PESO`
            })
        }
    }

    // console.log(resultado)

    return (

        <View style={Styles.viewIMC}>
            <View>
                <Text style={Styles.textIMC}>SAIBA AQUI SEU IMC</Text>
            </View>

            <View style={Styles.viewInput}>
                <TextInput
                    style={Styles.input}
                    placeholder="Altura"
                    onChangeText={
                        (valor) => handleInputChange("altura", parseFloat(valor))
                    } keyboardType="numeric" />

                <TextInput
                    style={Styles.input}
                    placeholder="Peso"
                    onChangeText={
                        (valor) => handleInputChange("peso", parseFloat(valor))
                    } keyboardType="numeric" />

            </View>
            
            <View style={Styles.viewResultado}>
                <Text
                    style={Styles.imcResultado}
                >{numero.resultado}</Text>
            </View>

            <TouchableOpacity
                style={Styles.btn}
                onPress={indiceIMC}>
                <Text
                    style={Styles.textBtn}
                >Verificar</Text>
            </TouchableOpacity>
        </View>
    )
}