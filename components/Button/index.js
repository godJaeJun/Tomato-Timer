import React from "react"
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native"
import {FontAwesome} from "@expo/vector-icons"

function Button({iconName,onPress}){
    return(
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    )
}

Button.propTypes={
    iconName:PropTypes.string.isRequired, //아이콘 이름은 string으로 입력받는다.
    onPress:PropTypes.func.isRequired   //눌렀을때의 반응을 function이어야 한다.
}
export default Button;
/*
{
    isCounting:true|false,   //시작을 눌렀는지 정지를 눌렀는지
    counterDuration:1500,   //25분을 초로바꿈 MAX
    elapsedTime:0,         //카운팅을 시작한지 얼마나 지났는지 1500까지 
}
*/