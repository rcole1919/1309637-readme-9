import { Module } from '@nestjs/common';

import { FileVaultConfigModule } from '@project/file-vault-config';
import { FileUploaderModule } from '@project/file-uploader';

@Module({
  imports: [FileVaultConfigModule, FileUploaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
