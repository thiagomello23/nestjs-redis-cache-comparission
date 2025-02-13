import { DataSource } from "typeorm";
import { Product } from "./product.entity";

export const productsProviders = [{
    provide: "PRODUCTS_PROVIDERS",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],
}]