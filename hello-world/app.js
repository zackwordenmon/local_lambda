

// import { saveIps, runMe, anotherTest } from './client/s3.mjs';
import { dailyHandler } from './service/dailyHandler.mjs';
import { rollingHandler } from './service/rollingHandler.mjs';
import { whitelistHandler } from './service/whitelistHandler.mjs';
import { resetHandler } from './service/resetHandler.mjs';
// const { runMe } = require('./client/s3');
// require('./client/s3');


// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;



/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
export const lambdaHandler = async (event, context) => {

  switch ( event.Subject.toLowerCase() ) {
    case 'daily':
      dailyHandler( event );
    break;
    case 'rolling':
      rollingHandler( event );
    break;
    case 'whitelist':
      whitelistHandler( event )
    break;
    case 'reset':
      resetHandler( event );
    break;
  }





  // saveIps(127,2,3);
  // console.log( s3.s3 );
  // console.log( s3.runMe );
  // console.log( s3.runMe() );
  // console.log( s3.s3.runMe );
  // console.log( s3.s3.runMe() );

  // s3.s3.saveIps([1,2,3,4]);
  // runMe.runMe();
  // saveIps([1,2,3]);

    // try {
    //     // const ret = await axios(url);
    //     response = {
    //         'statusCode': 200,
    //         'body': JSON.stringify({
    //             message: 'hello world',
    //             // location: ret.data.trim()
    //         })
    //     }
    // } catch (err) {
    //     console.log(err);
    //     return err;
    // }

    return response
};
