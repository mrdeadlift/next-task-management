'use server'

import { TaskModel } from "@/models/task";
import { connectDatabase } from "@/utils/database";
import { redirect } from "next/navigation";
import { z } from "zod";

const taskSchema = z.object({
    title: z.string().min(1, "タイトルは必須です"),
    description: z.string(),
    dueDate: z.string()
        .min(1, "期限は必須です")
        .transform((str) => {
            const date = new Date(str);
            if (isNaN(date.getTime())) {
                throw new Error("無効な日付形式です");
            }
            return date;
        }),
    isCompleted: z.boolean().default(false),
});

export interface FormState {
    error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
    const rawTask = {
        title: formData.get('title'),
        description: formData.get('description'),
        dueDate: formData.get('dueDate'),
        isCompleted: false,
    }

    try {
        const validatedTask = taskSchema.parse(rawTask);
        await connectDatabase();
        await TaskModel.create(validatedTask);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: error.errors[0].message };
        }
        state.error = "タスクの作成に失敗しました";
        return state;
    }
    redirect('/');
}

export const getTasks = async () => {
    await connectDatabase();
    return TaskModel.find();
}

export const getTaskById = async (id: string) => {
    await connectDatabase();
    return TaskModel.findById(id);
}

export const updateTask = async (id:string, state: FormState, formData: FormData) => {
    const rawTask = {
        title: formData.get('title'),
        description: formData.get('description'),
        dueDate: formData.get('dueDate'),
        isCompleted: Boolean(formData.get('isCompleted')),
    }

    try {
        const validatedTask = taskSchema.parse(rawTask);
        await connectDatabase();
        await TaskModel.updateOne({_id: id}, validatedTask);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: error.errors[0].message };
        }
        state.error = "タスクの更新に失敗しました";
        return state;
    }
    redirect('/');
}

export const deleteTask = async (id:string, state: FormState) => {

    try {
        await connectDatabase();
        await TaskModel.deleteOne({_id: id});
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: error.errors[0].message };
        }
        state.error = "タスクの削除に失敗しました";
        return state;
    }
    redirect('/');
}