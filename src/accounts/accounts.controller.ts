import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto } from "./dto/CreateAccount.dto";
import { UpdateAccountDto } from "./dto/UpdateAccount.dto";

@ApiTags("accounts")
@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("listAll")
  findAll() {
    return this.accountsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.accountsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.accountsService.remove(id);
  }
}
