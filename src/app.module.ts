import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AccountsModule } from "./accounts/accounts.module";
import { ExpensesModule } from "./expenses/expenses.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [UsersModule, AccountsModule, ExpensesModule, AuthModule],
})
export class AppModule {}
