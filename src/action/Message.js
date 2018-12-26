import creatAction from '../utils/createAction';
import * as name from './name';

export const imageListChange = creatAction(name.MESSAGE_IMAGE_LIST_CHANGE, ['fileList'])
