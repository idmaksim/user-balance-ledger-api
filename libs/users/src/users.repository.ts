import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { PrismaService } from '@app/prisma/prisma.service';
import { BaseRoleEnum } from '@app/common/constants/base-roles.enum';
import { USER_INCLUDE } from '@app/common/types/include/user.include';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOneById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: USER_INCLUDE,
    });
  }

  async updateBalance(userId: string, amount: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { balance: amount },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: USER_INCLUDE,
    });
  }

  async create(dto: UserCreateDto) {
    return this.prisma.user.create({
      data: {
        ...dto,
        role: {
          connect: {
            name: BaseRoleEnum.User,
          },
        },
      },
      include: USER_INCLUDE,
    });
  }

  async existsById(id: string) {
    const result = await this.prisma.$queryRaw`
      SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE id = ${id}
      ) as exists
    `;

    return Boolean(result[0].exists);
  }

  async existsByEmail(email: string) {
    const result = await this.prisma.$queryRaw`
      SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE email = ${email}
      ) as exists
    `;

    return Boolean(result[0].exists);
  }
}
