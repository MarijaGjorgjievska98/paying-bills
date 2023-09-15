import * as React from "react";
import graphql from 'babel-plugin-relay/macro';
import "./BillBox.css"
import type { BillBoxFragment$key } from "./__generated__/BillBoxFragment.graphql";
import { useFragment, useMutation } from "react-relay";
import moment from "moment";

const BillBoxFragment = graphql`
  fragment BillBoxFragment on Bill {
    id
    invoiceNumber
    paymentDeadline
    amount
    paid   
    operator {
      logoUrl
    }
  }
`;

const BillBoxPayBillMutation = graphql`
  mutation BillBoxPayBillMutation(
    $id: ID!,
  ) {
    payBill(
      id: $id,
    ) {
      id
      paid
    }
  }
`;

// mozebi da se dodade indikator dali izbrishena
const BillBoxDeleteBillMutation = graphql`
  mutation BillBoxDeleteBillMutation(
    $id: ID!,
  ) {
    deleteBill(
      id: $id,
    ) {
      id
    }
  }
`;

type Props = {
    bill:  BillBoxFragment$key
  };

export default function BillBox({bill} : Props): React.ReactElement {
  const data = useFragment(
    BillBoxFragment,
    bill,
  );
  const [commitPayMutation, isPayMutationInFlight] = useMutation(BillBoxPayBillMutation);
  const [commitDeleteMutation, isDeletMutationInFlight] = useMutation(BillBoxDeleteBillMutation);

  function PayBill() {
    commitPayMutation({
      variables: {
        id: data.id,
      },
    })
  }
  function DeleteBill()
  {
    commitDeleteMutation({
      variables: {
        id: data.id,
      },
    })

  }
  const todaysDate = new Date();
  const paymentDeadline = new Date(+data.paymentDeadline );

  const isOverdue : boolean =  !data.paid && todaysDate > paymentDeadline;
  return  <div className= {`bill card card-margin  ${isOverdue ? "border-danger" : ""}`}>
  <div className="card-body ">
      <div className="widget">
          <div className="widget-title-wrapper">
              <div className="widget-date-primary">
                  <img src={data.operator?.logoUrl ? data.operator?.logoUrl : ''}></img>
              </div>
              
              <div className="widget-meeting-info">
                  <span className="widget-pro-title">{data.invoiceNumber}</span>
                  <span className="widget-meeting-time">Истекува на: {paymentDeadline.toLocaleString().split(',')[0]}</span>
                  
              </div>
          </div>
          <ol className="widget-meeting-points">
              <li className="widget-meeting-item"><span>Сметката изнесува: {data.amount} денари</span></li>
          </ol>
          
          {!data.paid
          ? (<div className="widget-meeting-action">
              <button className="btn btn-sm btn-success" onClick={PayBill}>Плати</button>
          </div>)
          :(<div className="widget-meeting-action">
          <button className="btn btn-sm btn-danger" onClick={DeleteBill}>Избриши сметка</button>
      </div>)}
      </div>
  </div>
</div>
}
