// Combines all the reducers into one single reducer
import {combineReducers} from 'redux';

const initialState = {
    ModalContents:{
        videoSource:'',
        rowNumber:-1,
        movieTitle:''
    }
}

const ModalReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'GET_MODAL_CONTENT':
            return state;
        case 'SET_MODAL_CONTENT':
            return {...state,
                ModalContents : action.payload
            }
        default:
            return state;
        }
}

export default combineReducers({
  ModalReducer
});
