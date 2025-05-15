import { ActorEntity } from 'src/actor/entities/actor.entity'
import { ReviewEntity } from 'src/review/entities/review.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

export enum Genre {
	COMEDY = 'Комедия',
	HORROR = 'Ужасы',
	FANTASY = 'Фэнтези',
	ACTION = 'Боевик',
	DRAMA = 'Драма',
	THRILLER = 'Триллер',
	SCI_FI = 'Научная фантастика',
	ROMANCE = 'Романтика',
	ADVENTURE = 'Приключения',
	ANIMATION = 'Анимация',
	DOCUMENTARY = 'Документальный',
	MYSTERY = 'Детектив',
	CRIME = 'Криминал',
	MUSICAL = 'Мюзикл',
	HISTORICAL = 'Исторический',
	FAMILY = 'Семейный',
	BIOGRAPHY = 'Биография',
	WAR = 'Военный',
	WESTERN = 'Вестерн',
	SPORT = 'Спорт',
	FILM_NOIR = 'Фильм-нуар'
}

@Entity({ name: 'movies' })
export class MovieEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		type: 'varchar',
		length: 115
	})
	title: string

	@Column({
		type: 'text',
		nullable: true
	})
	description: string

	@Column({
		name: 'release_year',
		type: 'int',
		unsigned: true
	})
	releaseYear: number

	@Column({ type: 'decimal', precision: 5, scale: 1, default: 0.0 })
	rating: number

	@Column({ name: 'is_available', type: 'boolean', default: false })
	isAvailable: boolean

	@Column({
		type: 'enum',
		enum: Genre,
		default: Genre.COMEDY
	})
	genre: string

	@OneToMany(() => ReviewEntity, review => review.movie)
	reviews: ReviewEntity[]

	@ManyToMany(() => ActorEntity, actor => actor.movies)
	@JoinTable({
		name: 'movie_actors'
	})
	actors: ActorEntity[]

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
