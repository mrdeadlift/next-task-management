import { getTasks } from "@/actions/expiredTask";
import TaskCard from "@/components/TaskCard/TaskCard"

const fetchExpiredTasks = async () => {
  try {
    const data = await getTasks();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch tasks");
  }
}

const ExpiredTaskPage = async () => {
  const expiredTasks = await fetchExpiredTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.map((task) => ( 
          <TaskCard key={task._id} taskDocument={task} />
        ))}
      </div>
    </div>
  )
}

export default ExpiredTaskPage