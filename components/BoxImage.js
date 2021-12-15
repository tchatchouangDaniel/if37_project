import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TouchableOpacity } from 'react-native';
const icons = {
    camera : require("../assets/images/camera.png"),
    document : require("../assets/images/document.png")
}


function BoxImage(props) {
    const iconName = props.iconName
    return (
        <TouchableOpacity style={styles.center} onPress={() => alert(`${iconName} pressed`)}>
            <View style={[styles.button,]}>
                <View style={[styles.center,styles.boxImage,{backgroundColor: props.colorBox}]}>
                    <Image
                        source={icons[iconName]}
                    />        
                </View>
                <Text style={styles.buttonText}>{iconName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    center : {
        alignItems: 'center', 
        
    },
    button: {
        flexGrow : 1,
        flexBasis : "20%",
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft : 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        marginTop: 10
    },
    boxImage: {
        flexGrow : 1,
        flexBasis : "10%",
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom : 10,
        borderRadius: 15,
        
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        textTransform: "uppercase",
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
    },
  });

export default BoxImage
