import { IsInt, IsNotEmpty, Max, Min } from 'class-validator'

export class MovieDto {
	@IsNotEmpty()
	title: string

	@IsNotEmpty()
	@IsInt()
	@Min(1888)
	@Max(new Date().getFullYear())
	releaseDate: number
}
