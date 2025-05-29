import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTaskContext } from "@/hooks/useTaskContext";
import { MESSAGES } from "@/lib/constants";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

export const AddTask = () => {
  const { setTasks, tasks } = useTaskContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddTask = () => {
    if (!name || !description) {
      toast.error(MESSAGES.ERROR);
      return;
    }

    setTasks([
      ...tasks,
      { description, id: uuidv4(), status: "todo", name, subTasks: [] },
    ]);
    setName("");
    setDescription("");
    setOpen(false);
    toast.success(MESSAGES.SUCCESS);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex items-center size-[30px] justify-center lg:size-auto text-white bg-gray-950 px-4 py-[6px] gap-1 rounded-md text-[14px] cursor-pointer">
          <Plus size={14} className="shrink-0" />
          <span className="-translate-y-[1px] hidden lg:block">Create</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex gap-4">
            <Label htmlFor="name" className="shrink-0">
              Task name
            </Label>
            <Input
              id="name"
              className="sm:w-[270px] ml-auto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Label htmlFor="desc">Description</Label>
            <Input
              id="desc"
              className="sm:w-[270px] ml-auto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddTask} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
