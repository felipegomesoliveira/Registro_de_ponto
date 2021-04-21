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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("../auth.service");
const user_entity_1 = require("../db/models/user.entity");
const auth_types_1 = require("../types/auth.types");
const auth_input_1 = require("./input/auth.input");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async login(data) {
        const response = await this.authService.validateUser(data);
        return {
            user: response.user,
            token: response.token
        };
    }
};
__decorate([
    graphql_1.Mutation(() => auth_types_1.AuthType),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_input_1.default]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
AuthResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.default),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map