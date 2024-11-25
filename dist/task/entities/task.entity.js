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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Task = class Task extends sequelize_typescript_1.Model {
};
exports.Task = Task;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
    }),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Task.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Task.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], Task.prototype, "dueDate", void 0);
exports.Task = Task = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'tasks' })
], Task);
//# sourceMappingURL=task.entity.js.map