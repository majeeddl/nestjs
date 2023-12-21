import { SharedLibraryService } from '@app/shared-library';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  constructor(private readonly sharedServices: SharedLibraryService) {}

  getHello(): string {
    console.log(this.sharedServices.testLibrary());
    return 'Hello World!';
  }
}
