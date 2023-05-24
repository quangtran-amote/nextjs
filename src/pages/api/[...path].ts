// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

// type Data = {
//   name: string
// }

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  // const query = req.



  // don't send cookies to API server
  // req.headers.cookie = ''
  // req.headers.accept = 'application/json, text/plain, */*;version=1'
  // req.headers['content-type'] = 'application/json'

  // req.url = '/api-cah/public/auth/permissions'

  // let url = req.url?.replace("api", "api-cah");

  // req.url = url;


  const path = req?.headers['x-invoke-path'];


  if (path) {
    req.headers['x-invoke-path'] = path.toString().replace("/api", "/api-cah");
    req.url = path.toString().replace("/api", "/api-cah");
  }

  console.log('Header:', req.headers);
  console.log('url:', req.url);


  // http://gateway.chotot.org/api-cah/public/auth/login

  proxy.web(req, res, {
    target: 'https://gateway.chotot.org',
    changeOrigin: true,
    selfHandleResponse: false,
  }, function(e) {
    console.log(8888, e);
  });

  proxy.on('error', function(e) {
    console.log(9999, e)
  });

  // res.status(200).json({name: "Get API with Path"})
}
