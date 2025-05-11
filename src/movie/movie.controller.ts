import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { MovieService } from './movie.service'
import { MovieDto } from './dto/movie.dto'

@Controller('movies')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	getAll() {
		return this.movieService.getAll()
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.movieService.getById(+id)
	}

	@Post()
	create(@Body() dto: MovieDto) {
		return this.movieService.create(dto)
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() dto: MovieDto) {
		return this.movieService.update(+id, dto)
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.movieService.delete(+id)
	}
}
