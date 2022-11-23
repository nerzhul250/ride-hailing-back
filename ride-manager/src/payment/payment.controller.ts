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
import { PaymentService } from './payment.service';
import { PaymentMethod, Prisma, User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { OnlyRiderGuard } from 'src/auth/guards/onlyRider.guard';
import { CreatePaymentMethodDto } from './dto/createPaymentMethod.dto';
import { CreatePaymentSourceDto } from './dto/createPaymentSource.dto';
import { ResponsePaymentSourceCreationDto } from './dto/responsePaymentSourceCreation.dto';
import { UsersService } from 'src/users/users.service';


@Controller('api/payment/')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService,
        private readonly usersService: UsersService) {}

    @UseGuards(OnlyRiderGuard)
    @UseGuards(AuthGuard('local'))
    @Post('payment-method')
    async createPaymentMethod(@Body() paymentData: CreatePaymentMethodDto): Promise<PaymentMethod> {
        //fetch user 
        let user: User = await this.usersService.findOne(paymentData.email) as User
        // Create paymentSource
        let createPaymentSourceDto:CreatePaymentSourceDto = {
            customer_email:paymentData.email,
            acceptance_token:paymentData.acceptanceToken,
            token:paymentData.token,
            type:paymentData.type
        }
        let responsePaymentSourceCreationDto: ResponsePaymentSourceCreationDto =
        await this.paymentService.requestPaymentSourceCreation(createPaymentSourceDto);
        // Create paymentMethod
        let createPaymentMethodInput: Prisma.PaymentMethodCreateInput = {
            paymentSourceId: responsePaymentSourceCreationDto.id,
            rider: {
                connect: {
                    userId: user.id
                }   
            },
            paymentMethodStatus: responsePaymentSourceCreationDto.status
        }
        return this.paymentService.createPaymentMethod(createPaymentMethodInput)
    }
}