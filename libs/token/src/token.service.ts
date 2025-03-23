import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '@app/common/types/jwt-payload';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateAccessToken(id: string, roleId: string): Promise<string> {
    this.logger.log(`Генерация токена доступа для пользователя с ID: ${id}`);
    return this.jwtService.sign({ id, roleId });
  }

  async generateRefreshToken(id: string, roleId: string): Promise<string> {
    this.logger.log(
      `Генерация токена обновления для пользователя с ID: ${id} и ролью ID: ${roleId}`,
    );
    return this.jwtService.sign(
      { id, roleId },
      {
        secret: this.configService.get('REFRESH_SECRET'),
        expiresIn: '7d',
      },
    );
  }

  async verifyRefreshToken(token: string): Promise<JwtPayload> {
    try {
      this.logger.log(`Проверка токена обновления: ${token}`);
      return this.jwtService.verify(token, {
        secret: this.configService.get('REFRESH_SECRET'),
      });
    } catch (error) {
      this.logger.warn(`Ошибка проверки токена обновления: ${error.message}`);
      throw new UnauthorizedException();
    }
  }
}
