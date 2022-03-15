import React, { useState } from "react";
import {
        View,
        StyleSheet,
        ScrollView,
        ImageBackground,
        Text,
    }
    from "react-native";
    
    const FirstLineHeader = () => {
        return (
            <View style = {styles.firstLine}>
            <ImageBackground style={styles.logoSmall} source={require("../assets/images/logo.png")}/>
            <View style={styles.profileData}>
               <View style={styles.profileDataText}>
                 <Text>שם שלי</Text>
                 <Text>קבוצה 8</Text>
               </View>
               <ImageBackground style={styles.profileImage} source={require("../assets/images/logo.png")}/>
               </View>
    </View>
        );
    };

    const styles = StyleSheet.create({
        firstLine:{
            height: 65,
            backgroundColor:"#FFDE6F",
            flexDirection:"row-reverse",
            justifyContent:"space-between",
            padding: 15,
 
         },
         logoSmall:{
             width: 38,
             height: 34, 
         },
         profileData:{
             flexDirection:"row-reverse",
         },
         profileDataText:{
             
         },
         profileImage:{
             width: 38,
             height: 34,
             borderRadius:50,
         },
    })
    
    export default FirstLineHeader;