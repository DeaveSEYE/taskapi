import { CreateTaskDto, Priority } from './create-task.dto';
declare const UpdateTaskDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTaskDto>>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
    title?: string;
    content?: string;
    priority?: Priority;
    color?: string;
    dueDate: Date;
}
export {};
