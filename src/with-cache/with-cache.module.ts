import { Module } from "@nestjs/common";
import { WithCacheController } from "./with-cache.controller";
import { WithCacheService } from "./with-cache.service";
import { ProductsModule } from "src/products/products.module";

@Module({
    imports: [ProductsModule],
    controllers: [WithCacheController],
    providers: [WithCacheService]
})
export class WithCacheModule {}