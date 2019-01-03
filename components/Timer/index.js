import React, {Component} from 'react'; //리엑트를 불러온다.
import {View, Text,StyleSheet,StatusBar } from 'react-native';//리엑트 네이티브에서 View와 Text, StyleSheet 불러옴

class Timer extends Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>BUTTONS HERE</Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,    //크기지정
        backgroundColor:"#CE0B24"   //배경색지정
    },
    upper:{
        flex:2,
        justifyContent:"center",    //세로 가운데 지정
        alignItems:"center",    //가로 가운데 지정
    },
    lower:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    time:{
        color:"white",  //글씨색지정
        fontSize:120,   //폰트크기지정
        fontWeight:"100"
    },
});

export default Timer;