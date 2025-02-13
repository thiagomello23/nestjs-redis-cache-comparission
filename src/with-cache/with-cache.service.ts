import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Product } from "src/products/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class WithCacheService {
    constructor(
        @Inject("PRODUCTS_PROVIDERS")
        private readonly productsRepository: Repository<Product>,
        @Inject(CACHE_MANAGER) 
        private cacheManager: Cache
    ){}

    async cacheData() {
        const products = await this.productsRepository.find()

        return this.cacheManager.set("in-memory", JSON.stringify(products))
    }

    async getAllProducts() {
        return JSON.parse(await this.cacheManager.get("in-memory"))
    }
}