import { IsString, IsUUID } from "class-validator";

export class CreateAccountDto {
  @IsString()
  balance: string;

  @IsUUID()
  userId: string;
  user: any;
}
