import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Text,
}
from "react-native";
    const Podum = () => {
        return (
            <View style={styles.pod}>
            <View style={styles.first}></View>
            <ImageBackground style={styles.userWinner} source={require("../assets/images/logo.png")}/>
            <View style={styles.two}></View>
            <View style={styles.three}></View>
            </View>
        );
    };
    const styles = StyleSheet.create({
        pod:{
            margin: 52 ,
            width: 244,
            height: 200,
            borderWidth: 5,
            borderColor:"blue",
            alignSelf:"center",
            flexDirection:"column-reverse",
           },
           first:{
               height: 60,
               backgroundColor:"red",
           },
           first:{
               height: 120,
               width: 81,
               backgroundColor:"yellow",
           },
           userWinner:{
               margin: 3,
               height: 60,
               width: 60,
               borderRadius:50,
           },
    })
    
    export default Podum;