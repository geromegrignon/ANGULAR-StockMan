import { OrderCartModule } from './order-cart.module';

describe('OrderCartModule', () => {
  let orderCartModule: OrderCartModule;

  beforeEach(() => {
    orderCartModule = new OrderCartModule();
  });

  it('should create an instance', () => {
    expect(orderCartModule).toBeTruthy();
  });
});
