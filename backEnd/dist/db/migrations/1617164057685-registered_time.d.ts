import { MigrationInterface, QueryRunner } from "typeorm";
export declare class registeredTime1617164057685 implements MigrationInterface {
    private table;
    private foreignKey;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
