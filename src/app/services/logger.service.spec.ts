import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });

  it('should be created', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a log message', inject([LoggerService], (service: LoggerService) => {
    const log = service.log('testing log');
    expect(log).toBeUndefined();
  }));
});
