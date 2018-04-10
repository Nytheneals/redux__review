// REDUX SET UP

// A STORE CONTAINS
// 1.STATE
// 2.GET STATE FUNCTION
// 3.STATE CHANGE LISTENER
// 4.UPDATE STATE

// THE STORE RETURNS AN OBJECT

// STATE IS NOT PUBLIC FACING, WE INTERACT WITH IT USING GET, LISTEN AND UPDATE STATE FUNCTIONS

// TO CREATE A STORE
function createStore() {
  // 1.STATE
  let state = {};

  // 2.GET STATE
  const getState = () => state;
  // 3.LISTEN TO STATE CHANGES

  // 4.UPDATE STATE
}