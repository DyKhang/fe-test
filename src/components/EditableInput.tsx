import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useTaskContext } from "@/hooks/useTaskContext";
import { MESSAGES } from "@/lib/constants";
import type { TaskType } from "@/types/commonTypes";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Props = {
  task: TaskType;
  field: "description" | "name";
};

export const EditableInput: React.FC<Props> = ({ task, field }) => {
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const [valueChanged, setValueChanged] = useState(task[field]);
  const { setTasks } = useTaskContext();

  useEffect(() => {
    ref.current?.focus();
  }, [isEditing]);

  if (isEditing)
    return (
      <Input
        value={valueChanged}
        onChange={(e) => setValueChanged(e.target.value)}
        onBlur={() => {
          if (!valueChanged) {
            toast.error(MESSAGES.ERROR);
            ref.current?.focus();
            return;
          }
          setIsEditing(false);
          setTasks((tasks) =>
            tasks.map((t) =>
              t.id !== task.id ? t : { ...t, [field]: valueChanged }
            )
          );
        }}
        ref={ref}
        className={`text-[${
          field === "name" ? "18" : "16"
        }px] outline-none focus-visible:ring-0 focus-visible:border-slate-200/50`}
      />
    );

  if (field === "description")
    return (
      <DialogDescription
        className="mt-[10px] text-[16px] text-left"
        onClick={() => setIsEditing(true)}
      >
        {task[field]}
      </DialogDescription>
    );

  return (
    <DialogTitle className="text-left" onClick={() => setIsEditing(true)}>
      {task[field]}
    </DialogTitle>
  );
};
