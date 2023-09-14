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

  return <div>
      <Header user={user} />
      <ProfileInformationBox user={user}></ProfileInformationBox>
      <div>
      {bills?.map(bill => <BillBox bill={bill as BillBoxFragment$key} />)}
      </div>
      <Footer></Footer>
  </div>
  
}
