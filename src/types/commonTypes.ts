//Data Type Use For All Project

export type TaskStatusType = "todo" | "inProgress" | "done";

type SubTaskStatusType = "done" | "notDone";

export type SubTaskType = {
  id: string;
  name: string;
  status: SubTaskStatusType;
};

export type TaskType = {
  id: string;
  name: string;
  status: TaskStatusType;
  description: string;

  subTasks: SubTaskType[];
};
