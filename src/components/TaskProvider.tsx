import type { TaskType } from "@/types/commonTypes";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { tasks as tasksData } from "@/datas";

type TaskContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filter: "all" | "inProgress" | "todo" | "done";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "inProgress" | "todo" | "done">
  >;
};

type Props = {
  children: ReactNode;
};

export const TaskContext = createContext<TaskContextType | null>(null);

//A Parent Component Wrap Component Tree To Sharing State
//Using LocalStorage To Persist Tasks Data
export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    let tasks = tasksData;
    if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks")!);
    }

    return tasks;
  });

  const [query, setQuery] = useState("");

  const [filter, setFilter] = useState<"all" | "inProgress" | "todo" | "done">(
    "all"
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        query,
        setQuery,
        setTasks,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
