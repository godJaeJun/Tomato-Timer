import {connect} from 'react-redux';//컴포넌트를 스토어에 연결하는 것을 도와준다.
import {bindActionCreators} from 'redux';//이건 먼가를 묶어줘
import {actionCreators as tomatoActions} from '../../reducer'
import Timer from './presenter';


function mapStateToProps(state){
    const{isPlaying,elapsedTime,timerDuration}=state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

//디스패치는 액션을 리듀서로 보내는 function이다.
function mapDispatchToProps(dispatch){
    return{
        startTimer:bindActionCreators(tomatoActions.startTimer,dispatch),
        restartTimer:bindActionCreators(tomatoActions.restartTimer,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Timer);