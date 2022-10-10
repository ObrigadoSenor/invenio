import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import reducer from "./reducer";

export const store = configureStore({ reducer });
export type Store = ReturnType<typeof store.getState>;

export const getStore = () => useSelector((store: Store) => store);
