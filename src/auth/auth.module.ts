import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';


@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({secret: "secret", signOptions: {expiresIn: "1d"}})],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}