    import React, { Component } from 'react';
    import {
        View,
        Text,
        StyleSheet,
    }    
    from "react-native";
    class MyGoal extends Component {
        render() {
            return (
                <View style={styles.goalsHeaders}>
                <Text style={styles.myGoaltitle}>המטרה שלי</Text>
                <View style={styles.myGoal}><Text>לרדת במשקל</Text></View>
            </View>
            );
        }
    }

    const styles = StyleSheet.create({
        goalsHeaders:{
            height: 123,
            backgroundColor:"#FFDE6F",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            alignItems:"center",
            justifyContent:"space-around",
        },
        myGoaltitle:{
            fontSize:24,

        },
        myGoal:{
            fontSize:14,
            height: 47,
            width: 119,
            backgroundColor:"#FFFFFF",
            alignItems:"center",
            justifyContent:"center",
            borderColor:"#FFC709",
            shadowColor:"#FFC709",
            borderRadius:5,
        },

    });
    
    export default MyGoal;