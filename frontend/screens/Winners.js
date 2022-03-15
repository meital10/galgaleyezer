import React, { useState } from "react";
import {
        View,
        StyleSheet,
        ScrollView,
        ImageBackground,
        Text,
    }
    from "react-native";
    import FirstLineHeader from "../components/FirstLineHeader";
    import MyGoal from "../components/MyGoal";
    import Podum from "../components/Podum";

    const Users =[{
        user1:{
         score:60,

        },
        user2:{
            score:80,
        },
        user3:{
            score:70,
        }
    }]

    const UserScoreLot = ({})
    const Winners = () =>
     {
        
            return (
            <View style = {styles.contianerWinners}>    
            <ScrollView>
             <FirstLineHeader/>
             <MyGoal/>
             <Podum/>
             <Text style={styles.goodJob}>כל הכבוד!</Text>
             <View style={styles.youClose}>
                 <Text> זה ממש קרוב!

                 </Text>
                 </View>
             </ScrollView>   
             </View>
             
            )
    };

    const styles = StyleSheet.create({
        contianerWinners:{
            flex: 1,
            backgroundColor:"#FFFFFF",
            fontFamily:"VarelaRound",
        },
        goodJob:{
         alignSelf:"center",
         margin: 20,
         fontSize:16,
        } ,

        youClose:{
            margin: 10,
            height: 67,
            width: 207,
            borderWidth: 5,
            borderColor:"blue",
            alignSelf:"center",
        }
         



    });
    
    export default Winners;                    