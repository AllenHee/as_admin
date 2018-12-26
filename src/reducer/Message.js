import { combineReducers } from 'redux';
import creatReducer from '../utils/createReducer';
import * as name from '../action/name';

// 上传图片的操作
const imageList = creatReducer([], {
    [name.MESSAGE_IMAGE_LIST_CHANGE](state, action) {
        return state.fileList;
    }
})

export default combineReducers({
    imageList
})