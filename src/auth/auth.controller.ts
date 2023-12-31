import { Body,Post, Controller, HttpStatus, Get,UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';

import { get } from 'http';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    
    @Get()
    test(){
       // console.log('tested');
        //return 'sup '
    }

    //@HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


}
