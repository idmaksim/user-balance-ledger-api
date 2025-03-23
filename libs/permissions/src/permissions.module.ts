import { Global, Module } from '@nestjs/common';
import { PermissionService } from './permissions.service';
import { PermissionRepository } from './permissions.repository';
import { UsersModule } from '@app/users';
import { PERMISSION_SERVICE } from '@app/common/constants/providers.const';
import { PrismaModule } from '@app/prisma/prisma.module';

@Global()
@Module({
  controllers: [],
  providers: [
    {
      provide: PERMISSION_SERVICE,
      useClass: PermissionService,
    },
    PermissionRepository,
  ],
  exports: [PERMISSION_SERVICE],
  imports: [UsersModule, PrismaModule],
})
export class PermissionModule {}
