import React from "react";
import { ScrollView } from "react-native";
import { Styles } from "../style/Style";
import Imc from "./Imc";
import Info from "./Info";
import ListaIMC from "./ListaIMC";


export default function Content() {
    return (
        <ScrollView style={Styles.viewContent}>

            <Info
                titulo="SEJAM BEM-VINDOS"
                conteudo="Este Aplicativo te ajudará a entender melhor o seu indice de massa corporal (IMC)
            e como isso te afeta de forma positiva ou negativa."
            />
            <Info
                tituloConteudo="Entenda o que é o IMC e o que a medida diz sobre sua saúde"
                conteudo="Criado no século 19 pelo Matemático Lambert Quételet, o índice de Massa Corporal,
            conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com
            o peso ideal. Muitas pessoas buscam descobrir seu IMC quando iniciam uma dieta especifica
            ou atividade física. E estão certas, pois ele aponta a normalidade - peso adequado -
            magreza - obesidade em diferentes níveis. Mas, com o resultado deste cálculo em mãos,
            o que fazer? E o que este número final diz sobre sua saúde de cada pessoa?"
                autor="autora: Erika Braz - fonte: Blog da Saúde"
            />

            <Info
                tituloConteudo="IMC - Classificação do IMC:"
            />

            <ListaIMC
                lista01="Abaixo 16 - Magreza Grave"
                lista02="16,1 até 17 - Magreza Moderada"
                lista03="17,1 até 18,5 - Magreza Leve"
                lista04="18,6 até 25 - Saudável"
                lista05="25,1 até 30 - Sobrepeso"
                lista06="30,1 até 35 - Obesidade Grau I"
                lista07="35,1 até 40 - Obesidade Grau II (considerada severa)"
                lista08="Acima de 40 - Obesidade Grau III (mórbida)"
            />

            <Imc />

            <Info
                titulo="2 exercícios para fazer em casa na quarentena"
                tituloConteudo="1.Polichinelo completo"
                conteudo="Em pé com as pernas unidas e os braços estendidos ao lado do corpo,
            dê um salto para cima. Ao mesmo tempo, afaste os pés lateralmente e bata as
            mãos acima da cabeça. Volte para a posição inicial e depois agache, tocando
            as mãos no solo. Estenda as pernas e repita o exercicio sem parar."
                autor="autora: Erika Braz - fonte: Blog da Saúde"
            />

            <Info
                tituloConteudo="2.Agachamento com deslocamento lateral"
                conteudo="Em pé, fique com as pernas unidas e coloque as mãos na cintura. 
            Dê um passo para o lado. Estenda os braços à frente, contraia o abdome e
            agache até suas coxas ficarem paralelas ao chão. Volte para a posição
            inicial e execute o movimento para outro lado."
                autor="autora: Erika Braz - fonte: Blog da Saúde"
            />
        </ScrollView>
    )

}