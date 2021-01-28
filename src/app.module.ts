import { Module } from '@nestjs/common';
import { TopicsController } from './topics/topics.controller';
import { TopicsService } from './topics/topics.service';

@Module({
  imports: [],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class AppModule {}
