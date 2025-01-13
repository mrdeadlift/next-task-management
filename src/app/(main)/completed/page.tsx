import { getTasks } from "@/actions/completedTask";
import TaskCard from "@/components/TaskCard/TaskCard"

const fetchCompletedTasks = async () => {
  try {
    const data = await getTasks();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
}

const CompletedTaskPage = async() => {
  const completedTasks = await fetchCompletedTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Completed Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {completedTasks.map((task) => ( 
          <TaskCard key={task._id} taskDocument={task} />
        ))}
      </div>
    </div>
  )
}

export default CompletedTaskPage