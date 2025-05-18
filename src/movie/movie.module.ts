import { Module } from '@nestjs/common'
import { MovieService } from './movie.service'
import { MovieController } from './movie.controller'
import { MovieEntity } from './entities/movie.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ActorModule } from 'src/actor/actor.module'
import { ActorEntity } from 'src/actor/entities/actor.entity'

@Module({
	imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity]), ActorModule],
	controllers: [MovieController],
	providers: [MovieService]
})
export class MovieModule {}
