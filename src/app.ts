import { RequestConfig } from 'umi';
import {RequestOptionsInit} from 'umi-request'
import {getToken} from '@/utils/index'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const request: RequestConfig = {
  timeout: 3000,
  prefix: 'http://easymarket.jasonandjay.com',
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url:string, options:RequestOptionsInit)=>{
    let token = getToken();
    let headers = options.headers;
    if (token){
      headers = {...options.headers, 'x-nideshop-token': token}
    }
    return {
      url,
      options: { ...options, headers},
    };
  }],
  responseInterceptors: [],
};


Sentry.init({
  dsn: "https://fa422e087bc84c8a8c9d4f3a549de0ff@o237032.ingest.sentry.io/5529858",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});


setInterval(()=>{
  throw new Error(`我是错误${+new Date}`)
}, 10000);
