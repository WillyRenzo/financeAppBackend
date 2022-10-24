export class CreateExpenseDto {
  description: string;
  type: string;
  accountId: string;
  isRevenue: boolean;
  isExpense: boolean;
  account: any;
}
