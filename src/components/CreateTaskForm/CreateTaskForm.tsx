'use client'

import { createTask, FormState } from "@/actions/task";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";


const CreateTaskForm = () => {
    const initialState: FormState = {error: ''};
    const [state, formAction] = useActionState(createTask, initialState);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
          <button 
            type='submit' 
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 
              hover:from-gray-700 hover:to-gray-800 
              text-white font-semibold py-3 px-6 rounded-md 
              shadow-lg hover:shadow-xl 
              transform hover:-translate-y-0.5 active:translate-y-0 
              transition-all duration-150 
              active:shadow-md 
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
              disabled:opacity-50"
            disabled={pending}
          >
            Create Task
          </button>
          )
        }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Create Task</h1>
        <form action={formAction}>
          <div className="mb-6">
            <label htmlFor='title' className="block text-gray-700 font-bold mb-2">タイトル</label> 
            <input type="text" id='title' name='title' className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"/>
          </div>

          <div className="mb-6">
            <label htmlFor='description' className="block text-gray-700 font-bold mb-2">説明</label> 
            <textarea id='description' name='description' rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor='dueDate' className="block text-gray-700 font-bold mb-2">期限</label> 
            <input type="date" id='dueDate' name='dueDate' min='2025-01-01' max='2999-12-31' className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"/>
          </div>
          <SubmitButton />
          {state.error && <div className="text-red-500 text-sm mt-2">{state.error}</div>}
        </form>
      </div>
    </div>
  )
}

export default CreateTaskForm