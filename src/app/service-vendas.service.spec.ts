import { TestBed } from '@angular/core/testing';

import { ServiceVendasService } from './service-vendas.service';

describe('ServiceVendasService', () => {
  let service: ServiceVendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
