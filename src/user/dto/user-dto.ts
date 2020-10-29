
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly phone: string;

}
