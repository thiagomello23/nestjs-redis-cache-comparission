import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './databases/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';
import { NoCacheModule } from './no-cache/no-cache.module';
import { WithCacheModule } from './with-cache/with-cache.module';
import { ProductsModule } from './products/products.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingPerformanceInterceptor } from './logging/logging-perf.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        return {
          stores: [
            new Keyv(new KeyvRedis(process.env.REDIS_URL_CONNECTION))
          ],
        };
    }}),
    NoCacheModule,
    WithCacheModule,
    ProductsModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingPerformanceInterceptor
    }
  ],
})
export class AppModule {}