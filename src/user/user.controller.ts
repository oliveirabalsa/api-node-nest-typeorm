import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Delete,
    Param,
} from '@nestjs/common';
import { UserDto } from './dto/user-dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly service: UserService
    ) { }
    @Get()
    public async get(): Promise<UserEntity[]> {
        return this.service.getUser();
    }

    @Post()
    create(@Body() User: UserDto) {
        return this.service.postUser(User);
    }

    @Put(':id')
    update(@Param() params, @Body() User: UserDto) {
        return this.service.putUser(User, params.id);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}