import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Users } from './users.entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service:UsersService){}

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() user: Users) {
        return this.service.createUser(user);     
    }
}
