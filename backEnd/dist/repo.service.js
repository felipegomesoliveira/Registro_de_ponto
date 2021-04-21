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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("./db/models/user.entity");
const registered_time_entity_1 = require("./db/models/registered_time.entity");
const graphql_1 = require("@nestjs/graphql");
let RepoService = class RepoService {
    constructor(userRepo, registered_timeRepo) {
        this.userRepo = userRepo;
        this.registered_timeRepo = registered_timeRepo;
    }
    async getUserByEmail(email) {
        const userEmail = await this.userRepo.findOne({ email });
        return userEmail;
    }
    async getUserById(id) {
        const userId = await this.userRepo.findOne(id);
        if (!userId) {
            throw new common_1.NotFoundException('User not found');
        }
        return userId;
    }
};
__decorate([
    __param(0, graphql_1.Args('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoService.prototype, "getUserByEmail", null);
__decorate([
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepoService.prototype, "getUserById", null);
RepoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.default)),
    __param(1, typeorm_2.InjectRepository(registered_time_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], RepoService);
exports.default = RepoService;
//# sourceMappingURL=repo.service.js.map