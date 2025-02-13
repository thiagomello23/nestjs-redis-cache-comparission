import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";

export class LoggingPerformanceInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>){
        console.log("before")
        return next
            .handle()
            .pipe(tap(() => console.log("After")))
    }
}