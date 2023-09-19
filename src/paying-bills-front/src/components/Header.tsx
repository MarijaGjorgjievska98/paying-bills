import * as React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import type { HeaderFragment$key } from './__generated__/HeaderFragment.graphql';
import LogIn from './LogIn';
import { useAuthContext } from './User/UserContex';
import { HeaderQuery as HeaderQueryType } from './__generated__/HeaderQuery.graphql';


// const HeaderFragment = graphql`
//   fragment HeaderFragment on User {
//     firstName
//     lastName
//     thumbnailUrl
//   }
// `;
const HeaderQuery = graphql`
  query HeaderQuery(
    $email: String!
  ) {
    userByEmail(email: $email)  {
      firstName
          lastName
          thumbnailUrl
    }
  }
`;

export default function Header(): React.ReactElement {
  const { email, setEmail} = useAuthContext();
  // @ts-ignore
  const data = useLazyLoadQuery<HeaderQueryType>(HeaderQuery, {email});
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
      {email ?
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
              <NavLink  className="nav-link" to="/">
                Почетна
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <NavLink className="nav-link" to="/paid-bills">Платени сметки</NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              {/* <Link className="nav-link" to="#">Статистики</Link> */}
            </li>
          </ul>
          <div className="nav navbar-nav navbar-right">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {data.userByEmail?.thumbnailUrl && <img
                  src={data.userByEmail.thumbnailUrl}
                  width="40"
                  height="40"
                  className="d-inline-block align-top rounded-pill mr-2"
                  alt=""
                ></img>}
                <p className='my-auto'>{data.userByEmail?.firstName} {data.userByEmail?.lastName}</p>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="float-right text-decoration-none  d-flex dropdown-item" to="/edit-profile">Промени информации</NavLink>
                <LogIn></LogIn>
              </div>
            </li>
          </div>
        </div>
        : <LogIn></LogIn>}
    </nav>
  );
}
