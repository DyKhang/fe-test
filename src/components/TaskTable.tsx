import { Task } from "@/components/Task";
import { PenLine } from "lucide-react";

import { useTaskContext } from "@/hooks/useTaskContext";
import { AddTask } from "@/components/AddTask";

export const TaskTable = () => {
  const { tasks, query, filter } = useTaskContext();

  let filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filter !== "all") {
    filteredTasks = filteredTasks.filter((task) => task.status === filter);
  }

  return (
    <section>
      <div className="flex items-center gap-[10px] p-4 border-y bg-slate-200/40 border-slate-300">
        <PenLine size={20} />
        <span>Task Name</span>

        <AddTask />
      </div>
      <div className="pr-[4px] pb-[8px]">
        <div
          style={{
            maxHeight: `calc(100vh - 80px - 200px)`,
          }}
          className="overflow-y-scroll"
        >
          {filteredTasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
          {!filteredTasks.length && (
            <div className="p-4 text-center text-gray-500 italic">
              No tasks found. Try adding a new one or changing your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
