import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { CreateExpenseDto } from "./dto/CreateExpense.dto";
import { UpdateExpenseDto } from "./dto/UpdateExpense.dto";

@Controller("expenses")
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post("create")
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get("listAll")
  findAll() {
    return this.expensesService.findAll();
  }

  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.expensesService.findOne(id);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(id, updateExpenseDto);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.expensesService.remove(id);
  }
}
