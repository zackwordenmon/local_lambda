// import { getPrevioudDayIps } from '../client/s3.mjs';

import { getPrevioudDayIps } from '../client/s3.mjs';
import { updateWafRules } from '../client/waf.mjs';
import { parseIpFields } from '../utils/snsHelpers.mjs';
import { extractIpFields, extractIpAddressesFromIpFields } from '../utils/snsHelpers.mjs';

export const rollingHandler = ( snsMessage ) => {

  console.log('rollingHandler working...');

  let testMe = parseIpFields( snsMessage );
  console.log(testMe[0]);
  return;

  // get a list of previous day's ip addresses
  let oldIps = getPrevioudDayIps();

  // get current ip addresses
  let currentIpFields = extractIpFields( snsMessage );
  let currentIps = [];

  currentIpFields.forEach(( thisField ) => {
    currentIps.push( extractIpAddressesFromIpFields( thisField ) );
  });

  // combine current and previous day's IP addresses
  let combinedIps = oldIps.concat( currentIps );

  // send list of IP addresses to WAF rule client
  updateWafRules( combinedIps );

  console.log('rollingHandler done.');
};