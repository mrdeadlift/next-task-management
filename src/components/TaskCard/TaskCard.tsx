import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton"
import TaskEditButton from "./TaskEditButton/TaskEditButton"

const TaskCard = () => {
  return (
    <div className="w-65 h-50 p-4 bg-white shadow-md rounded-lg">
        <header className="mb-4">
            <h1 className="text-xl font-bold">Task Card1</h1>
            <div className="text-gray-600 text-clamp-3">タスク説明</div>
        </header>
        <div className="mb-4">
            <div className="text-gray-800">期限: 2021/12/31</div>
            <div className="text-gray-800">優先度: 高</div>
        </div>
        <footer className="flex gap-4 mt-1">
        <div>
            <div className={`text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm 
                    ${true ? 'bg-green-500' : 'bg-red-500'}`} >{true ? "Completed" : "Incomplete"}</div>
        </div>
           <div className="flex gap-2 ml-auto">
                <TaskEditButton id="1"/>
                <TaskDeleteButton id="1"/>
            </div>
        </footer>
    </div>
  )
}

export default TaskCard