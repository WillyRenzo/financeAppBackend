import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsBoolean } from "class-validator";

export class CreateExpenseDto {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsUUID()
  accountId: string;
  account: any;

  @ApiProperty()
  @IsBoolean()
  isRevenue: boolean;

  @ApiProperty()
  @IsBoolean()
  isExpense: boolean;
}
