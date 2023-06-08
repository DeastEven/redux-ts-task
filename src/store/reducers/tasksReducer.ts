interface TasksActions {
  type: string;
  payload: object;
}
interface TasksState {
  tasks: any[];
}
export const enum tasksActionType {
  ADD_TASK = "ADD_TASK",
  EDIT_TASK = "EDIT_TASKS",
  DELETE_TASK = "DELETE_TASK",
}
const defaultState = {
  tasks: [
    {
      id: 1,
      title: "Task1",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 1,
      project_id: 1,
    },
    {
      id: 2,
      title: "Task2",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 1,
      project_id: 1,
    },
    {
      id: 3,
      title: "Task3",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 1,
      project_id: 1,
    },
    {
      id: 4,
      title: "Task4",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 1,
      project_id: 1,
    },
    {
      id: 5,
      title: "Task5",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 2,
      project_id: 2,
    },
    {
      id: 6,
      title: "Task6",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 2,
      project_id: 2,
    },
    {
      id: 7,
      title: "Task7",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 3,
      project_id: 3,
    },
    {
      id: 8,
      title: "Task8",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 4,
      current_time: 0,
      user_id: 4,
      project_id: 4,
    },
  ],
};
export const tasksReducer = (
  state = defaultState,
  action: TasksActions
): TasksState => {
  switch (action.type) {
    case tasksActionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};
