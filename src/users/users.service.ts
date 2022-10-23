import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/database/repositories/UserRepository.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly userService: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = this.userService.createUser(createUserDto);

    return {
      data: createdUser,
      message: "This action adds a new user",
    };
  }

  findAll() {
    const users = this.userService.users({});
    return {
      data: users,
      message: `This action returns all users`,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
