import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: '31mTq8crR1awQ1k37phHoQ',
  sdkSecret: 'RImwskUMhRVTtjQ5uXiOO3jeNocl7j4T',
  webEndpoint: 'zoom.us', // zfg use www.zoomgov.com
  topic: '',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '280443',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 1
};
