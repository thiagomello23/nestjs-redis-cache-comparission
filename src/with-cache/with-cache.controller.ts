import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { WithCacheService } from "./with-cache.service";
import { Cache } from "src/logging/cache.decorator";
import { LoggingPerformanceInterceptor } from "src/logging/logging-perf.interceptor";

@Controller("with-cache")
export class WithCacheController {

    constructor(
        private readonly withCacheService: WithCacheService
    ){}

    @Get("cache")
    async cacheData() {
        return this.withCacheService.cacheData()
    }

    // For now you have to run cacheData() in order to cache products
    @Get("all")
    @Cache(true)
    @UseInterceptors(LoggingPerformanceInterceptor)
    async getAllProducts() {
        return this.withCacheService.getAllProducts()
    }
}