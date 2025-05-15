import { Module } from '@nestjs/common'
import { MovieModule } from './movie/movie.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getTypeOrmConfig } from './config/typeorm.config'
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTypeOrmConfig,
			inject: [ConfigService]
		}),
		MovieModule,
		ReviewModule,
		ActorModule
	]
})
export class AppModule {}
