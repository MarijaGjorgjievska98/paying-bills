import * as React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useFragment } from 'react-relay';
import type { HeaderFragment$key } from './__generated__/HeaderFragment.graphql';

// const HeaderFragment = graphql`
//   fragment HeaderFragment on User {
//     firstName
//     lastName
//     thumbnailUrl
//   }
// `;

type Props = {
  user: {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string | null;
    readonly operators: readonly ({
        readonly name: string;
    } | null)[] | null;
    readonly phone: string | null;
    readonly thumbnailUrl: string | null;
} | null
};

export default function Header({ user }: Props): React.ReactElement {
  // const data = useFragment(HeaderFragment, user);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Почетна <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/paid-bills">Платени сметки</Link>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="#">Статистики</Link> */}
          </li>
        </ul>
      </div>

      <Link className="float-right text-decoration-none text-white d-flex" to="/edit-profile">
        <img
          src={user?.thumbnailUrl? user.thumbnailUrl : undefined }
          width="40"
          height="40"
          className="d-inline-block align-top rounded-pill mr-2"
          alt=""
        ></img>
        <p className='my-auto'>{user?.firstName} {user?.lastName}</p>
      </Link>
    </nav>
  );
}
