const initialState = {
  menu: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //меню загрузилось
    case 'MENU-LOADED':
      return {
        menu: action.payload
      };
    default:
      return state;
  }
}

export default reducer;