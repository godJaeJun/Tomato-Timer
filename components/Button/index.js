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