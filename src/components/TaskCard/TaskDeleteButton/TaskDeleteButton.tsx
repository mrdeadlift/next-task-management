import Link from "next/link";
import { FaPen, FaTrash } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton:React.FC<TaskDeleteButtonProps> = ({id}) => {
  return (
    <Link href={`/edit/${id}`}>
        <FaTrash className="mt-1 text-gray-800 hover:text-gray-600 cursor-pointer"/>
    </Link>
  )
}

export default TaskDeleteButton