/**
 * @generated SignedSource<<ab2bb4a7058d73c8519a51c667b6f2e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditProfileInfromationQuery$variables = {
  email: string;
};
export type EditProfileInfromationQuery$data = {
  readonly userByEmail: {
    readonly email: string;
    readonly firstName: string | null;
    readonly id: string;
    readonly lastName: string | null;
    readonly operators: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    } | null> | null;
    readonly phone: string | null;
    readonly thumbnailUrl: string | null;
  } | null;
};
export type EditProfileInfromationQuery = {
  response: EditProfileInfromationQuery$data;
  variables: EditProfileInfromationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "userByEmail",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Operator",
        "kind": "LinkedField",
        "name": "operators",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProfileInfromationQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditProfileInfromationQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fc59feb5881b4667f67b52ce6b1a6d78",
    "id": null,
    "metadata": {},
    "name": "EditProfileInfromationQuery",
    "operationKind": "query",
    "text": "query EditProfileInfromationQuery(\n  $email: String!\n) {\n  userByEmail(email: $email) {\n    id\n    firstName\n    lastName\n    email\n    phone\n    thumbnailUrl\n    operators {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ac669932884f6af822635f232117803";

export default node;
