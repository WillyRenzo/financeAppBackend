import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto } from "./dto/CreateAccount.dto";
import { UpdateAccountDto } from "./dto/UpdateAccount.dto";

@ApiTags("accounts")
@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post("create")
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get("listAll")
  findAll() {
    return this.accountsService.findAll();
  }

  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.accountsService.findOne(id);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.accountsService.remove(id);
  }
}
