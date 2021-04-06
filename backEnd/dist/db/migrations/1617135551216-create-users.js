"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1617135551216 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1617135551216 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'users',
            columns: [{
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'string',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'string',
                    length: '255',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'string',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'role',
                    type: 'string',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    isNullable: false,
                    default: 'now()',
                }]
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.createUsers1617135551216 = createUsers1617135551216;
//# sourceMappingURL=1617135551216-create-users.js.map