import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart";
import ItemReducer from "./Features/Items";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import usersReducer from "./Features/Users";
import OrdersReducer from "./Features/Orders";
import reviewsReducer from "./Features/Review";
import storeReducer from "./Features/StoreReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
  item: ItemReducer,
  user: usersReducer,
  Orders: OrdersReducer,
  reviews: reviewsReducer,
  store: storeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
