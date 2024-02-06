
export const savePreviousDayIps = ( someListOfIps ) => {
  console.log('saved previous day IP addresses to S3. ' + someListOfIps.length + " saved." );
}

export const getPrevioudDayIps = () => {
  return [ '200.0.0.1', '200.0.0.2', '200.0.0.3', '200.0.0.4', '200.0.0.5', '200.0.0.6', '200.0.0.7', '200.0.0.8', '200.0.0.9' ];
}
