
export const getCurrentGreylist = () => {
  return ['1.0.0.0', '1.0.0.1', '1.0.0.2', '1.0.0.3', '1.0.0.4', '1.0.0.5'];
};


export const updateWafRules = ( setOfIps ) => {
  console.log('waf rules updated. ' + setOfIps.length + ' IPs added. ');
};


export const clearWafRules = () => {
  console.log('waf rules cleared');
};

export const whitelistIpAddresses = ( ipAddressArray ) => {

  // retrieve IP addresses from WAF rules
  let greylistedIps = getCurrentGreylist();

  // remove ipAddresses from greylist
  let updatedGreylist = greylistedIps.filter(( thisGreylistIp ) => {
    return ipAddressArray.indexOf( thisGreylistIp ) == -1;
  });

  // send WAF update with new greylist
  updateWafRules( updatedGreylist );
}


