
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PaymentSourceType } from '../enums/paymentSourceType.enum';

export class CreatePaymentSourceDto {
  @IsEmail()
  customer_email: string;

  type: PaymentSourceType;

  @IsString()
  token: string;

  @IsString()
  acceptance_token: string;
}