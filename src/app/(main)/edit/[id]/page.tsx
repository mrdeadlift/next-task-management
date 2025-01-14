import { getTaskById } from "@/actions/task";
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm"
import { TaskDocument } from "@/models/task";

interface Params {
 params: {id: string};
}

const fetchTaskById = async (id: string): Promise<TaskDocument> => {
  try {
    const data:TaskDocument = await getTaskById(id);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch task");
  }
}

const EditTaskPage = async ({params}: Params) => {
  try {
    const {id} = await params;
    const task = await fetchTaskById(id);
    return (
      <div>
        <EditTaskForm taskString={JSON.stringify(task)} />
      </div>
    )
  } catch (error) { 
    throw new Error("Failed to fetch task");
  }
  
}

export default EditTaskPage