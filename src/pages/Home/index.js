import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BarraPesquisa from "../../components/BarraPesquisa";

export default function Home() {
    return ( 
        <View style = { styles.container } >
        <BarraPesquisa />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#9BAB7C',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });