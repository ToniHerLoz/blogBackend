import { Controller, Post, Get, Body } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from '../interfaces/topic.interface'

@Controller('topics')
export class TopicsController {
    constructor(private topicsService: TopicsService){}

    @Post()
    async create(@Body() topic: Topic){
        this.topicsService.create(topic)
    }

    @Get()
    async findAll(): Promise<Topic[]>{
        return this.topicsService.findAll()
    }
}
