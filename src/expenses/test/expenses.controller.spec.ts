import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { ExpenseRepository } from "../../database/repositories/ExpenseRepository.service";
import { ExpensesController } from "../expenses.controller";
import { ExpensesService } from "../expenses.service";

describe("ExpensesController", () => {
  let controller: ExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensesController],
      providers: [ExpensesService, ExpenseRepository, PrismaService],
    }).compile();

    controller = module.get<ExpensesController>(ExpensesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
