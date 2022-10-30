import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { UserRepository } from "../../database/repositories/UserRepository.service";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, UserRepository, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
