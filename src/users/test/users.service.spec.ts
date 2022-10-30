import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../database/prismaService/prisma.service";
import { UserRepository } from "../../database/repositories/UserRepository.service";
import { UsersService } from "../users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UserRepository, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
