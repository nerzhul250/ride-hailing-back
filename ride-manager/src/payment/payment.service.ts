import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentMethod, Payment, Prisma } from '@prisma/client';
import { HttpService } from '@nestjs/axios';
import { ResponsePaymentSourceCreationDto } from './dto/responsePaymentSourceCreation.dto';
import { CreatePaymentSourceDto } from './dto/createPaymentSource.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentService {
    constructor(private prisma: PrismaService,
        private readonly httpService: HttpService) {}

    async requestPaymentSourceCreation(createPaymentSourceDto:CreatePaymentSourceDto ): Promise<ResponsePaymentSourceCreationDto> {
        const { data } = await firstValueFrom(
            this.httpService.post<ResponsePaymentSourceCreationDto>(
                process.env.PAYMENT_GATEWAY_URL+'/payment_sources',createPaymentSourceDto
            )
        )
        return data
    }

    async createPaymentMethod(data: Prisma.PaymentMethodCreateInput): Promise<PaymentMethod> {
        return this.prisma.paymentMethod.create({
            data,
        })
    }
}

