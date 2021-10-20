import produce from 'immer'
import createReducer from './reducerUtils'
import _ from "lodash";

const initialState = {
    jsonObj: {},
    sourceImages: []
};
function findPath(array, match, state) {
    var imgSrcs = [];
    array.some(function iter(path) {
        return function (value, i) {
            if ((typeof value === 'string') && value.endsWith(match)) {
                var imgPath = path.concat("[" + i + "]").join("")
                var current = { value, imgPath }
                imgSrcs.push(current);
            }
            if (Array.isArray(value)) {
                return value.some(iter(path.concat("[" + i + "]")));
            };
        };
    }([]));
    return imgSrcs;
}
const loadReducer = {
    setSourceImages(state, action) {
        var imgSrcs = findPath(state.jsonObj.project, ".png", state);
        state.sourceImages = imgSrcs;
    },
    setJsonObj(state, action) {
        state.jsonObj = action.payload
    },
    updateJsonObj(state, action) {
        _.set(state.jsonObj, 'project' + action.payload[1], action.payload[0]);
    }
};

export default produce((state, action) => createReducer(state, action, loadReducer), initialState);
