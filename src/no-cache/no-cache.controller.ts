import { Controller, Get } from "@nestjs/common";
import { NoCacheService } from "./no-cache.service";

@Controller("no-cache")
export class NoCacheController {

    constructor(
        private readonly noCacheService: NoCacheService
    ){}

    @Get("all")
    async getAllProducts() {
        return this.noCacheService.getAllProducts()
    }
}