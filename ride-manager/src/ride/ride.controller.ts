import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { RideService } from './ride.service';
import { Rider, Prisma } from '@prisma/client';


@Controller('api/')
export class RideController {
    constructor(private readonly rideService: RideService) {}

    @Get('riders')
    async getRiders(): Promise<Rider[]> {
        return this.rideService.riders();
    }
}