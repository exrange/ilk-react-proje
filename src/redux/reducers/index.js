import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import ProductListReducer from "./ProductListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  ProductListReducer,
  cartReducer,
  
});

export default rootReducer;
