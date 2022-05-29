/* eslint-disable no-unused-vars */
import api_key from '../secrets/apiSecrets';

const my_xuid = '2533274905581087';
const xboxProfEndpoint = 'https://xapi.us/v2/profile';
const recentActivityEndpoint = `https://xapi.us/v2/${my_xuid}/activity/recent`;

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
export async function getAPIData() {
  console.log(api_key);
}
// const profile = await runFetch();
// let data = [];
//   for (let prop in profile) {
//     if (profile[prop] !== null) {
//       // console.log(`Key is: ${prop} val is: ${profile[prop]}`);
//       data.push(profile[prop]);
//     }
//   }
//   return data;
// }
