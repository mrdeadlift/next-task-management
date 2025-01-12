const EditTaskForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Edit Task</h1>
        <form action="">
          <div className="mb-6">
            <label htmlFor='title' className="block text-gray-700 font-bold mb-2">タイトル</label> 
            <input type="text" id='title' name='title' className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-6">
            <label htmlFor='description' className="block text-gray-700 font-bold mb-2">説明</label> 
            <textarea id='description' name='description' rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor='dueDate' className="block text-gray-700 font-bold mb-2">期限</label> 
            <input type="date" id='dueDate' name='dueDate' min='2025-01-01' max='2999-12-31' className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-6 flex items-center">
            <input type='checkbox' id='isCompleted' name='isCompleted' />
            <label htmlFor='isCompleted' className="text-sm text-gray-700">完了にする</label>
          </div>
          <button 
            type='submit' 
            className="w-full bg-gradient-to-r from-gray-500 to-gray-600 
              hover:from-gray-700 hover:to-indigo-900
              text-white font-semibold py-3 px-6 rounded-md 
              shadow-lg hover:shadow-xl 
              transition-all duration-150 
              active:shadow-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditTaskForm