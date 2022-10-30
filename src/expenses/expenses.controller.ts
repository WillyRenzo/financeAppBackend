import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { CreateExpenseDto } from "./dto/CreateExpense.dto";
import { UpdateExpenseDto } from "./dto/UpdateExpense.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("expenses")
@Controller("expenses")
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("listAll")
  findAll() {
    return this.expensesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.expensesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(id, updateExpenseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.expensesService.remove(id);
  }
}
