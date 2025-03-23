import { MediaService } from '@app/media';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MediaType } from '@prisma/client';
import { fileFilter } from './helpers/file.filter';
import { MediaCreateDto } from '@app/media/dto/media.create.dto';
import { JwtAuthGuard } from '@app/common/guards/auth.guard';
import { Response } from 'express';

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get(':key')
  async findOneByKey(@Param('key') key: string, @Res() res: Response) {
    const media = await this.mediaService.findOneByKey(key);
    res.setHeader('Content-Type', 'image/jpeg');
    media.pipe(res);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        type: {
          type: 'string',
          enum: Object.values(MediaType),
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: MediaCreateDto,
  ) {
    return this.mediaService.upload(file, body.type);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.mediaService.delete(id);
  }
}
