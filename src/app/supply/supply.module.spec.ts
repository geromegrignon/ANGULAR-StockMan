import { SupplyModule } from './supply.module';

describe('SupplyModule', () => {
  let supplyModule: SupplyModule;

  beforeEach(() => {
    supplyModule = new SupplyModule();
  });

  it('should create an instance', () => {
    expect(supplyModule).toBeTruthy();
  });
});
