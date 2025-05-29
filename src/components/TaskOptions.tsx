import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import { useTaskContext } from "@/hooks/useTaskContext";
import type { TaskType } from "@/types/commonTypes";
import { TaskDetailDialog } from "@/components/TaskDetailDialog";

type Props = {
  taskProp: TaskType;
};

export const TaskOptions: React.FC<Props> = ({ taskProp }) => {
  const { setTasks } = useTaskContext();

  const handleDeleteTask = () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskProp.id));
  };
  return (
    <Dialog>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="size-[20px] rounded-sm flex items-center justify-center mr-4 cursor-pointer">
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-2">
            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <SquarePen />
                <span>Task Detail</span>
              </DropdownMenuItem>
            </DialogTrigger>

            <AlertDialogTrigger asChild className="cursor-pointer">
              <DropdownMenuItem>
                <Trash2 />
                <button className="cursor-pointer">Delete Task</button>
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this task?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove the task and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="cursor-pointer bg-red-700 hover:bg-red-700"
              onClick={handleDeleteTask}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        <TaskDetailDialog task={taskProp} />
      </AlertDialog>
    </Dialog>
  );
};
