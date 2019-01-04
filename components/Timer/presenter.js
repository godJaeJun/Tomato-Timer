import React, {Component} from 'react'; //리엑트를 불러온다.
import {View, Text,StyleSheet,StatusBar } from 'react-native';//리엑트 네이티브에서 View와 Text, StyleSheet 불러옴
import Button from '../Button'

//시간포맷지정
function formatTime(time){
    let minutes=Math.floor(time/60);
    time -=minutes *60
    let seconds=parseInt(time%60,10);
    return `${minutes<10?`0${minutes}` : minutes}:${seconds<10?`0${seconds}`:seconds}`;
}

class Timer extends Component{
    
    componentWillReceiveProps(nextProps){
        const currentProps=this.props;
        //시작버튼을 눌렀을때
        if(!currentProps.isPlaying&& nextProps.isPlaying){
            //start the interval
            const timerInterval=setInterval(()=>{
                currentProps.addSeconds()
            },1000)
            this.setState({
                timerInterval
            })
        }
        //정지버튼을 눌렀을때
        else if(currentProps.isPlaying&&!nextProps.isPlaying){
            //stop the interval
            clearInterval(this.state.timerInterval);
        }
    }

    render(){
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer,
            addSeconds
        }=this.props
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying&&(
                        <Button iconName="play-circle" onPress={startTimer}/>
                    )}
                    {isPlaying&&(
                        <Button iconName="stop-circle" onPress={restartTimer}/>
                    )}
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