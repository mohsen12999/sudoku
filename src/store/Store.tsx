import {
    createStore,
    // compose,
    applyMiddleware,
  } from "redux";

  import thunk from "redux-thunk";
  import rootReducer from "../reducers/rootReducer";
  import { composeWithDevTools } from "redux-devtools-extension";

  const initialState:object = {};

  const middleware:Array<any> = [thunk];

  const composeEnhancers:any = composeWithDevTools({
    // specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const enhancer:any = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );

  const store: any = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  export default store;