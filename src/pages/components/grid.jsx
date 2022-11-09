import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { render } from '@testing-library/react';

    const renderCard = (card, index)=>{
        return(
            <MDBRow>
            <MDBCol sm='6'>
                <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle> Event from {card.title}</MDBCardTitle>
                    <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                    <MDBBtn href='#'>See Table</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        );
    };
    return <div className="grid"> {cardInfo.map(renderCard)}</div>
    export default function Grid() {
    return (
        card.info
    );
    }