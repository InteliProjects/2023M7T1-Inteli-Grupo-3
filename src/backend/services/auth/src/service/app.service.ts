import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { PrismaService } from './prisma.service';
import { CreateUserDto } from '../interface/user.create.dto';
import { compareSync, hashSync } from 'bcrypt';
import { ErrorDto } from 'src/interface/error.dto';
import { CreatedUserDto } from 'src/interface/user.created.dto';
import { LoginDto } from 'src/interface/user.login.dto';
import { AuthorizedUserDto } from 'src/interface/user.authorized.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async login(loginDto: LoginDto): Promise<AuthorizedUserDto> {
    const { email, password } = loginDto;

    let user;

    try {
      user = await this.prisma.user.findFirstOrThrow({
        where: {
          email,
        },
      });
    } catch (error) {
      const userDoNotExistsError: ErrorDto = {
        status: HttpStatus.BAD_REQUEST,
        error: {
          title: 'Unable to get user with the provided e-mail.',
          description:
            "Appears that the e-mail provided doesn't belong to any user.",
        },
      };
      throw new HttpException(
        userDoNotExistsError,
        userDoNotExistsError.status,
        { cause: error },
      );
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      const error: ErrorDto = {
        status: HttpStatus.BAD_REQUEST,
        error: {
          title: 'Invalid password.',
          description: 'The password provided does not match.',
        },
      };
      throw new HttpException(error, error.status);
    }

    user.password = undefined;

    const token = sign(user, process.env.SECRET, {
      expiresIn: '1d',
    });

    const loggedUser = { ...user, auth: { token } };

    return loggedUser;
  }

  async signup(createUserDto: CreateUserDto): Promise<CreatedUserDto> {
    const { name, email, password, telephone } = createUserDto;

    const userAlreadyExists =
      (
        await this.prisma.user.findMany({
          where: {
            email,
          },
        })
      ).length > 0
        ? true
        : false;

    if (userAlreadyExists) {
      const userAlreadyExistsError: ErrorDto = {
        status: HttpStatus.BAD_REQUEST,
        error: {
          title: 'User already exists.',
          description: 'The e-mail provided already belongs to another user.',
        },
      };

      throw new HttpException(
        userAlreadyExistsError,
        userAlreadyExistsError.status,
      );
    }

    const hashedPassword = hashSync(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        telephone,
      },
    });

    user.password = undefined;

    const token = sign(user, process.env.SECRET);

    const createdUser = { ...user, auth: { token } };

    return createdUser;
  }
}
