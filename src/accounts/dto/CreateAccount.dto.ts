import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  balance: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
  user: any;
}
