import {connect} from 'react-redux';//컴포넌트를 스토어에 연결하는 것을 도와준다.
import Timer from './presenter';

function mapStateToProps(state){
    const{isPlaying,elapsedTime,timerDuration}=state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer);