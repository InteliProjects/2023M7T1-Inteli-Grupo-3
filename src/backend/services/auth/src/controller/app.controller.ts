import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CreateUserDto } from '../interface/user.create.dto';
import { CreatedUserDto } from 'src/interface/user.created.dto';
import { LoginDto } from 'src/interface/user.login.dto';
import { AuthorizedUserDto } from 'src/interface/user.authorized.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/v1/auth')
  login(@Body() loginDto: LoginDto): Promise<AuthorizedUserDto> {
    return this.appService.login(loginDto);
  }

  @Post('/api/v1/auth/signup')
  signup(@Body() createUserDto: CreateUserDto): Promise<CreatedUserDto> {
    return this.appService.signup(createUserDto);
  }

  @Get('/api/v1/health')
  health() {
    return {
      status: 'Healthy',
      description: 'The API is healthy.',
    };
  }
}
