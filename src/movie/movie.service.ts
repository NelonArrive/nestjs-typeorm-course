import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from './entities/movie.entity'
import { Repository } from 'typeorm'
import { MovieDto } from './dto/movie.dto'

@Injectable()
export class MovieService {
	constructor(
		@InjectRepository(MovieEntity)
		private readonly movieRepository: Repository<MovieEntity>
	) {}

	async getAll(): Promise<MovieEntity[]> {
		return await this.movieRepository.find({
			where: {
				isPublic: true
			},
			order: {
				createdAt: 'desc'
			}
			// take: 1
			// select: {}
		})
	}

	async getById(id: number): Promise<MovieEntity> {
		const movie = await this.movieRepository.findOne({
			where: { id }
		})

		if (!movie) throw new NotFoundException('Фильм не найден')

		return movie
	}

	async create(dto: MovieDto): Promise<MovieEntity> {
		const movie = this.movieRepository.create(dto)

		return await this.movieRepository.save(movie)
	}

	async update(id: number, dto: MovieDto): Promise<boolean> {
		const movie = await this.getById(id)

		Object.assign(movie, dto)

		await this.movieRepository.save(movie)

		return true
	}

	async delete(id: number): Promise<number> {
		const movie = await this.getById(id)

		await this.movieRepository.remove(movie)

		return movie.id
	}
}
