import { TestBed } from '@angular/core/testing';

import { OneSignalNotifService } from './one-signal-notif.service';

describe('OneSignalNotifService', () => {
  let service: OneSignalNotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneSignalNotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
