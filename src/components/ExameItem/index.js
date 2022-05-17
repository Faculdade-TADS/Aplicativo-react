import React from "react"
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native"

export default function ExameItem(){
    return (
        <View style={styles.resultItem}>
            <Text>Página de Requisitos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultItem: {
        width: '100%',
        height: '90%',
        borderRadius: 25,
        backgroundColor: '#E7E6D2',
        alignItems: 'flex-start',
        marginTop: 30
    },
    imagem: {
        width: '80%',
        height: 40,
        borderRadius: 25,
        backgroundColor: '#E7E6D2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    }, 
    nomeExame: {
        fontSize: 24,
        color: '#415E0E',
        marginTop: -35,
        
    },
    btPesquisar: {
        fontSize: 20,
        color: '#FFF',
        alignItems: 'center',
        width: '80%',
        height: 40,
        backgroundColor: '#E7E6D2',
        borderRadius: 50,
    },
    btImage: {
        padding: 10, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch', 
    },
});