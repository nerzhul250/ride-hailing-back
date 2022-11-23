import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [HttpModule],
    controllers: [PaymentController],
    providers: [PaymentService,PrismaService,UsersService],
})
export class PaymentModule {}
