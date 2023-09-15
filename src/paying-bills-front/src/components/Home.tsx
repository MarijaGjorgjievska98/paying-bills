import * as React from "react";
import ProfileInformationBox from "./User/ProfileInformationBox";
import BillBox from "./Bills/BillBox";
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from "react-relay";
import Header from "./Header";
import Footer from "./Footer";
import type { HomeQuery as HomeQueryType } from "./__generated__/HomeQuery.graphql";
import type { HomeUnpaidBillsQuery as HomeUnpaidBillsQueryType } from "./__generated__/HomeUnpaidBillsQuery.graphql";
import type { HeaderFragment$key } from "./__generated__/HeaderFragment.graphql";
import type { ProfileInformationBoxFragment$key } from "./User/__generated__/ProfileInformationBoxFragment.graphql";
import type { BillBoxFragment$key } from "./Bills/__generated__/BillBoxFragment.graphql";
import "./Home.css"

const HomeQuery = graphql`
  query HomeQuery {
    user(id: 1) {
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
  const userData = useLazyLoadQuery<HomeQueryType>(HomeQuery, {});
  const billsData = useLazyLoadQuery<HomeUnpaidBillsQueryType>(HomeUnpaidBillsQuery, {});
  const user = userData.user
  const bills = billsData.bills;

  return <div className="container">
    <ProfileInformationBox user={user}></ProfileInformationBox>
    <div className="bills-to-be-paid mt-5">
      <h3 className="text-left mb-3">Сметки за плаќање</h3>
      <div className="bill-wrapper">
        {bills?.map(bill => <div className="bill"><BillBox bill={bill as BillBoxFragment$key} /></div>)}
      </div>
    </div>
  </div>

}
