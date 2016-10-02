import { BootstrapConceptPage } from './app.po';

describe('bootstrap-concept App', function() {
  let page: BootstrapConceptPage;

  beforeEach(() => {
    page = new BootstrapConceptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
