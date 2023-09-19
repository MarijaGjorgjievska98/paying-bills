/**
 * @generated SignedSource<<f392ed9f7ba10c074fd079b1a6a598f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LogInOperatorsQuery$variables = {};
export type LogInOperatorsQuery$data = {
  readonly operators: ReadonlyArray<{
    readonly email: string;
    readonly name: string;
    readonly regExForInvoce: string;
    readonly regExForamount: string;
    readonly regExForpaymentDeadline: string;
  } | null> | null;
};
export type LogInOperatorsQuery = {
  response: LogInOperatorsQuery$data;
  variables: LogInOperatorsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regExForamount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regExForInvoce",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regExForpaymentDeadline",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogInOperatorsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Operator",
        "kind": "LinkedField",
        "name": "operators",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "LogInOperatorsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Operator",
        "kind": "LinkedField",
        "name": "operators",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "cacheID": "501c349ce92ca70228c9025aff591164",
    "id": null,
    "metadata": {},
    "name": "LogInOperatorsQuery",
    "operationKind": "query",
    "text": "query LogInOperatorsQuery {\n  operators {\n    name\n    email\n    regExForamount\n    regExForInvoce\n    regExForpaymentDeadline\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "527cc703f24447bf9f9af498c8ab8a99";

export default node;
