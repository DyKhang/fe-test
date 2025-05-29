import { StatusToggle } from "@/components/StatusToggle";
import type { TaskType } from "@/types/commonTypes";
import { AlarmClock } from "lucide-react";

import { TaskOptions } from "@/components/TaskOptions";

type Props = {
  task: TaskType;
};

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className="flex border-b border-slate-300 last:border-transparent items-center pl-4">
      <div className="flex items-center gap-[10px] py-4 flex-1">
        <AlarmClock size={20} className="hidden sm:block" />
        <p className="truncate w-[100px] flex-1">{task.name}</p>
      </div>
      <div className="flex items-center gap-[10px] py-4 pr-[12px]">
        <StatusToggle status={task.status} id={task.id} />
      </div>

      <TaskOptions taskProp={task} />
    </div>
  );
};
