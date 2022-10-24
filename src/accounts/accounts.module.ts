import { Module } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";
import { AccountRepository } from "src/database/repositories/AccountRepository.service";
import { PrismaService } from "src/database/services/prisma.service";
import { UserRepository } from "src/database/repositories/UserRepository.service";

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountRepository, UserRepository, PrismaService],
})
export class AccountsModule {}
