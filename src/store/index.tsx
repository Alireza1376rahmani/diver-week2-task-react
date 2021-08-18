import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./cars"
import reducer from "./reducer";

export default function doesntmattername() {
	return configureStore({ reducer });
}
