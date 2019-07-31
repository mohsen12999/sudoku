import {
    createStore,
    // compose,
    applyMiddleware,
  } from 'redux';
  
  import thunk from 'redux-thunk';
  import rootReducer from '../reducers/rootReducer'
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  const initialState = {};
  
  const middleware = [thunk];
  
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  
  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );
  
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  export default store;