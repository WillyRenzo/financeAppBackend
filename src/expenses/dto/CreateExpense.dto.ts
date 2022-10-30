import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsBoolean, isUUID } from "class-validator";

export class CreateExpenseDto {
  @ApiProperty({ description: "Descrição da despesa" })
  @IsString()
  description: string;

  @ApiProperty({ description: "Valor da despesa" })
  @IsString()
  value: string;

  @ApiProperty({ description: "Tipo da cobrança" })
  @IsUUID()
  typeId: string;

  @ApiProperty({ description: "Conta vinculada a cobrança" })
  @IsUUID()
  accountId: string;
  account: any;

  @ApiProperty({ description: "É uma receita?" })
  @IsBoolean()
  isRevenue: boolean;

  @ApiProperty({ description: "É um débito?" })
  @IsBoolean()
  isExpense: boolean;

  creationUser: any;
  updateUser: any;
}
