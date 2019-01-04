//Actions
const START_TIMER='START_TIMER';    //타이머 시작
const RESTART_TIMER='RESTART_TIMER';    //타이머 재시작 
const ADD_SECONDS='ADD_SECONDS'

//Action Creators 
//버튼을 누르면 타이머가 시작되는 액션
function startTimer(){
    return{
        type:START_TIMER
    };
}
//재시작하는 타이머
function restartTimer(){
    return{
        type:RESTART_TIMER
    };
}

function addSeconds(){
    return{
        type:ADD_SECONDS
    };
}

//Reducer
//default state 시작시 상태
const TIMER_DURATION=1500;

const initialState={
    isPlaying:false,
    elapsedTime:0,
    timerDuration:TIMER_DURATION
}
//액션을 보낼때마다 리덕스는 자동으로 리듀서를 실행할 것이다.
function reducer(state=initialState,action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECONDS:
            return applyAddSecond(state);
        default:
            return state;
    }
}

//Reducer Functions 
//..state는 이전 state다. 이전 상태를 가지고 가고 싶다.  
//현재 코드상태 그리고 새로운 변환이라는 뜻 위에 덮어쓰는것이다.
function applyStartTimer(state){
    return{
        ...state,
        isPlaying:true
    }
}
function applyRestartTimer(state){
    return{
        ...state,
        isPlaying:false,
        elapsedTime:0
    }
}
//현재 시간의 초가 맥스 초보다 작을 때
function applyAddSecond(state){
    if(state.elapsedTime<TIMER_DURATION){
        return{
            ...state,
            elapsedTime:state.elapsedTime+1
        }
    }
    else{
        return{
            ...state,
            isPlaying:false 
        }
    }
}

//Export Action Creators
const actionCreators={
    startTimer,
    restartTimer,
    addSeconds
}
export {actionCreators};
//Export Reducer 
export default reducer;