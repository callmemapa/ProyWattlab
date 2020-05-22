import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reduces/auth';

const middleware = [thunk];
const initialState = {
    token: null,
    error: null,
    loading: false,
    authenticate: null,
    usuario: null
}

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {

        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return initialState
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return initialState
    }
}

const persistedState = loadFromLocalStorage()

const reduc = combineReducers({
    reducer,
    token: (state = {}) => state,
    error: (state = {}) => state,
    loading: (state = {}) => state,
    authenticate: (state = {}) => state,
    usuario: (state = {}) => state
});

const store = createStore(
    reduc,
    persistedState,
    composeWithDevTools(
        applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;

