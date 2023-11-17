import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../service/app.service';
import { PrismaService } from '../service/prisma.service';
import { LoginDto } from 'src/interface/user.login.dto';
import { HttpException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AppService;
  let prisma: PrismaService;

  const mockedUser = {
    id: '689db89b-0ee5-41a2-9850-85b270c75391',
    name: 'Elias Biondo',
    email: 'contato@eliasbiondo.com',
    password: '$2b$10$.fOs.SrEhzKcg6MbOYe6dOj/cSVaxQAXR7DdOiyyJNzOZX5hpZRhu',
    telephone: '+5543996161990',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, PrismaService],
    }).compile();

    service = module.get<AppService>(AppService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  async function expectLoginToThrow(loginDto: LoginDto, expectedResponse: any) {
    try {
      await service.login(loginDto);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.getResponse()).toEqual(expectedResponse);
      return;
    }
    fail('Expected HttpException to be thrown, but it was not');
  }

  describe('login', () => {
    it('should throw a http exception when the user does not exist', async () => {
      prisma.user.findFirstOrThrow = jest
        .fn()
        .mockRejectedValueOnce(new Error('User not found'));

      const loginDto: LoginDto = {
        email: 'any@any.com',
        password: '12345678',
      };

      await expectLoginToThrow(loginDto, {
        status: 400,
        error: {
          title: 'Unable to get user with the provided e-mail.',
          description:
            "Appears that the e-mail provided doesn't belong to any user.",
        },
      });
    });

    it('should throw a http exception when the password is incorrect', async () => {
      prisma.user.findFirstOrThrow = jest
        .fn()
        .mockResolvedValueOnce(mockedUser);

      const loginDto: LoginDto = {
        email: 'contato@eliasbiondo.com',
        password: 'invalidpassword',
      };

      await expectLoginToThrow(loginDto, {
        status: 400,
        error: {
          title: 'Invalid password.',
          description: 'The password provided does not match.',
        },
      });
    });

    it('should return a valid jwt token when the user exists and the password is correct', async () => {
      prisma.user.findFirstOrThrow = jest
        .fn()
        .mockResolvedValueOnce(mockedUser);

      const loginDto: LoginDto = {
        email: 'contato@eliasbiondo.com',
        password: '12345678',
      };

      const response = await service.login(loginDto);
      const token = response.auth.token;

      const [headerEnc, payloadEnc, signature] = token.split('.');
      const header = JSON.parse(Buffer.from(headerEnc, 'base64').toString());
      const payload = JSON.parse(Buffer.from(payloadEnc, 'base64').toString());

      expect(response).toHaveProperty('auth.token');
      expect(token).toBeDefined();

      expect(header).toMatchObject({
        alg: 'HS256',
        typ: 'JWT',
      });

      expect(payload).toMatchObject({
        id: mockedUser.id,
        name: mockedUser.name,
        email: mockedUser.email,
        telephone: mockedUser.telephone,
        iat: expect.any(Number),
        exp: expect.any(Number),
      });

      expect(signature).toBeDefined();
    });
  });

  async function expectSignupToThrow(
    createUserDto: any,
    expectedResponse: any,
  ) {
    try {
      await service.signup(createUserDto);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.getResponse()).toEqual(expectedResponse);
      return;
    }
    fail('Expected HttpException to be thrown, but it was not');
  }

  describe('signup', () => {
    it('should throw a http exception when the user already exists', async () => {
      prisma.user.findMany = jest.fn().mockResolvedValueOnce([mockedUser]);

      const createUserDto = {
        name: 'Elias Biondo',
        email: 'contato@eliasbiondo.com',
        password: '12345678',
        telephone: '+5543996161990',
      };

      await expectSignupToThrow(createUserDto, {
        status: 400,
        error: {
          title: 'User already exists.',
          description: 'The e-mail provided already belongs to another user.',
        },
      });
    });

    it('should return a valid jwt token when the user is created', async () => {
      prisma.user.findMany = jest.fn().mockResolvedValueOnce([]);

      const createUserDto = {
        name: 'Elias Biondo',
        email: 'contato@eliasbiondo.com',
        password: '12345678',
        telephone: '+5543996161990',
      };

      prisma.user.create = jest.fn().mockResolvedValueOnce({
        ...mockedUser,
        auth: {
          token: 'any-token',
        },
      });

      const response = await service.signup(createUserDto);
      const token = response.auth.token;
      expect(response).toHaveProperty('auth.token');
      expect(token).toBeDefined();
    });
  });
});
