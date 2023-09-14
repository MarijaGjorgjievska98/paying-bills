/**
 * @generated SignedSource<<f3d354586ab723ae3f7884e64f2103b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BillBoxFragment$data = {
  readonly amount: number;
  readonly id: string;
  readonly invoiceNumber: string;
  readonly operator: {
    readonly logoUrl: string | null;
  } | null;
  readonly paid: boolean;
  readonly paymentDeadline: string;
  readonly " $fragmentType": "BillBoxFragment";
};
export type BillBoxFragment$key = {
  readonly " $data"?: BillBoxFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BillBoxFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BillBoxFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Bill",
  "abstractKey": null
};

(node as any).hash = "b623ed1817c46b659a668208a2d4c6d2";

export default node;
