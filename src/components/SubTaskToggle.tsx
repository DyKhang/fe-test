import { Checkbox } from "@/components/ui/checkbox";
import { useTaskContext } from "@/hooks/useTaskContext";
import type { SubTaskType } from "@/types/commonTypes";
import { Trash } from "lucide-react";

type Props = {
  subTask: SubTaskType;
  taskId: string;
};

//Use To Change Subtask Status
export const SubTaskToggle: React.FC<Props> = ({ subTask, taskId }) => {
  const { setTasks } = useTaskContext();

  const handleDeleteSubTask = () => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id !== taskId
          ? task
          : {
              ...task,
              subTasks: task.subTasks.filter((st) => st.id !== subTask.id),
            }
      )
    );
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox
        onCheckedChange={(checked) => {
          setTasks((tasks) =>
            tasks.map((task) =>
              task.id !== taskId
                ? task
                : {
                    ...task,
                    subTasks: task.subTasks.map((st) =>
                      st.id !== subTask.id
                        ? st
                        : { ...st, status: checked ? "done" : "notDone" }
                    ),
                  }
            )
          );
        }}
        checked={subTask.status === "done"}
      />

      <span className={`${subTask.status === "done" && "line-through"}`}>
        {subTask.name}
      </span>

      <Trash
        size={18}
        className="text-red-500 ml-auto"
        onClick={handleDeleteSubTask}
      />
    </label>
  );
};
