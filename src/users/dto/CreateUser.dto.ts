import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  password: string;

  @IsString()
  avatar: string;

  @IsEmail()
  email: string;
}
