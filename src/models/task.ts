import mongoose, {Document, Schema} from 'mongoose';

export interface Task{
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    }

export interface TaskDocument extends Task, Document {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TaskDocumentString {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
}

const taskSchema = new Schema<TaskDocument>({
    title: { type: String, required: true },
    description: { type: String, required: false },
    dueDate: { type: Date, required: false },
    isCompleted: { type: Boolean, required: false, default: false },
}, { timestamps: true });

export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema);