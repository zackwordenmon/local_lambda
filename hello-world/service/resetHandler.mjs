import { clearWafRules } from "../client/waf.mjs";

export const resetHandler = ( snsMessage ) => {

  console.log('reset handler worked');

  // send reset signal to WAF client
  clearWafRules();

};