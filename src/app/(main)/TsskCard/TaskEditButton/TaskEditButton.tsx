import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
    id: string;
}

const TaskEditButton:React.FC<TaskEditButtonProps> = ({id}) => {
  return (
    <Link href={`/edit/${id}`}>
        <FaPen className="mt-1 text-gray-800 hover:text-gray-600 cursor-pointer"/>
    </Link>
  )
}

export default TaskEditButton