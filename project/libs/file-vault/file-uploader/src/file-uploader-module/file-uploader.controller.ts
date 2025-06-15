import 'multer';
import { Controller, Post, Get, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { MongoIdValidationPipe } from '@project/pipes';
import { fillDTO } from '@project/helpers';

import { UploadedFileRDO } from '../rdo/uploaded-file.rdo';
import { FileUploaderService } from './file-uploader.service';

@Controller('files')
export class FileUploaderController {
  constructor(
    private readonly fileUploaderService: FileUploaderService,
  ) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileEntity = await this.fileUploaderService.saveFile(file);
    return fillDTO(UploadedFileRDO, fileEntity.toPOJO());
  }

  @Get(':fileId')
  public async show(@Param('fileId', MongoIdValidationPipe) fileId: string) {
    const existFile = await this.fileUploaderService.getFile(fileId);
    return fillDTO(UploadedFileRDO, existFile);
  }
}