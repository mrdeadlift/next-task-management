import { Task, TaskDocument } from "@/models/task";
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton"
import TaskEditButton from "./TaskEditButton/TaskEditButton"

interface TaskCardProps {
    taskDocument: TaskDocument;
}

const TaskCard = (taskProps : TaskCardProps) => {
    const task = taskProps.taskDocument;

  return (
    <div className="w-65 h-50 p-4 bg-white shadow-md rounded-lg">
        <header className="mb-4">
            <h1 className="text-xl font-bold">{task.title}</h1>
            <div className="text-gray-600 text-clamp-3">{task.description}</div>
        </header>
        <div className="mb-4">
            <div className="text-gray-800">{task.dueDate.toLocaleDateString()}</div>
            {/* <div className="text-gray-800">優先度: 高</div> */}
        </div>
        <footer className="flex gap-4 mt-1">
        <div>
            <div className={`text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm 
                    ${task.isCompleted ? 'bg-green-500' : 'bg-red-500'}`} >{task.isCompleted ? "Completed" : "Incomplete"}</div>
        </div>
           <div className="flex gap-2 ml-auto">
                <TaskEditButton id={task._id} />
                <TaskDeleteButton id={task._id} />
            </div>
        </footer>
    </div>
  )
}

export default TaskCard