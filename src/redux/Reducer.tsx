import {ADD_TODO, REMOVE_TODO} from '../redux/Actions'

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
