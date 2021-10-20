import thunk from "redux-thunk";

import {
    getSourceImages,
    updateSourceImages
} from './loadMiddleware'

const appMiddleware = [
    thunk,
    getSourceImages,
    updateSourceImages
];

export default appMiddleware;
