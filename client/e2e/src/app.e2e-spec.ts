import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title in toolbar', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('publicmedia');
  });
});
