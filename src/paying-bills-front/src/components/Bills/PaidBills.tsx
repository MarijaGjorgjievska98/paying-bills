import * as React from "react";
import graphql from 'babel-plugin-relay/macro';
import type { BillBoxFragment$key } from "./__generated__/BillBoxFragment.graphql";
import BillBox from "./BillBox";
import { useLazyLoadQuery } from "react-relay";
import type { PaidBillsQuery as PaidBillsQueryType } from "./__generated__/PaidBillsQuery.graphql";
import { useAuthContext } from "../User/UserContex";

// userID mi treba (userID: 1)
// plateni samo filtrirani paid: true
// treba lista da vrati
const PaidBillsQuery = graphql`
  query PaidBillsQuery {
    bills(userId: 1 , paid: true) {
      ...BillBoxFragment
    }
  }
`;

export default function PaidBills(): React.ReactElement {
  const { email, setEmail } = useAuthContext();
  // @ts-ignore
  const data = useLazyLoadQuery<PaidBillsQueryType>(PaidBillsQuery, {email});

  return <div className="paid-bills container mt-5">
    <h3 className="text-left mb-3"> Платени сметки </h3>
    <div className="bill-wrapper">
      {data.bills?.map((bill, index) => <div className="bill"><BillBox
      bill={bill as BillBoxFragment$key} /></div>)}
    </div>
  </div>
}
