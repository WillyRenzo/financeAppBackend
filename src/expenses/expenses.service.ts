import { Injectable } from "@nestjs/common";
import { ExpenseRepository } from "src/database/repositories/ExpenseRepository.service";
import { CreateExpenseDto } from "./dto/CreateExpense.dto";
import { Expense } from "./dto/Expense.dto";
import { UpdateExpenseDto } from "./dto/UpdateExpense.dto";

@Injectable()
export class ExpensesService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async create(data: CreateExpenseDto): Promise<Expense> {
    const createdExpense = await this.expenseRepository.createExpense(data);

    return createdExpense;
  }

  async findAll(): Promise<Expense[]> {
    const expenses = await this.expenseRepository.expenses({});

    return expenses;
  }

  async findOne(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.expense({ id });

    return expense;
  }

  async update(id: string, data: UpdateExpenseDto): Promise<Expense> {
    const updatedExpense = await this.expenseRepository.updateExpense({ where: { id }, data });

    return updatedExpense;
  }

  async remove(id: string): Promise<Expense> {
    const removedExpense = await this.expenseRepository.deleteExpense({ id });

    return removedExpense;
  }
}
