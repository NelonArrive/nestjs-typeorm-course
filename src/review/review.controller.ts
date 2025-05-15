import { Body, Controller, Post } from '@nestjs/common'
import { ReviewService } from './review.service'
import { CreateReviewDto } from './dto/review.dto'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post()
	create(@Body() dto: CreateReviewDto) {
		return this.reviewService.create(dto)
	}
}
