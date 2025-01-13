'use client'

import { FormState, updateTask } from "@/actions/task";
import { TaskDocument } from "@/models/task"
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface EditTaskFormProps {
  task: TaskDocument;
}

const EditTaskForm = (editTaskFormProps : EditTaskFormProps) => {
  const { task } = editTaskFormProps;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(new Date(task.dueDate));
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  
  const updateTaskId = updateTask.bind(null, task._id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(updateTaskId ,initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return <button 
    type='submit' 
    disabled={pending}
    className="w-full bg-gradient-to-r from-gray-500 to-gray-600 
      hover:from-gray-700 hover:to-indigo-900
      text-white font-semibold py-3 px-6 rounded-md 
      shadow-lg hover:shadow-xl 
      transition-all duration-150 
      active:shadow-md 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Edit Task
    </button>
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setDueDate(newDate);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Edit Task</h1>
        <form action={formAction}>
          <div className="mb-6">
            <label htmlFor='title' className="block text-gray-700 font-bold mb-2">タイトル</label> 
            <input type="text" 
            id='title'
            name='title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-6">
            <label htmlFor='description' className="block text-gray-700 font-bold mb-2">説明</label> 
            <textarea id='description' 
            name='description' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor='dueDate' className="block text-gray-700 font-bold mb-2">期限</label> 
            <input type="date" 
            id='dueDate' 
            name='dueDate' 
            value={dueDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            min='2025-01-01' max='2999-12-31' className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-6 flex items-center">
            <input type='checkbox' 
            id='isCompleted' 
            name='isCompleted'
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
             />
            <label htmlFor='isCompleted' className="text-sm text-gray-700">完了にする</label>
          </div>
          <SubmitButton />
          {state.error && <div className="text-red-500 text-sm mt-4">{state.error}</div>}
        </form>
      </div>
    </div>
  )
}

export default EditTaskForm