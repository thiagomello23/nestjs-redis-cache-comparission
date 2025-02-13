import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { NoCacheService } from "./no-cache.service";
import { LoggingPerformanceInterceptor } from "src/logging/logging-perf.interceptor";
import { Cache } from "src/logging/cache.decorator";

@Controller("no-cache")
export class NoCacheController {

    constructor(
        private readonly noCacheService: NoCacheService
    ){}

    @Get("all")
    @Cache(true)
    @UseInterceptors(LoggingPerformanceInterceptor)
    async getAllProducts() {
        return this.noCacheService.getAllProducts()
    }
}