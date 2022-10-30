import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
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
  create(@Req() req, @Body() createExpenseDto: CreateExpenseDto) {
    const session = req.user;

    createExpenseDto.creationUser = session.userId;

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
  update(@Req() req, @Param("id") id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    const session = req.user;

    updateExpenseDto.updateUser = session.userId;

    return this.expensesService.update(id, updateExpenseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.expensesService.remove(id);
  }
}
