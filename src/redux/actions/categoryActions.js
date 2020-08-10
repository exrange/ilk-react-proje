import * as actionTypes from "./actionTypes";

export function changeCategories(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}


export function getCategoriesSucces(categories){

  return { type: actionTypes.GET_CATEGORIES_SUCCES, payload: categories };


}

export function getCategories() {
  return function (dispatch) {
    let url = " http://localhost:3000/categories";

    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCategoriesSucces(response)));
  };
}
