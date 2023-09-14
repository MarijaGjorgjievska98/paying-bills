/**
 * @generated SignedSource<<bf3bb5f5a22fc8b5b3f3bcaa8ce3ee24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditProfileInfromationFragment$data = {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string | null;
  readonly phone: string | null;
  readonly thumbnailUrl: string | null;
  readonly " $fragmentType": "EditProfileInfromationFragment";
};
export type EditProfileInfromationFragment$key = {
  readonly " $data"?: EditProfileInfromationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditProfileInfromationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProfileInfromationFragment",
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

(node as any).hash = "c3e23ea1a1feaa1bba1cf168b18da2ff";

export default node;
