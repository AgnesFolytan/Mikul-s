import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToyModule } from './toy/toy.module';
import { KidModule } from './kid/kid.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ToyModule, KidModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
