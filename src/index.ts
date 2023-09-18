import { useMemo } from "react";

const deepSearch = (obj, searchKey) => {
  if (obj === null || obj === undefined) return false;
  if (typeof obj !== 'object') {
    return obj.toString().toLowerCase().includes(searchKey.toLowerCase());
  }
  return Object.values(obj).some(value => deepSearch(value, searchKey));
};

export const useSearch = (
  data,
  searchKey
) => {
  const userFilterResult = useMemo(
    () =>
      data?.filter((element) =>
        deepSearch(element, searchKey)
      ),
    [searchKey]
  );
  const result = searchKey != "" ? userFilterResult : data;
  return result;
};
