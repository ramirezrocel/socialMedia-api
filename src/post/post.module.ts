import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postProviders } from './providers/post.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [...postProviders, PostService],
})
export class PostModule {}
