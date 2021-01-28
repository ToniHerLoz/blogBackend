import { Injectable } from '@nestjs/common';
import { Topic } from '../interfaces/topic.interface'

@Injectable()
export class TopicsService {
    private readonly topics: Topic[] = []

    create(topic: Topic){
        this.topics.push(topic)
    }

    findAll(): Topic[]{
        return this.topics
    }

}
