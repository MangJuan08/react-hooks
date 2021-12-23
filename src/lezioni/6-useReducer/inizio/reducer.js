const reducer = (state, action) => {
    if(action.type==="OPEN_MODAL") {
      return {
        ...state,
        isModalOpen:true,
        modalContent:action.payload
      }
    }
    if(action.type==="CLOSE_MODAL") {
        return {
          ...state,
          isModalOpen:false
        }
      }
 
  }

  export default reducer;