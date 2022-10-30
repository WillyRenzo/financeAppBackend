import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { AccountRepository } from "../../database/repositories/AccountRepository.service";
import { UserRepository } from "../../database/repositories/UserRepository.service";
import { AccountsController } from "../accounts.controller";
import { AccountsService } from "../accounts.service";

describe("AccountsController", () => {
  let controller: AccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsService, , AccountRepository, UserRepository, PrismaService],
    }).compile();

    controller = module.get<AccountsController>(AccountsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
