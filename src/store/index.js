import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import saga from './saga';
// ==============================|| REDUX - MAIN STORE ||============================== //

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const persister = 'Free';

export { store, persister };
