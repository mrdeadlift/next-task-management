import Link from "next/link";
import { MdAddTask } from "react-icons/md";
import TaskCard from "./TsskCard/TaskCard";

export default function MainPage() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link href="/new-task" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          <MdAddTask className="size-5"/>
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
