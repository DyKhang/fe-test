import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskContext } from "@/hooks/useTaskContext";
import type { TaskStatusType } from "@/types/commonTypes";

type Props = {
  status: TaskStatusType;
  id: string;
};

const activeStyle = {
  todo: "bg-red-700",
  inProgress: "bg-pink-600",
  done: "bg-teal-900",
};

const actives: {
  label: string;
  status: TaskStatusType;
}[] = [
  {
    label: "Todo",
    status: "todo",
  },
  {
    label: "In Progress",
    status: "inProgress",
  },
  {
    label: "Done",
    status: "done",
  },
];

//Use To Change Task Status
export const StatusToggle: React.FC<Props> = ({ status, id }) => {
  const { setTasks } = useTaskContext();

  return (
    <Select
      onValueChange={(value: TaskStatusType) =>
        setTasks((tasks) => {
          return tasks.map((task) => {
            if (task.id === id) {
              return { ...task, status: value };
            } else return task;
          });
        })
      }
      defaultValue={status}
    >
      <SelectTrigger
        className={`w-full cursor-pointer rounded-sm ${activeStyle[status]} text-white border-none text-[12px] sm:text-sm w-[127px]`}
        isToggleStatus
      >
        <SelectValue placeholder={status} />
      </SelectTrigger>
      <SelectContent>
        {actives.map((active) => {
          return (
            <SelectItem key={active.status} value={active.status}>
              {active.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
