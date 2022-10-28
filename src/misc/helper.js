export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((fieldId) => {
        return { ...snapVal[fieldId], id: fieldId };
      })
    : [];
}
