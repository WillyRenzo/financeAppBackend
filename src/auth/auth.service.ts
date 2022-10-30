import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { UserRepository } from "../database/repositories/UserRepository.service";

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ email: username });

    const comparedPasswords = await compare(pass, user.password);

    if (!comparedPasswords) {
      throw new BadRequestException("Invalid credentials");
    }

    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };

    const token = this.jwtService.sign(payload, { secret: process.env.SECRET_KEY as string });
    return {
      ...user,
      access_token: token,
    };
  }
}
