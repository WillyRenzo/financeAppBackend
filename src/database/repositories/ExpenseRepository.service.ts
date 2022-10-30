import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prismaService/prisma.service";
import { Prisma } from "@prisma/client";
import { Expense } from "src/expenses/dto/Expense.dto";

@Injectable()
export class ExpenseRepository {
  constructor(private prisma: PrismaService) {}

  async expense(expenseWhereUniqueInput: Prisma.ExpenseWhereUniqueInput): Promise<Expense | null> {
    return this.prisma.expense.findUnique({
      where: expenseWhereUniqueInput,
    });
  }

  async expenses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExpenseWhereUniqueInput;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput;
  }): Promise<Expense[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.expense.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createExpense(data: Prisma.ExpenseCreateInput): Promise<Expense> {
    return this.prisma.expense.create({
      data,
    });
  }

  async updateExpense(params: {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.ExpenseUpdateInput;
  }): Promise<Expense> {
    const { where, data } = params;
    return this.prisma.expense.update({
      data,
      where,
    });
  }

  async deleteExpense(where: Prisma.ExpenseWhereUniqueInput): Promise<Expense> {
    return this.prisma.expense.delete({
      where,
    });
  }
}
