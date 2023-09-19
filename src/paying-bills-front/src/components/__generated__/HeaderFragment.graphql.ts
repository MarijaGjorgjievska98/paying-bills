/**
 * @generated SignedSource<<97c4f1794279d85f8314a09d96c30ad3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderFragment$data = {
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly thumbnailUrl: string | null;
  readonly " $fragmentType": "HeaderFragment";
};
export type HeaderFragment$key = {
  readonly " $data"?: HeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderFragment",
  "selections": [
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
      "name": "thumbnailUrl",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1f9f932e81d9d6c0748f41ecf2f94d97";

export default node;
