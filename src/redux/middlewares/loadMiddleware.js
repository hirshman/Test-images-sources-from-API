import { actions } from '../actions';

export const getSourceImages = ({ dispatch, getState }) => next => action => {
    console.log(action.type)
    if (action.type === 'GET_SOURCE_IMAGES') {
        console.log("i'm in getSourceImages middleware")
        var requestOptions = {
            method: 'GET',
            headers: {
                "X-Master-key": "$2b$10$yMMXKhGyb2KxRWoZ9h7SCOP.5h6mz5gq212U0BEBlNy9DbcFeceVu",
                "X-Bin-Meta": "false"
            }
        };
        fetch(`https://api.jsonbin.io/v3/b/6164652eaa02be1d4457eb35/latest`, requestOptions)
            .then(response => {
                console.log("Response:: " + response)
                return response.json();
            })
            .then(result => {
                console.log("result: " + JSON.stringify(result));
                dispatch(actions.setJsonObj(result));
                dispatch(actions.setSourceImages(result));
            })
            .catch(error => console.log('error', error));
    }
    return next(action);
}

//update jsonObj 
export const updateSourceImages = ({ dispatch, getState }) => next => action => {

    if (action.type === 'UPDATE_SOURCE_IMAGES') {
        console.log(" in updateSourceImages middleware")
        var reqBody = JSON.stringify(getState().loadReducer.jsonObj);
        var requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-key": "$2b$10$yMMXKhGyb2KxRWoZ9h7SCOP.5h6mz5gq212U0BEBlNy9DbcFeceVu"
            },
            body: reqBody
        };
        fetch(`https://api.jsonbin.io/v3/b/6164652eaa02be1d4457eb35`, requestOptions)
            .then(response => {
                console.log("Response:: " + response)
                return response.json();
            })
            .then(result => {
                console.log("result: " +JSON.stringify( result));  
            })
            .catch(error => console.log('error', error));
    }
    return next(action);
}


