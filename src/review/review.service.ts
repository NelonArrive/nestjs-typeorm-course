import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieService } from 'src/movie/movie.service'
import { Repository } from 'typeorm'
import { CreateReviewDto } from './dto/review.dto'
import { ReviewEntity } from './entities/review.entity'

@Injectable()
export class ReviewService {
	constructor(
		@InjectRepository(ReviewEntity)
		private readonly reviewRepository: Repository<ReviewEntity>,
		private readonly movieService: MovieService
	) {}

	async create(dto: CreateReviewDto): Promise<ReviewEntity> {
		const { movieId, rating, text } = dto

		const movie = await this.movieService.getById(movieId)

		const review = this.reviewRepository.create({ rating, text, movie })

		return await this.reviewRepository.save(review)
	}
}
