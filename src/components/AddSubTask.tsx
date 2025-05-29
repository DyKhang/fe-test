import { Input } from "@/components/ui/input";
import { useTaskContext } from "@/hooks/useTaskContext";
import { MESSAGES } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

type Props = {
  taskId: string;
};

export const AddSubTask: React.FC<Props> = ({ taskId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const { setTasks } = useTaskContext();

  useEffect(() => {
    ref.current?.focus();
  }, [isOpen]);

  const handleAddSubTask = () => {
    if (!value) {
      toast.error(MESSAGES.ERROR);
      return;
    }

    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id !== taskId) return task;

        return {
          ...task,
          subTasks: [
            ...task.subTasks,
            { id: uuidv4(), name: value, status: "notDone" },
          ],
        };
      });
    });

    setValue("");
    setIsOpen(false);
  };

  if (isOpen)
    return (
      <div className="flex flex-col gap-2">
        <Input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center gap-1">
          <div
            onClick={handleAddSubTask}
            className="flex w-fit items-center text-white bg-gray-950 px-4 py-[6px] gap-1 rounded-md text-[14px] cursor-pointer"
          >
            <span className="-translate-y-[1px]">Add</span>
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
              setValue("");
            }}
            className="flex w-fit items-center bg-transparent px-4 py-[6px] gap-1 rounded-md text-[14px] cursor-pointer"
          >
            <span className="-translate-y-[1px]">Cancel</span>
          </div>
        </div>
      </div>
    );

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="flex w-fit items-center text-white bg-gray-950 px-4 py-[6px] gap-1 rounded-md text-[14px] cursor-pointer"
    >
      <span className="-translate-y-[1px]">Add an item</span>
    </div>
  );
};
