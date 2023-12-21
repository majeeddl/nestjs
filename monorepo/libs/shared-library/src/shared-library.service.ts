import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedLibraryService {
  testLibrary() {
    return 'This is a test library';
  }
}
