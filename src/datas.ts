import type { TaskType } from "@/types/commonTypes";
import { v4 as uuidv4 } from "uuid";

export const tasks: TaskType[] = [
  {
    id: uuidv4(),
    name: "Thiết kế giao diện",
    status: "inProgress",
    description: "Thiết kế các thành phần UI chính cho trang dashboard.",
    subTasks: [
      { id: uuidv4(), name: "Header", status: "done" },
      { id: uuidv4(), name: "Sidebar", status: "done" },
      { id: uuidv4(), name: "Main content", status: "notDone" },
    ],
  },
  {
    id: uuidv4(),
    name: "Viết API người dùng",
    status: "todo",
    description: "Tạo các API cho chức năng quản lý người dùng.",
    subTasks: [
      { id: uuidv4(), name: "GET /users", status: "notDone" },
      { id: uuidv4(), name: "POST /users", status: "notDone" },
    ],
  },
  {
    id: uuidv4(),
    name: "Triển khai hệ thống",
    status: "done",
    description: "Triển khai ứng dụng lên môi trường staging.",
    subTasks: [
      { id: uuidv4(), name: "Cấu hình server", status: "done" },
      { id: uuidv4(), name: "Deploy lên Vercel", status: "done" },
    ],
  },
];
