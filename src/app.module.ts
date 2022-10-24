import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AccountsModule } from "./accounts/accounts.module";
import { ExpensesModule } from "./expenses/expenses.module";

@Module({
  imports: [UsersModule, AccountsModule, ExpensesModule],
})
export class AppModule {}
