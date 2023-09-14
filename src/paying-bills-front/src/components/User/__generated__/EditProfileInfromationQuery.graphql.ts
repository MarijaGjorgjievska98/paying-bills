/**
 * @generated SignedSource<<4b075806728a45e8b81d4721a8ba3c48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditProfileInfromationQuery$variables = {};
export type EditProfileInfromationQuery$data = {
  readonly user: {
    readonly email: string;
    readonly firstName: string;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": 1
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
    "storageKey": "user(id:1)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProfileInfromationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EditProfileInfromationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ee26c22cbd35e231d71cb37a29c1e136",
    "id": null,
    "metadata": {},
    "name": "EditProfileInfromationQuery",
    "operationKind": "query",
    "text": "query EditProfileInfromationQuery {\n  user(id: 1) {\n    id\n    firstName\n    lastName\n    email\n    phone\n    thumbnailUrl\n    operators {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3703329b8e23a13d884934bc12728967";

export default node;
