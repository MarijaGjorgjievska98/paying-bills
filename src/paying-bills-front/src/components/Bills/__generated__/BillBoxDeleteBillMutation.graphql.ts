/**
 * @generated SignedSource<<96602d12fdea072832af148a127b66b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BillBoxDeleteBillMutation$variables = {
  id: string;
};
export type BillBoxDeleteBillMutation$data = {
  readonly deleteBill: {
    readonly id: string;
  } | null;
};
export type BillBoxDeleteBillMutation = {
  response: BillBoxDeleteBillMutation$data;
  variables: BillBoxDeleteBillMutation$variables;
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
    "name": "deleteBill",
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
    "name": "BillBoxDeleteBillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BillBoxDeleteBillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e97f7d869601d939a36777b720d91315",
    "id": null,
    "metadata": {},
    "name": "BillBoxDeleteBillMutation",
    "operationKind": "mutation",
    "text": "mutation BillBoxDeleteBillMutation(\n  $id: ID!\n) {\n  deleteBill(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "19ed711220b7e92de8072f8a89ef6c1f";

export default node;
