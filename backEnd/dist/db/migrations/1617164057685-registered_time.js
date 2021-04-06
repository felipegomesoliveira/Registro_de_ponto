"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeredTime1617164057685 = void 0;
const typeorm_1 = require("typeorm");
class registeredTime1617164057685 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'registered_time',
            columns: [{
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'user_id',
                    type: 'string',
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
        this.foreignKey = new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users'
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.registeredTime1617164057685 = registeredTime1617164057685;
//# sourceMappingURL=1617164057685-registered_time.js.map