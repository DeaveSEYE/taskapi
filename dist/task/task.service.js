"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./entities/task.entity");
const sequelize_1 = require("@nestjs/sequelize");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    create(createTaskDto) {
        return this.taskRepository.create(createTaskDto);
    }
    findAll() {
        return this.taskRepository.findAll();
    }
    findOne(id) {
        return this.taskRepository.findOne({ where: { id } });
    }
    update(id, updateTaskDto) {
        const condition = { where: { id: id } };
        this.taskRepository.update(updateTaskDto, condition);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.taskRepository.destroy({ where: { id } });
        return result > 0;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(task_entity_1.Task)),
    __metadata("design:paramtypes", [Object])
], TaskService);
//# sourceMappingURL=task.service.js.map