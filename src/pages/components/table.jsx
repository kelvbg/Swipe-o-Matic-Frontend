import React, { Fragment, useState } from "react"
import JsonData from "../../testData/test.json"
import "../../index.css"
import Table from 'react-bootstrap/Table';
import { TableBody, TableHead } from "@mui/material";                                                                                                                 

function JsonDataDisplay(){
  const [persons, setPersons] = useState(JsonData);
  return (
    <div>
      <Table striped hover responsive>
        <caption className='caption-top'>Data from Event on MM/DD/YYYY</caption>
        <TableHead dark>
          <tr>
            <th>Duke Card Number</th>
            <th>NetID</th>
            <th>UniqueID</th>
          </tr>
        </TableHead>
        <TableBody>
        {persons.map((person) => (
            <tr>
              <td>{person.USR_UDF_DUKECARDNBR}</td>
              <td>{person.USR_UDF_UID}</td>
              <td>{person.USR_LOGIN}</td>
            </tr>
        ))}
        </TableBody>
      </Table>
    </div>
  );
};

 export default JsonDataDisplay;


//  