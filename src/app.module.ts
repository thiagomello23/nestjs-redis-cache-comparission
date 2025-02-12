import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './databases/database.module';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
