import * as React from "react";
import ProfileInformationBox from "./User/ProfileInformationBox";
import BillBox from "./Bills/BillBox";
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from "react-relay";

import type { HomeQuery as HomeQueryType } from "./__generated__/HomeQuery.graphql";
import type { HomeUnpaidBillsQuery as HomeUnpaidBillsQueryType } from "./__generated__/HomeUnpaidBillsQuery.graphql";
import type { BillBoxFragment$key } from "./Bills/__generated__/BillBoxFragment.graphql";
import "./Home.css"
import { useAuthContext } from "./User/UserContex";

const HomeQuery = graphql`
  query HomeQuery (
    $email: String!
  ) {
    userByEmail(email: $email) {
      firstName
      lastName
      email
      phone
      thumbnailUrl
      operators {
        name
      }
    }
  }
`;

const HomeUnpaidBillsQuery = graphql`
  query HomeUnpaidBillsQuery {
    bills(userId: 1, paid: false) {
      ...BillBoxFragment
    }
  }
`;

export default function Home(): React.ReactElement {
  const { email } = useAuthContext();
  // @ts-ignore
  const userData = useLazyLoadQuery<HomeQueryType>(HomeQuery, {email});
  // @ts-ignore
  const billsData = useLazyLoadQuery<HomeUnpaidBillsQueryType>(HomeUnpaidBillsQuery, {});
  const user = userData.userByEmail
  const bills = billsData.bills;

  return <div>
    {email
      ? <div className="container">
        <ProfileInformationBox user={user}></ProfileInformationBox>
        <div className="bills-to-be-paid mt-5">
          <h3 className="text-left mb-3">Сметки за плаќање</h3>
          <div className="bill-wrapper">
            {bills?.map(bill => <div className="bill"><BillBox bill={bill as BillBoxFragment$key} /></div>)}
          </div>
        </div>
      </div>
      : <div className="container mt-5">
        <h3 className="text-success">Почитуван корисник, доколку сметките за вашето домаќинство ги добивате на вашиот gmail меил тогаш можете да ја користите нашата апликација. Потребно е да се најавите со gmail и на едно место ќе имате увид за сите ваши сметки.</h3></div>
    }
  </div>

}
