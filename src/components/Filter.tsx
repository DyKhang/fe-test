import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskContext } from "@/hooks/useTaskContext";

//Use To Filter All Tasks Base On Task Status
export const Filter = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <Select
      defaultValue={filter}
      onValueChange={(value: "all" | "inProgress" | "todo" | "done") =>
        setFilter(value)
      }
    >
      <SelectTrigger className="lg:w-[130px] w-full cursor-pointer rounded-sm border-slate-300">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="todo">Todo</SelectItem>
        <SelectItem value="inProgress">In Progress</SelectItem>
        <SelectItem value="done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
};
