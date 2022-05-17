import React, { useEffect, useState} from "react";
import { 
StyleSheet,
View,
Text,
SafeAreaView,
FlatList,
Image,
TouchableOpacity
} from "react-native";
  
  const Item = ({ title, navigation }) => (
    <View style={styles.item}>
       <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => navigation.navigate('ItemExame')}>
            <View style={styles.moldeImagem}>
            <Image 
                source={require('../../Image/colesterol.png')}
                style={styles.btImage}
            />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>      
    </View>
  );

export const ExameList =  () =>{
    
const [itens, setItens] = useState({
  id: "id",
  title: 'title',
})

useEffect(() => {
  loadData()
})

const loadData = async () => {
  try {
let arryAux = []
    let api_url = "https://unisales-exames-hml.herokuapp.com/exames/"; 
    
    const response = await fetch(api_url, {
      method: 'GET',
      headers: ({
        'Content-Type': 'application/json'
      }),
    });

    const data = await response.json();

    data.map((element)=>{
    
      arryAux.push({
        id: element.id,
        name: element.nome
      })
    })

        setItens(data)

  } catch (error) {
    console.error(error)
  }
}

  const renderItem = ({ item }) => (
        <Item title={item.nome} />
    );
    
    return (
        <SafeAreaView style={styles.resultContainer}>
            <FlatList
                style={styles.listaExames}
                data={itens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        width: '90%',
        height: '75%',
        borderRadius: 25,
        backgroundColor: '#E7E6D2',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 30,
        padding: 10
    },
    listaExames: {
        width: '100%',
    },
    item: {
        borderRadius: 25,
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 8,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    title: {
        marginTop: -36,
        marginLeft: 55,
        fontSize: 24,
    },
    btImage: {
        padding: 15, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: "center", 
    },
    moldeImagem: {
        borderRadius: 50,
        backgroundColor: '#FFF', 
        width: '100%'
    },
});