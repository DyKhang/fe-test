import { Header } from "@/components/Header";
import { TaskProvider } from "@/components/TaskProvider";
import { TaskTable } from "@/components/TaskTable";

function App() {
  return (
    <TaskProvider>
      <div className="flex items-start justify-center h-screen">
        <div className="w-[90%] lg:w-[60%] border border-slate-400 rounded-md overflow-hidden mt-[80px]">
          <Header />
          <TaskTable />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
