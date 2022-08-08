import { GetDomainNamePipe } from './get-domain-name.pipe';

describe('GetDomainNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetDomainNamePipe();
    expect(pipe).toBeTruthy();
  });
});
