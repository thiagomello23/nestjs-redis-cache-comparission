import { Module } from "@nestjs/common";
import { NoCacheService } from "./no-cache.service";
import { NoCacheController } from "./no-cache.controller";
import { ProductsModule } from "src/products/products.module";

@Module({
    imports: [ProductsModule],
    controllers: [NoCacheController],
    providers: [NoCacheService],
    exports: []
})
export class NoCacheModule {}