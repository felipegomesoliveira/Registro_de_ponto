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
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Registered_time = class Registered_time {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Registered_time.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], Registered_time.prototype, "user_id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Registered_time.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Registered_time.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.default, user => user.registered_timeConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", Promise)
], Registered_time.prototype, "authorConnection", void 0);
Registered_time = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'registered_time' })
], Registered_time);
exports.default = Registered_time;
//# sourceMappingURL=registered_time.entity.js.map