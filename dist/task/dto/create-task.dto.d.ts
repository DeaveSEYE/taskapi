export declare enum Priority {
    High = "High",
    Medium = "Medium",
    Low = "Low"
}
export declare class CreateTaskDto {
    title: string;
    content: string;
    priority: Priority;
    color: string;
    dueDate: Date;
}
