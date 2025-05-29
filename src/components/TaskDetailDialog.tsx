import { AddSubTask } from "@/components/AddSubTask";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import type { TaskType } from "@/types/commonTypes";
import { SubTaskToggle } from "@/components/SubTaskToggle";
import { EditableInput } from "@/components/EditableInput";

type Props = {
  task: TaskType;
};

export const TaskDetailDialog: React.FC<Props> = ({ task }) => {
  const donePercentage = Math.round(
    (task.subTasks.filter((task) => task.status === "done").length /
      task.subTasks.length) *
      100
  );

  return (
    <DialogContent className="overflow-hidden">
      <DialogHeader>
        <div className="mt-4">
          <EditableInput task={task} field="name" />
        </div>

        <div className="mt-3">
          <EditableInput task={task} field="description" />
        </div>

        <h3 className="mt-[20px] text-left">Subtasks</h3>
        {!task.subTasks.length ? (
          <p className="text-sm text-gray-500 italic">
            No subtasks yet. Please add one.
          </p>
        ) : (
          <div className="flex gap-3 items-center">
            <span>{donePercentage}%</span>
            <div className="bg-slate-200 h-[5px] rounded-full flex-1 overflow-hidden">
              <div
                style={{
                  width: `${donePercentage}%`,
                }}
                className="h-full bg-green-700 transition-all duration-200"
              ></div>
            </div>
          </div>
        )}

        <div className="max-h-[200px] overflow-y-scroll flex flex-col gap-2 pr-2 mt-2">
          {task.subTasks.map((subTask) => (
            <SubTaskToggle
              key={subTask.id}
              subTask={subTask}
              taskId={task.id}
            />
          ))}
        </div>

        <div className="mt-4">
          <AddSubTask taskId={task.id} />
        </div>
      </DialogHeader>
    </DialogContent>
  );
};
