/**
 * @generated SignedSource<<0db1f53cf7178910ca4bb91845692a56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LogInMutation$variables = {
  email: string;
};
export type LogInMutation$data = {
  readonly addUser: {
    readonly id: string;
  } | null;
};
export type LogInMutation = {
  response: LogInMutation$data;
  variables: LogInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
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
    "name": "addUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "LogInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "23885a9fbcb6fdfe00f5b6969d08b1cc",
    "id": null,
    "metadata": {},
    "name": "LogInMutation",
    "operationKind": "mutation",
    "text": "mutation LogInMutation(\n  $email: String!\n) {\n  addUser(email: $email) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9b14457d24acb2089be65a74c193db66";

export default node;
