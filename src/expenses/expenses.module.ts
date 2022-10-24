import { Module } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { ExpensesController } from "./expenses.controller";
import { ExpenseRepository } from "src/database/repositories/ExpenseRepository.service";
import { PrismaService } from "src/database/services/prisma.service";

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpenseRepository, PrismaService],
})
export class ExpensesModule {}
