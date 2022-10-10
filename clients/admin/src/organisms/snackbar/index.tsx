import React from "react";
import { Snackbar as InvenioSnackbar } from "@invenio/system";
import { getSnackbarErrors } from "../../../redux/slices/errors";
import { map } from "ramda";

export const Snackbar = () => {
  const errors = getSnackbarErrors();
  return errors?.length > 0 ? (
    <InvenioSnackbar
      snacks={map(({ id, msg }) => ({ id, value: msg }), errors)}
    />
  ) : null;
};
