import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MovieEntity } from 'src/movie/entities/movie.entity'
import { MovieService } from 'src/movie/movie.service'
import { ReviewEntity } from './entities/review.entity'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { ActorEntity } from 'src/actor/entities/actor.entity'

@Module({
	imports: [TypeOrmModule.forFeature([ReviewEntity, MovieEntity, ActorEntity])],
	controllers: [ReviewController],
	providers: [ReviewService, MovieService]
})
export class ReviewModule {}
