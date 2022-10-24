import { IsString, IsUUID, IsBoolean } from "class-validator";

export class CreateExpenseDto {
  @IsString()
  description: string;

  @IsString()
  type: string;

  @IsUUID()
  accountId: string;

  @IsBoolean()
  isRevenue: boolean;

  @IsBoolean()
  isExpense: boolean;
  account: any;
}
