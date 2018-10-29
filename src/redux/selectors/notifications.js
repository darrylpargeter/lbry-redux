import { createSelector } from 'reselect';

export const selectState = (state) => state.notifications || {};

export const selectToast = createSelector(selectState, (state) => {
  if (state.toasts.length) {
    const { id, params } = state.toasts[0];
    return {
      id,
      ...params,
    };
  }

  return null;
});
