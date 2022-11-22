import { Module } from '@nestjs/common';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [RideController],
  providers: [RideService, PrismaService],
})
export class RideModule {}
