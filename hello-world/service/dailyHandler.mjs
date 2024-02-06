import { savePreviousDayIps } from "../client/s3.mjs";
import { extractIpAddressesFromIpFields } from "../utils/snsHelpers.mjs";
import { extractIpFields } from "../utils/snsHelpers.mjs";

export const dailyHandler = ( snsMessage ) => {

  console.log('dailyHandler working...');

  // extract IPs from SNS
  let allIpFields = extractIpFields( snsMessage );
  let allIps = [];

  allIpFields.forEach(( thisField ) => {
    allIps.push( extractIpAddressesFromIpFields( thisField ) );
  });
  
  // save 'previous days IP addresses' (TODO - we'd be getting the message today, so...?)
  savePreviousDayIps( allIpFields );

  console.log('dailyHandler done.');

};

