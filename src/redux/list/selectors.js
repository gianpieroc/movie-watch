export const listSelector = (state) => state.list;

export const listTypeSelector = (state, listType) =>
  listSelector(state)[listType];

export const listTypeDataSelector = (state, listType) =>
  listTypeSelector(state, listType) && listTypeSelector(state, listType).data;

export const isLoadingListSelector = (state, listType) =>
  listTypeSelector(state, listType) &&
  listTypeSelector(state, listType).isLoading;

export const errorListSelector = (state, listType) =>
  listTypeSelector(state, listType) && listTypeSelector(state, listType).error;

export const allListsDataSelector = (state) => {
  const listReducer = listSelector(state);
  return Object.keys(listReducer).map((listType) =>
    listTypeDataSelector(state, listType)
  );
};
