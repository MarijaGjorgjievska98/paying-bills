import * as React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Select, {MultiValue, ActionMeta} from 'react-select';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, useMutation } from "react-relay";
import type { EditProfileInfromationQuery as  EditProfileInfromationQueryType} from "./__generated__/EditProfileInfromationQuery.graphql";
import "./EditProfileInfromation.css"
import { useState } from "react";
import { useAuthContext } from "./UserContex";

const EditProfileInfromationQuery = graphql`
query EditProfileInfromationQuery(
  $email: String!
) {
  userByEmail(email: $email) {
    id
    firstName
    lastName
    email
    phone
    thumbnailUrl
    operators
      {
        id
        name
      }
    }
  }
`;

// operators: - kako da go dadodam

const EditProfileInfromationMutation = graphql`
  mutation EditProfileInfromationMutation(
    $id: ID!,
    $firstName: String!,
    $lastName: String,
    $email: String!,
    $phone: String,
    $thumbnailUrl: String,
    $operators: [ID]
  ) {
    editUser(
      id: $id,
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      phone: $phone
      thumbnailUrl: $thumbnailUrl, 
      operators: $operators,
    ) { 
        id
        firstName
        lastName
        email
        phone
        thumbnailUrl
    }
  }
`;

type OperatorOption = {
  value: string;
  label: string;
} | null;

export default function EditProfileInfromation(): React.ReactElement {
  const { email } = useAuthContext();
  const navigate = useNavigate();
  // @ts-ignore
  const data = useLazyLoadQuery<EditProfileInfromationQueryType>(EditProfileInfromationQuery, {email});
  const [firstName, setFirstName] = useState(data.userByEmail?.firstName);
  const [lastName, setLastName] = useState(data.userByEmail?.lastName);
  const [emailEdit, setEmailEdit] = useState(data.userByEmail?.email);
  const [phone, setPhone] = useState(data.userByEmail?.phone);
  const [thumbnailUrl, setThumbnailUrl] = useState(data.userByEmail?.thumbnailUrl);
  const [operators, setOperators] = useState(data.userByEmail?.operators?.map(operator => {return operator && {value: operator.id, label: operator.name};}));
  const [commitMutation, isMutationInFlight] = useMutation(EditProfileInfromationMutation);
  const options: OperatorOption[] = [
    { value: '1', label: 'A1' },
    { value: '3', label: 'Водовод' }
  ]
  const defaultValue : { value: string, label: string} [] = []

  function editProfile()
  {
    // const 
    if(data.userByEmail)
    {
      commitMutation({
        variables: {
          id: data.userByEmail.id , 
          firstName,
          lastName,
          email: emailEdit,
          phone,
          thumbnailUrl,
          operators: operators?.map(operator => operator?.value)
        },
      })

    }
    navigate('/');
  }

  const handleOperatorChange = (newValue: MultiValue<OperatorOption>, actionMeta: ActionMeta<OperatorOption>) => {
    if (Array.isArray(newValue)) {
      setOperators(newValue);
    } else {
      setOperators([]);
    }
  };

  console.log(data.userByEmail);
  data.userByEmail?.operators?.forEach(operator => operator && defaultValue.push({ value: operator.id, label: operator.name }));

  return <section className="edit-profile">
  <div className="container py-5">

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            { data.userByEmail?.thumbnailUrl  ?
            (<img src={data.userByEmail.thumbnailUrl} alt="Аватар" className="rounded-circle img-fluid avatar" ></img>)
            : (<div  className="rounded-circle empty-avatar"><p className="text-white">Слика</p></div>)}
            

            <h5 className="my-3">{data.userByEmail?.firstName} {data.userByEmail?.lastName}</h5>
            <p className="text-muted mb-1">{data.userByEmail?.email}</p>
            <p className="text-muted mb-4">{data.userByEmail?.phone}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 edit">
        <div className="card mb-4">
          <div className="card-header text-left">Промени ги информациите на профилов</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Име</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете го вашето име" defaultValue={ data.userByEmail?.firstName? data.userByEmail.firstName : ''} onChange={e=> setFirstName(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Презиме</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете го вашето презиме" defaultValue={ data.userByEmail?.lastName? data.userByEmail.lastName : ''} onChange={e=> setLastName(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Мејл</p>
              </div>
              <div className="col-sm-9">
              <input type="email" placeholder="Внесете го вашиот e-mail" defaultValue={ data.userByEmail?.email? data.userByEmail.email : ''} onChange={e=> setEmailEdit(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Телефонки број</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете го вашиот телефонски број" defaultValue={ data.userByEmail?.phone? data.userByEmail.phone : ''} onChange={e=> setPhone(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Слика</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете url од вашата слика" defaultValue={ data.userByEmail?.thumbnailUrl? data.userByEmail.thumbnailUrl : ''} onChange={e=> setThumbnailUrl(e.target.value)}></input>
              </div>
            </div>

            <hr></hr>
            <div className="row">
              <div className="col-sm-3 operators">
                <p className="mb-0">Оператори : </p>
              </div>
              <div className="col-sm-9">
              <Select
              placeholder="Избери ги операторите кои што ќе ги следиме" 
              isMulti
              defaultValue={defaultValue}
              value={operators} 
              options={options}
              onChange={handleOperatorChange} />
              </div>
            </div>

            <div className="row mt-4 mb-1 pr-2">
              <div className="col d-flex justify-content-flex-end">
                <button type="button" className="btn btn-success" onClick={editProfile}>Промени податоци</button>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
}
