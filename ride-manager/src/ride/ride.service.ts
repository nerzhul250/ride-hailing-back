import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Rider, Prisma } from '@prisma/client';

@Injectable()
export class RideService {
    constructor(private prisma: PrismaService) {}

    async riders(): Promise<Rider[]> {
        return this.prisma.rider.findMany();
    }
}

