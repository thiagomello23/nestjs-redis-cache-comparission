import { Module } from "@nestjs/common";
import { productsProviders } from "./product.providers";

@Module({
    providers: [...productsProviders],
    exports: [...productsProviders]
})
export class ProductsModule {}