/**
 * @generated SignedSource<<8c944292716e67cac7ee6be51609e694>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditProfileInfromationMutation$variables = {
  email: string;
  firstName: string;
  id: string;
  lastName?: string | null;
  operators?: ReadonlyArray<string | null> | null;
  phone?: string | null;
  thumbnailUrl?: string | null;
};
export type EditProfileInfromationMutation$data = {
  readonly editUser: {
    readonly email: string;
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string | null;
    readonly phone: string | null;
    readonly thumbnailUrl: string | null;
  } | null;
};
export type EditProfileInfromationMutation = {
  response: EditProfileInfromationMutation$data;
  variables: EditProfileInfromationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "firstName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "operators"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "phone"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "thumbnailUrl"
},
v7 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "lastName",
        "variableName": "lastName"
      },
      {
        "kind": "Variable",
        "name": "operators",
        "variableName": "operators"
      },
      {
        "kind": "Variable",
        "name": "phone",
        "variableName": "phone"
      },
      {
        "kind": "Variable",
        "name": "thumbnailUrl",
        "variableName": "thumbnailUrl"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "editUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "thumbnailUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProfileInfromationMutation",
    "selections": (v7/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditProfileInfromationMutation",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "b601fc0f372b1abc68d8102a3ac997e9",
    "id": null,
    "metadata": {},
    "name": "EditProfileInfromationMutation",
    "operationKind": "mutation",
    "text": "mutation EditProfileInfromationMutation(\n  $id: ID!\n  $firstName: String!\n  $lastName: String\n  $email: String!\n  $phone: String\n  $thumbnailUrl: String\n  $operators: [ID]\n) {\n  editUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, thumbnailUrl: $thumbnailUrl, operators: $operators) {\n    id\n    firstName\n    lastName\n    email\n    phone\n    thumbnailUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "35c19026cb36e8095e6b735c4ff50f89";

export default node;
