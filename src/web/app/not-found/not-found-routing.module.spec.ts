import { NotFoundRoutingModule } from './not-found-routing.module';

describe('NotFoundRoutingModule', () => {
  let notFoundRoutingModule: NotFoundRoutingModule;

  beforeEach(() => {
    notFoundRoutingModule = new NotFoundRoutingModule();
  });

  it('should create an instance', () => {
    expect(notFoundRoutingModule).toBeTruthy();
  });
});
