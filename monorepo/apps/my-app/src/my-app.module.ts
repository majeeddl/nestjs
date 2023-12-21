import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { SharedLibraryModule } from '@app/shared-library';

@Module({
  imports: [SharedLibraryModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
