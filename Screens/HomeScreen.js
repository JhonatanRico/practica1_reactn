import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Pantalla de Inicio</Text>
            <Button 
                title="Vamos a la pantalla detalle" 
                onPress={()=>navigation.navigate('DetailsScreen',{nombre:'Jhonatan Venerdi Rico Medina'})}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  