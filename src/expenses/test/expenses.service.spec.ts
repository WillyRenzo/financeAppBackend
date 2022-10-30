import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { ExpenseRepository } from "../../database/repositories/ExpenseRepository.service";
import { ExpensesService } from "../expenses.service";

describe("ExpensesService", () => {
  let service: ExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesService, ExpenseRepository, PrismaService],
    }).compile();

    service = module.get<ExpensesService>(ExpensesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
