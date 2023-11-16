import React from "react";
import { useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";

const Selector = ({ functionName, id }) => {
  const selectedValue = useAppSelector((state: RootState) =>
    functionName(state, id)
  );
  return selectedValue;
};

export default Selector;
