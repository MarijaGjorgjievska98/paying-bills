/**
 * @generated SignedSource<<d3cc1fea63c560617257ac62cc6dd894>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileInformationBoxFragment$data = {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string | null;
  readonly phone: string | null;
  readonly thumbnailUrl: string | null;
  readonly " $fragmentType": "ProfileInformationBoxFragment";
};
export type ProfileInformationBoxFragment$key = {
  readonly " $data"?: ProfileInformationBoxFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileInformationBoxFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileInformationBoxFragment",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9fd8eff681f1ac729fbf87a6e73566c8";

export default node;
