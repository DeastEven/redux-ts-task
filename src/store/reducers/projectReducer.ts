interface ProjectAction {
  type: string;
  payload: object;
}

interface ProjectState {
  projects: any[];
}
export const enum projectActionType {
  ADD_PROJECT = "ADD_PROJECT",
  EDIT_PROJECT = "EDIT_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT",
}

const defaultState: ProjectState = {
  projects: [
    {
      id: 1,
      title: "Project1",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 1,
      user_id: 1,
      task_id: 1,
    },
    {
      id: 2,
      title: "Project2",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 3,
      user_id: 1,
      task_id: 1,
    },
    {
      id: 3,
      title: "Project3",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 5,
      user_id: 2,
      task_id: 2,
    },
    {
      id: 4,
      title: "Project4",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores commodi, consequuntur enim exercitationem fugiat ipsa iusto minima neque nihil obcaecati perferendis quos, ratione sunt totam ullam voluptas voluptatum.",
      time: 10,
      user_id: 2,
      task_id: 2,
    },
  ],
};

export const projectReducer = (
  state = defaultState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case projectActionType.ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};
