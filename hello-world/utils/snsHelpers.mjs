



export const parseIpFields = ( snsMessage ) => {
  let ipPairs = [];
  let addresses = snsMessage.Message.split("\r\n");

  addresses.forEach(( thisAddress ) => {
    if ( thisAddress.indexOf('|') != -1 ) {
      let parts = thisAddress.split('|');
  
      ipPairs.push({
        'ip' : parts[0].trim(),
        'amount' : parts[1].trim() 
      });
    }
    else {
      ipPairs.push({
        'ip' : thisAddress.trim()
      });
    }
  });

  return ipPairs;
}


/**
 * extract IP address / amount from SNS message 
 * @param snsMessage 
 * @returns 
 */
export const extractIpFields = ( snsMessage ) => {
  let cleanIps = [];
  let addresses = snsMessage.Message.split("\r\n");

  addresses.forEach(( thisAddress ) => {
    cleanIps.push( thisAddress.trim() );
  });

  return cleanIps;
};

export const extractIpAddresses = ( snsMessage ) => {
  let fieldPairs = [];
  let dataPairs = snsMessage.Message.split("\r\n");

  dataPairs.forEach(( thisPair ) => {
    if ( thisPair ) {
      if ( thisPair.indexOf("|") != -1 ) {
        fieldPairs.push( thisPair[0].split("|")[0].trim() )
      }
      else {
        fieldPairs.push( thisPair.trim() )
      }
    }
  });

  return fieldPairs;
};

/**
 * extreact IP address from IP Data pair
 * @param ipField 
 * @returns 
 */
export const extractIpAddressesFromIpFields = ( ipField ) => {
  let data = ipField.split("|");
  let trimmedIp = data[0].trim();

  return trimmedIp;
}
