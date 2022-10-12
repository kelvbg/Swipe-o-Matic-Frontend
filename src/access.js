import axios from 'axios'
var axios = require("axios").default;
var options = {
  method: 'POST',
  url: 'https://idms-web-ws.oit.duke.edu/idm-ws/user/findByIdentifiers',
  params: {
    identifierAttribute: 'USR_UDF_DUKECARDNBR',
    attributes: 'USR_LOGIN,USR_UDF_UID,USR_UDF_DISPLAYNAME'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Y29sYWJfc3dpcGVfc3ZjOnhJMUgjM1FwIXArTURBZXlpRj1TNSNrKw=='
  },  
  data: {identifiers: ';6033005990080031?,;682177723531781?,;682177723533551?'}
};
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});