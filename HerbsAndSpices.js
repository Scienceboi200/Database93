import * as React from "react"
import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StyleSheet, 
    Image,
    Platform,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    } from "react-native"

export default class HerbsAndSpices extends React.Component{
    render() { 
        return ( 
        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/six.png")}
            style={styles.ImgBg}>
            <View style={{flex: 0.3, justifyContent: "center", alignItems: "center"}}>
                <Image 
                style={styles.appIcon}
                source={require("../assets/logo.png")}/>
            </View>

            <View> 
                <Image 
                style={styles.appName}
                source={require("../assets/name.png")}/>
            </View>

            <View style={{flex: 0.1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <Text style={styles.schedule}>Herbs and Spices</Text>
            </View>

            <TouchableOpacity 
            style={styles.create}>
            </TouchableOpacity>

            </ImageBackground>
            </ScrollView>
            </View> 
            ) 
            }
}

const styles= StyleSheet.create({
    container: {
     flex:1,
     justifyContent: "center",
     alignItems: "center"
       },
    droidSafeArea: { 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
       },
    appIcon:{
     height: 150,
     width: 150,
     marginTop: 100,
     marginBottom: 100
       },
    appTitle: {
     fontSize: 40,
     color: "#E2AD01",
     fontFamily: "Bubblegum-Sans",
     marginTop: 30,
     marginBottom: 30,
        },
    schedule: {
     fontSize: 20,
     color: "#46A79E",
     fontFamily: "Bubblegum-Sans",
        },
    ImgBg: {
     resizeMode: "cover",
     flex: 1
        },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 15,
        color: "white",
    },
    appName: {
        height: 125,
        width: 500,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 70,
        alignSelf: "center"
    },
})