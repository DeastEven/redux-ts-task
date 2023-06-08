import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";
import { modalReducer } from "./modalReducer";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  project: projectReducer,
  modal: modalReducer,
  tasks: tasksReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
