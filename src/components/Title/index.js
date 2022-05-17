import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header(){
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.title}>REQUIEX</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boxTitle: {
        backgroundColor: '#9BAB7C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    }
});