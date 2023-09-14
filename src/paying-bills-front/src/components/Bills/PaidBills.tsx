import * as React from "react";
import graphql from 'babel-plugin-relay/macro';
import type { BillBoxFragment$key } from "./__generated__/BillBoxFragment.graphql";
import BillBox from "./BillBox";
import { useLazyLoadQuery } from "react-relay";
import type { PaidBillsQuery as PaidBillsQueryType } from "./__generated__/PaidBillsQuery.graphql";

// userID mi treba (userID: 1)
// plateni samo filtrirani paid: true
// treba lista da vrati
const PaidBillsQuery = graphql`
  query PaidBillsQuery {
    bills(userId: 1, paid: true) {
      ...BillBoxFragment
    }
  }
`;

export default function PaidBills(): React.ReactElement {
  const data = useLazyLoadQuery<PaidBillsQueryType>(PaidBillsQuery, {});

  return  <div className="bills">
  {data.bills?.map(bill => <BillBox bill={bill as BillBoxFragment$key} />)}
</div>
}
