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
const cripyto_1 = require("../../auth/cripyto");
const typeorm_1 = require("typeorm");
const registered_time_entity_1 = require("./registered_time.entity");
let User = class User {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    graphql_1.HideField(),
    typeorm_1.Column({
        transformer: cripyto_1.HashPasswordtransform
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => registered_time_entity_1.default, registered_time => registered_time.userConnection),
    __metadata("design:type", Promise)
], User.prototype, "userConnection", void 0);
User = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'users' })
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map