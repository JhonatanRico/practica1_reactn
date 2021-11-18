import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({route,navigation}) => {
    const {nombre}=route.params;
    return (
        <View style={styles.container}>
            <Text>Pantalla de Detalles</Text>
            <Text>{ nombre }</Text>
            <Button 
                title="Siguente Pantalla"
                onPress={()=>navigation.navigate('AnotherScreen')}
            />
            <Button 
                title="Home"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  