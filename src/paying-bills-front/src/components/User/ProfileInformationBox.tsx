import * as React from "react";
import "./ProfileInformationBox.css"
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from "react-relay";
import { ProfileInformationBoxFragment$key } from "./__generated__/ProfileInformationBoxFragment.graphql";
import type { BillBoxFragment$key } from "../Bills/__generated__/BillBoxFragment.graphql";


// dali e okej povikuvanjeto za Bills??

    // ...BillFragment
    // activePayingBills
    //     phone

// const ProfileInformationBoxFragment = graphql`
//   fragment ProfileInformationBoxFragment on User {
//     firstName
//     lastName
//     email
//     phone
//     thumbnailUrl
//   }
// `;
type Props = {
  user: {
    readonly email: string;
    readonly firstName: string |  null;
    readonly lastName: string | null;
    readonly operators: readonly ({
        readonly name: string;
    } | null)[] | null;
    readonly phone: string | null;
    readonly thumbnailUrl: string | null;
} | null
};

export default function ProfileInformationBox({user} : Props ): React.ReactElement {
  // const data = useFragment(ProfileInformationBoxFragment, user);

  if (!user) return <div></div>;

  let operators: string = "";
  user.operators?.forEach(operator =>  operators = operators.concat("  ", (operator?.name?? "")))

  return <section className="vh-100 profile-box">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-10 mb-4 mb-lg-0">
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center text-white">
                { user.thumbnailUrl && <img src={user.thumbnailUrl}
                  alt="Avatar" className="img-fluid my-5 avatar" />}
                {/* <h5>{data.firstName} {data.lastName}</h5> */}
                <h5>{user.firstName} {user.lastName}</h5>

                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Информации за профилот</h6>
                  <hr className="mt-0 mb-4"></hr>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Е-маил</h6>
                      <p className="text-muted">{user.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Телефон</h6>
                      <p className="text-muted">{user.phone}</p>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4"></hr>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Сметки на кои се внимава</h6>
                      <p className="text-muted">{operators}</p>
                    </div>
                    {/* <div className="col-6 mb-3">
                      <h6>Сметки со поминат рок за плаќање</h6>
                      <p className="text-muted">3</p>
                    </div> */}
                  </div>
                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
