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
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const registered_time_entity_1 = require("../db/models/registered_time.entity");
const user_entity_1 = require("../db/models/user.entity");
const repo_service_1 = require("../repo.service");
const registered_time_input_1 = require("./input/registered_time.input");
const pubSub = new graphql_subscriptions_1.PubSub();
const NEW_TIME_REGISTERED = 'NEW_TIME_REGISTERED';
let TimeRegisteredResolver = class TimeRegisteredResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getRegistereds_time() {
        return this.repoService.registered_timeRepo.find();
    }
    async getRegistereds_timeFromUSer(user_id) {
        return this.repoService.registered_timeRepo.find({
            where: { user_id }
        });
    }
    async getRegistered_time(id) {
        return this.repoService.registered_timeRepo.findOne(id);
    }
    async createRegisteredTime(input) {
        const registeredTime = this.repoService.registered_timeRepo.create({
            user_id: input.user_id
        });
        const timeRegisteredSave = this.repoService.registered_timeRepo.save(registeredTime);
        pubSub.publish('newTime_registered', timeRegisteredSave);
        return timeRegisteredSave;
    }
    newTime_registered() {
        return pubSub.asyncIterator('newTime_registered');
    }
    async user(parent) {
        return this.repoService.userRepo.findOne(parent.user_id);
    }
};
__decorate([
    graphql_1.Query(() => [registered_time_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimeRegisteredResolver.prototype, "getRegistereds_time", null);
__decorate([
    graphql_1.Query(() => [registered_time_entity_1.default]),
    __param(0, graphql_1.Args('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TimeRegisteredResolver.prototype, "getRegistereds_timeFromUSer", null);
__decorate([
    graphql_1.Query(() => registered_time_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TimeRegisteredResolver.prototype, "getRegistered_time", null);
__decorate([
    graphql_1.Mutation(() => registered_time_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registered_time_input_1.default]),
    __metadata("design:returntype", Promise)
], TimeRegisteredResolver.prototype, "createRegisteredTime", null);
__decorate([
    graphql_1.Subscription(() => registered_time_entity_1.default, {
        resolve(timeRegisteredSave) {
            return timeRegisteredSave;
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimeRegisteredResolver.prototype, "newTime_registered", null);
__decorate([
    graphql_1.ResolveField(() => user_entity_1.default),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registered_time_entity_1.default]),
    __metadata("design:returntype", Promise)
], TimeRegisteredResolver.prototype, "user", null);
TimeRegisteredResolver = __decorate([
    graphql_1.Resolver(() => registered_time_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], TimeRegisteredResolver);
exports.default = TimeRegisteredResolver;
//# sourceMappingURL=time_registered.resolver.js.map