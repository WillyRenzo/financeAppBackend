import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { AccountRepository } from "../../database/repositories/AccountRepository.service";
import { UserRepository } from "../../database/repositories/UserRepository.service";
import { AccountsService } from "../accounts.service";

describe("AccountsService", () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService, AccountRepository, UserRepository, PrismaService],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
