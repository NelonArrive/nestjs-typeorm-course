import { MovieEntity } from 'src/movie/entities/movie.entity'
import {
	CreateDateColumn,
	UpdateDateColumn,
	Entity,
	JoinColumn,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany
} from 'typeorm'

@Entity({ name: 'actors' })
export class ActorEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ type: 'varchar', length: 100 })
	name: string

	@ManyToMany(() => MovieEntity, movie => movie.actors)
	@JoinColumn({ name: 'movie_actors', referencedColumnName: 'id' })
	movies: MovieEntity[]

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
