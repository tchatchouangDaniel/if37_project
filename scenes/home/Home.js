import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TouchableOpacity } from 'react-native';
import BoxImage from '../../components/BoxImage';

function Home() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.functions}>
            <BoxImage colorBox="#EAEAF7" iconName="camera" />
            <BoxImage colorBox="#F9EDEF" iconName="document"/>
            <BoxImage colorBox="#F9EDEF" iconName="document"/>
            <BoxImage colorBox="#EAEAF7" iconName="camera"/>
            
        </View>
        
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7EFF5',
      flexDirection:'row',
      paddingLeft: 15,
      paddingRight : 15,
      
      //paddingTop: Platform.OS === 'android' ? 40 : 0,
    },

    functions:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height : "25%",
        width: "100%",
        flexWrap : "wrap",
        
    }
    
  });

export default Home
