
import { PaymentMethodStatus } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ResponsePaymentSourceCreationDto {
  @IsNumber()
  id:number

  status: PaymentMethodStatus
}