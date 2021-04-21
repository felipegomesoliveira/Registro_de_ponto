"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const ormOptions = require("./config/orm");
const repo_module_1 = require("./repo.module");
const user_resolver_1 = require("./resolvers/user.resolver");
const time_registered_resolver_1 = require("./resolvers/time_registered.resolver");
const auth_module_1 = require("./auth.module");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const gqlImports = [
    user_resolver_1.default,
    time_registered_resolver_1.default
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(ormOptions), repo_module_1.default, auth_module_1.default, jwt_strategy_1.JwtStrategy, ...gqlImports,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                playground: true,
                installSubscriptionHandlers: true,
                context: ({ req }) => ({ req })
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map