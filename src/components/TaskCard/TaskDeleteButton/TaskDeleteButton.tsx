'use client'

import { deleteTask } from "@/actions/task";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { FaTrash } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton:React.FC<TaskDeleteButtonProps> = ({id}) => {
  const deleteTaskId = deleteTask.bind(null, id);
  const initialState = { error: "" };
  const [state, formAction] = useActionState(deleteTaskId, initialState);
  
  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return(
      <button 
        type='submit' 
        disabled={pending}
        className="hover:text-gray-600 cursor-pointer "
      >
        <FaTrash className="mt-1 text-gray-800 hover:text-gray-600 cursor-pointer"/>
      </button> );
  }
  
  return (
    <form action={formAction}>
        <SubmitButton />
    </form>
  )
}

export default TaskDeleteButton