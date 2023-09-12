import { useMemo } from "react";

export const useSearch = (
  data,

  fields,

  searchKey
) => {
  const userFilterResult = useMemo(
    () =>
      data?.filter((element) =>
        fields.some((field) => {
          const fieldKeys = field.toString().split(".");
          let fieldValue = element[fieldKeys[0]];
          for (let i = 1; i < fieldKeys.length; i++) {
            if (fieldValue) {
              fieldValue = fieldValue[fieldKeys[i]];
            } else {
              fieldValue = undefined;
              break;
            }
          }
          return (
            fieldValue &&
            fieldValue
              .toString()
              .toLowerCase()
              .includes(searchKey.toLocaleLowerCase())
          );
        })
      ),

    [searchKey]
  );

  const result = searchKey != "" ? userFilterResult : data;

  return result;
};
