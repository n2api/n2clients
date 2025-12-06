import { Client } from '../axios-client/api';
import { Configuration } from '../axios-client/configuration';

describe('Axios Client', () => {
  it('should be defined when initialized with configuration', () => {
    const configuration = new Configuration({
      accessToken: 'YOUR_ACCESS_TOKEN',
    });
    const client = new Client(configuration);
    expect(client).toBeDefined();
  });

  describe('should contain platform APIs for', () => {
    const configuration = new Configuration({
      accessToken: 'YOUR_ACCESS_TOKEN',
    });
    const client = new Client(configuration);

    it('should contain the pinterest API', () => {
      expect(client.pinterest).toBeDefined();
    });

    it('should contain the GoogleAds API', () => {
      expect(client.googleAds).toBeDefined();
    });

    it('should contain the facebook API', () => {
      expect(client.facebook).toBeDefined();
    });

    it('should contain the activeAgent API', () => {
      expect(client.activeAgent).toBeDefined();
    });

    it('should contain the theTradeDesk API', () => {
      expect(client.theTradeDesk).toBeDefined();
    });
  });
});
