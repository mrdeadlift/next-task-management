import { getTasks } from "@/actions/task";
import TaskCard from "@/components/TaskCard/TaskCard";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const fetchAllTasks = async () => {
  try {
    const data = await getTasks();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch tasks");
  }
} 

export default async function MainPage() {
  const allTasks = await fetchAllTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link href="/new" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          <MdAddTask className="size-5"/>
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id} taskDocument={task} />
        ))}
      </div>
    </div>
  );
}
