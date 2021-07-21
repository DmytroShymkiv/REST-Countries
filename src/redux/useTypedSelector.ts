import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reducers/rootReducer";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useTypedSelector;
