import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    collapsed: true,
    user: {},
    listTasks: [],
};

const reducer = (state = initialState, action) => {
    console.log("action:", action)

    switch (action.type) {
        case "TOGGLE_COLLAPSE":
            return {
                ...state,
                collapsed: !state.collapsed,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_LIST_TASK":
            return {
                ...state,
                listTasks: action.payload,
            };
            
        default:
            return state;
    }

};

const store = createStore(reducer, applyMiddleware(thunk));

export const collapseMenu = () => {
    store.dispatch({ type: "TOGGLE_COLLAPSE" })
};

export const updateListTasks = (value) => {
    store.dispatch({ type: "SET_LIST_TASK", payload: value });
};

export const updateUser = (dispatch, value) => {
    dispatch({ type: "UPDATE_USER", payload: value });
};

export default store;