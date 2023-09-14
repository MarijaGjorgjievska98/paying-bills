/**
 * @generated SignedSource<<cf6102c417c53be89eb729e0f0ce3af1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PaidBillsQuery$variables = {};
export type PaidBillsQuery$data = {
  readonly bills: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"BillBoxFragment">;
  } | null> | null;
};
export type PaidBillsQuery = {
  response: PaidBillsQuery$data;
  variables: PaidBillsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "paid",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "userId",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PaidBillsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Bill",
        "kind": "LinkedField",
        "name": "bills",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BillBoxFragment"
          }
        ],
        "storageKey": "bills(paid:true,userId:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PaidBillsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Bill",
        "kind": "LinkedField",
        "name": "bills",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "invoiceNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentDeadline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Operator",
            "kind": "LinkedField",
            "name": "operator",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoUrl",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "bills(paid:true,userId:1)"
      }
    ]
  },
  "params": {
    "cacheID": "ece0413a62ff677f304b098dee674bf4",
    "id": null,
    "metadata": {},
    "name": "PaidBillsQuery",
    "operationKind": "query",
    "text": "query PaidBillsQuery {\n  bills(userId: 1, paid: true) {\n    ...BillBoxFragment\n    id\n  }\n}\n\nfragment BillBoxFragment on Bill {\n  id\n  invoiceNumber\n  paymentDeadline\n  amount\n  paid\n  operator {\n    logoUrl\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2f7d29e886080acc29b21087630865b";

export default node;
