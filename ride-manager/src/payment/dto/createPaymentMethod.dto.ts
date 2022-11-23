
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PaymentSourceType } from '../enums/paymentSourceType.enum';

export class CreatePaymentMethodDto {
  @IsEmail()
  email: string;

  type: PaymentSourceType;

  @IsString()
  token: string;

  @IsString()
  acceptanceToken: string;
}