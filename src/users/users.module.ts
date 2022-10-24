import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserRepository } from "src/database/repositories/UserRepository.service";
import { PrismaService } from "src/database/services/prisma.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
})
export class UsersModule {}
