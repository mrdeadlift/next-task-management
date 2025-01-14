'use server'

import { TaskModel } from "@/models/task";
import { connectDatabase } from "@/utils/database";


export const getTasks = async () => {
    await connectDatabase();
    return TaskModel.find(
        { isCompleted: true }
    );
}