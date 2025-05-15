import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MovieEntity } from 'src/movie/entities/movie.entity'
import { MovieService } from 'src/movie/movie.service'
import { ReviewEntity } from './entities/review.entity'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'

@Module({
	imports: [TypeOrmModule.forFeature([ReviewEntity, MovieEntity])],
	controllers: [ReviewController],
	providers: [ReviewService, MovieService]
})
export class ReviewModule {}
