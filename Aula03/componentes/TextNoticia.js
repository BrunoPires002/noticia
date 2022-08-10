import React from 'react';
import {Text, View } from 'react-native';
import styles from '../styles/styles';

export default function TextNoticia(){
    return (
        <View style={styles.container}>
            <Text>O Tribunal de Contas da União (TCU) entregou nesta quarta-feira (10) ao Tribunal Superior Eleitoral (TSE) uma lista com os nomes de 6.804 gestores ou ex-gestores que tiveram as contas julgadas irregulares pela Corte nos últimos oito anos.</Text>
        </View>
    )
}