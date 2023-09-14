/**
 * @generated SignedSource<<225efbb5cc0f7c54b8deb46a339ced5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BillBoxPayBillMutation$variables = {
  id: string;
};
export type BillBoxPayBillMutation$data = {
  readonly payBill: {
    readonly id: string;
    readonly paid: boolean;
  } | null;
};
export type BillBoxPayBillMutation = {
  response: BillBoxPayBillMutation$data;
  variables: BillBoxPayBillMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Bill",
    "kind": "LinkedField",
    "name": "payBill",
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
        "name": "paid",
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
    "name": "BillBoxPayBillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BillBoxPayBillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8a4b7cabd23c4c25d5119277bc6f2cde",
    "id": null,
    "metadata": {},
    "name": "BillBoxPayBillMutation",
    "operationKind": "mutation",
    "text": "mutation BillBoxPayBillMutation(\n  $id: ID!\n) {\n  payBill(id: $id) {\n    id\n    paid\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d4a262f2772c82a5775c14ad0bbed49";

export default node;
