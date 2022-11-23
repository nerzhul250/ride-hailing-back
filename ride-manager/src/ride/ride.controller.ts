import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    UseGuards,
  } from '@nestjs/common';
import { RideService } from './ride.service';
import { Rider, Prisma } from '@prisma/client';
import { OnlyRiderGuard } from 'src/auth/guards/onlyRider.guard';
import { AuthGuard } from '@nestjs/passport';
import { OnlyDriverGuard } from 'src/auth/guards/onlyDriver.guard';


@Controller('api/ride/')
export class RideController {
    constructor(private readonly rideService: RideService) {}

    @Get('riders')
    async getRiders(): Promise<Rider[]> {
        return this.rideService.riders();
    }

    @UseGuards(OnlyRiderGuard)
    @UseGuards(AuthGuard('local'))
    @Post('request-ride')
    async requestRide(): Promise<string> {
        return "u rider"
    }

    @UseGuards(OnlyDriverGuard)
    @UseGuards(AuthGuard('local'))
    @Post('finish-ride')
    async finishRide(): Promise<string> {
        return "u driver"
    }
}