export default (state=null, action) => {
  console.log('hey');
  switch(action.type) {
    case 'select_library': 
      return action.payload;
    default: 
      return state;
  }
};