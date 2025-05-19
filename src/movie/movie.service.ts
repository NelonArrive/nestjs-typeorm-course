import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from './entities/movie.entity'
import { In, Repository } from 'typeorm'
import { MovieDto } from './dto/movie.dto'
import { ActorEntity } from 'src/actor/entities/actor.entity'

@Injectable()
export class MovieService {
	constructor(
		@InjectRepository(MovieEntity)
		private readonly movieRepository: Repository<MovieEntity>,
		@InjectRepository(ActorEntity)
		private readonly actorRepository: Repository<ActorEntity>
	) {}

	async getAll(): Promise<MovieEntity[]> {
		return await this.movieRepository.find({
			order: {
				createdAt: 'desc'
			}
			// take: 1
			// select: {}
		})
	}

	async getById(id: string): Promise<MovieEntity> {
		const movie = await this.movieRepository.findOne({
			where: { id },
			relations: ['actors']
		})

		if (!movie) throw new NotFoundException('Фильм не найден')

		return movie
	}

	async create(dto: MovieDto): Promise<MovieEntity> {
		const { title, releaseYear, description, genre, actorsIds } = dto

		const actors = await this.actorRepository.find({
			where: { id: In(actorsIds) }
		})

		if (!actors.length) throw new NotFoundException('Актеры не найдены')

		const movie = this.movieRepository.create({
			title,
			releaseYear,
			description,
			genre
		})

		return await this.movieRepository.save(movie)
	}

	async update(id: string, dto: MovieDto): Promise<boolean> {
		const movie = await this.getById(id)

		Object.assign(movie, dto)

		await this.movieRepository.save(movie)

		return true
	}

	async delete(id: string): Promise<string> {
		const movie = await this.getById(id)

		await this.movieRepository.remove(movie)

		return movie.id
	}
}
