import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";
import { performance } from "perf_hooks";
import { Reflector } from "@nestjs/core";
import { Cache } from "./cache.decorator";

@Injectable()
export class LoggingPerformanceInterceptor implements NestInterceptor {
    constructor(
        private reflector: Reflector
    ){}

    intercept(context: ExecutionContext, next: CallHandler<any>){
        const cache = this.reflector.get(Cache, context.getHandler())

        const startTime = performance.now()
        return next
            .handle()
            .pipe(map((data) => {
                const endTime = performance.now()
                const executionTime = endTime - startTime
                const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024 // MB
                const payloadSize = Buffer.byteLength(JSON.stringify(data)) / 1024 / 1024 // MB
                
                return {
                    metadata: {
                        memoryUsage,
                        executionTime,
                        payloadSize,
                        payloadSizeMeasurement: "MB",
                        executionTimeMeasuremenet: "ms",
                        memoryUsageMeasurement: "MB",
                        numberOfItems: data.length,
                        cache: cache ? cache : false,
                    },
                    products: data
                }
            }))
    }
}