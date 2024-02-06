import { whitelistIpAddresses } from "../client/waf.mjs";
import { parseIpFields } from "../utils/snsHelpers.mjs";
import { extractIpAddresses } from "../utils/snsHelpers.mjs";

export const whitelistHandler = ( snsMessage ) => {

  console.log('whitelistHandler working...');

  // get IP addresses in message
  let ipAddresses = extractIpAddresses( snsMessage );

  // send waf update for given array of ip addresses
  whitelistIpAddresses( ipAddresses );

  console.log('whitelistHandler done.');

};