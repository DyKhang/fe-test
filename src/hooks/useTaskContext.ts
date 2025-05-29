import { TaskContext } from "@/components/TaskProvider";
import { useContext } from "react";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("This hook must to be use inside the context!");

  return context;
};
