import { MovieEntity } from 'src/movie/entities/movie.entity'
import {
	CreateDateColumn,
	UpdateDateColumn,
	Column,
	Entity,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name: 'reviews' })
export class ReviewEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		type: 'text'
	})
	text: string

	@Column({ type: 'decimal', precision: 5, scale: 1, default: 0.0 })
	rating: number

	@Column({ name: 'movie_id', type: 'uuid' })
	movieId: string

	@ManyToOne(() => MovieEntity, movie => movie.reviews, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'movie_id' })
	movie: MovieEntity

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
