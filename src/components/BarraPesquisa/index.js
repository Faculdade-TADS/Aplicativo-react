import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import {ExameList} from '../../components/ExameList';

export default function BarraPesquisa(){
    return (
        <View style={styles.formContainer}>
            <View style={styles.pesquisar}>
                <TextInput style={styles.textPesquisa} placeholder="Pesquisar"/>
                <TouchableOpacity 
                    style={styles.btPesquisar}
                    activeOpacity={0.5}
                    onPress={() =>{
                        pesquisarExame()
                    }}
                    >
                        <Image 
                            source={require('../../Image/lupa.png')}
                            style={styles.btImage}
                        />
                    </TouchableOpacity>
            </View>
            
            <ExameList/>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#9BAB7C',
        alignItems: 'center',
        marginTop: 60
    },
    pesquisar: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#98AB7C',
        alignItems: 'flex-start',
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 15
    },
    textPesquisa: {
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#FFF',
        height: 50,
        paddingLeft: 10 
    },
    btPesquisar: {
        fontSize: 20,
        color: '#FFF',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#678A22',
        borderRadius: 50,
        marginTop: -45,
        marginLeft: '88%'
    },
    btImage: {
        padding: 10, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch', 
    },
});