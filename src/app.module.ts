import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './databases/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';
import { NoCacheModule } from './no-cache/no-cache.module';
import { WithCacheModule } from './with-cache/with-cache.module';

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
    WithCacheModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
