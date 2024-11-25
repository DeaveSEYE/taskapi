import { Model } from 'sequelize-typescript';
export declare class Task extends Model {
    id?: number;
    title: string;
    content: string;
    priority: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
}
