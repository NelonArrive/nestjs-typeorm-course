import { Module } from '@nestjs/common'
import { ActorService } from './actor.service'
import { ActorController } from './actor.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ActorEntity } from './entities/actor.entity'

@Module({
	imports: [TypeOrmModule.forFeature([ActorEntity])],
	controllers: [ActorController],
	providers: [ActorService],
	exports: [TypeOrmModule]
})
export class ActorModule {}
