import * as React from "react";
import Select, {MultiValue, ActionMeta} from 'react-select'
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, useMutation } from "react-relay";
import type { EditProfileInfromationQuery as  EditProfileInfromationQueryType} from "./__generated__/EditProfileInfromationQuery.graphql";
import "./EditProfileInfromation.css"
import { useState } from "react";

const EditProfileInfromationQuery = graphql`
query EditProfileInfromationQuery {
  user(id: 1) {
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
  const data = useLazyLoadQuery<EditProfileInfromationQueryType>(EditProfileInfromationQuery, {});
  const [firstName, setFirstName] = useState(data.user?.firstName);
  const [lastName, setLastName] = useState(data.user?.lastName);
  const [email, setEmail] = useState(data.user?.email);
  const [phone, setPhone] = useState(data.user?.phone);
  const [thumbnailUrl, setThumbnailUrl] = useState(data.user?.thumbnailUrl);
  const [operators, setOperators] = useState(data.user?.operators?.map(operator => {return operator && {value: operator.id, label: operator.name};}));
  const [commitMutation, isMutationInFlight] = useMutation(EditProfileInfromationMutation);
  const options: OperatorOption[] = [
    { value: '1', label: 'A1' },
    { value: '2', label: 'EVN' },
    { value: '3', label: 'Водовод' }
  ]
  const defaultValue : { value: string, label: string} [] = []

  function editProfile()
  {
    // const 
    if(data.user)
    {
      commitMutation({
        variables: {
          id: data.user.id , 
          firstName,
          lastName,
          email,
          phone,
          thumbnailUrl,
          operators: operators?.map(operator => operator?.value)
        },
      })

    }
  }

  const handleOperatorChange = (newValue: MultiValue<OperatorOption>, actionMeta: ActionMeta<OperatorOption>) => {
    if (Array.isArray(newValue)) {
      setOperators(newValue);
    } else {
      setOperators([]);
    }
  };

  console.log(data.user);
  data.user?.operators?.forEach(operator => operator && defaultValue.push({ value: operator.id, label: operator.name }));

  return <section className="edit-profile">
  <div className="container py-5">

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            { data.user?.thumbnailUrl  ?
            (<img src={data.user.thumbnailUrl} alt="Аватар" className="rounded-circle img-fluid avatar" ></img>)
            : (<div  className="rounded-circle empty-avatar"><p className="text-white">Слика</p></div>)}
            

            <h5 className="my-3">{data.user?.firstName} {data.user?.lastName}</h5>
            <p className="text-muted mb-1">{data.user?.email}</p>
            <p className="text-muted mb-4">{data.user?.phone}</p>
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
                <input type="text" placeholder="Внесете го вашето име" defaultValue={ data.user?.firstName? data.user.firstName : ''} onChange={e=> setFirstName(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Презиме</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете го вашето презиме" defaultValue={ data.user?.lastName? data.user.lastName : ''} onChange={e=> setLastName(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Мејл</p>
              </div>
              <div className="col-sm-9">
              <input type="email" placeholder="Внесете го вашиот e-mail" defaultValue={ data.user?.email? data.user.email : ''} onChange={e=> setEmail(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Телефонки број</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете го вашиот телефонски број" defaultValue={ data.user?.phone? data.user.phone : ''} onChange={e=> setPhone(e.target.value)}></input>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Слика</p>
              </div>
              <div className="col-sm-9">
                <input type="text" placeholder="Внесете url од вашата слика" defaultValue={ data.user?.thumbnailUrl? data.user.thumbnailUrl : ''} onChange={e=> setThumbnailUrl(e.target.value)}></input>
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
