import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1739389035799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "decimal"
                    },
                    {
                        name: "description",
                        type: "text"
                    },
                    {
                        name: "isActive",
                        type: "boolean"
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
