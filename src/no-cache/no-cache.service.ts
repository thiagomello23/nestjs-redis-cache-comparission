import { Inject, Injectable } from "@nestjs/common";
import { Product } from "src/products/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class NoCacheService {

    constructor(
        @Inject("PRODUCTS_PROVIDERS")
        private readonly productsRepository: Repository<Product>
    ){}

    async getAllProducts() {
        // For testing purpose
        // await new Promise(resolve => setTimeout(resolve, 3000))

        return this.productsRepository
            .createQueryBuilder("products")
            .getMany()
    }
}