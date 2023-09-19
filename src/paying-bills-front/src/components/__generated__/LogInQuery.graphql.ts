/**
 * @generated SignedSource<<4b6892d3a68729f563c3f2863d2ab016>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LogInQuery$variables = {};
export type LogInQuery$data = {
  readonly usersEmails: ReadonlyArray<{
    readonly email: string;
  } | null> | null;
};
export type LogInQuery = {
  response: LogInQuery$data;
  variables: LogInQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogInQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "usersEmails",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LogInQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "usersEmails",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "798b3befaafcd1bf9d707fb357342e65",
    "id": null,
    "metadata": {},
    "name": "LogInQuery",
    "operationKind": "query",
    "text": "query LogInQuery {\n  usersEmails {\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8536adfa21ac6e0bb6293f1248b3bd4f";

export default node;
