/**
 * @generated SignedSource<<0146e0eb8549621032e6df2015a6261b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeUnpaidBillsQuery$variables = {};
export type HomeUnpaidBillsQuery$data = {
  readonly bills: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"BillBoxFragment">;
  } | null> | null;
};
export type HomeUnpaidBillsQuery = {
  response: HomeUnpaidBillsQuery$data;
  variables: HomeUnpaidBillsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "paid",
    "value": false
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
    "name": "HomeUnpaidBillsQuery",
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
        "storageKey": "bills(paid:false,userId:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeUnpaidBillsQuery",
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
        "storageKey": "bills(paid:false,userId:1)"
      }
    ]
  },
  "params": {
    "cacheID": "7cd4e43a4704c1830b29009a58ebba0f",
    "id": null,
    "metadata": {},
    "name": "HomeUnpaidBillsQuery",
    "operationKind": "query",
    "text": "query HomeUnpaidBillsQuery {\n  bills(userId: 1, paid: false) {\n    ...BillBoxFragment\n    id\n  }\n}\n\nfragment BillBoxFragment on Bill {\n  id\n  invoiceNumber\n  paymentDeadline\n  amount\n  paid\n  operator {\n    logoUrl\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f532f787c39ed0f012fc454a5d02b804";

export default node;
