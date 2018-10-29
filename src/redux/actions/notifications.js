// @flow
import * as ACTIONS from 'constants/action_types';
import type { ToastParams } from 'types/notification';
import uuid from 'uuid/v4';

export function doToast(params: ToastParams) {
  if (!params) {
    throw Error("'params' object is required to create a toast notification");
  }

  return {
    type: ACTIONS.CREATE_TOAST,
    data: {
      id: uuid(),
      params,
    },
  };
}

export function doDismissToast() {
  return {
    type: ACTIONS.DISMISS_TOAST,
  };
}
