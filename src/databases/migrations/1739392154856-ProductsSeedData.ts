import { MigrationInterface, QueryRunner } from "typeorm";
import "dotenv/config";
import { Product } from "src/entities/product.entity";
import { faker } from '@faker-js/faker';

export class ProductsSeedData1739392154856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const products = []
        for(let counter = 0; counter < +process.env.QTT_PRODUCTS; counter++) {
            const p = new Product()
            p.name = faker.commerce.productName()
            p.price = +faker.commerce.price({min: 10, max: 500})
            p.description = faker.commerce.productDescription()
            p.isActive = true
            products.push(p)
        }

        await queryRunner.manager.save(Product, products)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
