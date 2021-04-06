import { UseFilters } from "@nestjs/common";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1617135551216 implements MigrationInterface {
    private table = new Table({
        name: 'users',
        columns: [{
            name:'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
        },
        {
            name:'name',
            type: 'string',
            length:'255',
            isNullable: false,
        },

        {
            name:'email',
            type: 'string',
            length:'255',
            isUnique:true,
        },

        {
            name:'password',
            type: 'string',
            length:'255',
            isNullable:false
        },

        {
            name:'role',
            type: 'string',
            length:'255',
            isNullable:false
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

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
