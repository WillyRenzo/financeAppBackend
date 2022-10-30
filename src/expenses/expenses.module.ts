import { Module } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { ExpensesController } from "./expenses.controller";
import { ExpenseRepository } from "../database/repositories/ExpenseRepository.service";
import { PrismaService } from "../database/prismaService/prisma.service";

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpenseRepository, PrismaService],
})
export class ExpensesModule {}
