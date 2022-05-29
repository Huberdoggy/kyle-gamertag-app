/* eslint-disable no-unused-vars */
import api_key from '../secrets/apiSecrets';

const my_xuid = '2533274905581087';
const xboxProfEndpoint = 'https://xapi.us/v2/profile';
export const recentActivityEndpoint = `https://xapi.us/v2/${my_xuid}/activity/recent`;

export async function runFetch(url = xboxProfEndpoint, _api_key = api_key) {
  try {
    const response = await fetch(url, {
      headers: {
        'X-AUTH': _api_key,
      },
    });
    if (!response.ok) {
      return 'response not ok';
    }

    return await response.json();
  } catch (error) {
    return 'ERROR! Something wrong in response!';
  }
}
