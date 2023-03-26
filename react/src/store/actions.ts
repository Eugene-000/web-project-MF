import * as ItemsActionCreators from "./items/actions";
import * as ItemsThunksCreators from "./items/thunks";
import * as ModalActionCreators from "./modal/actions";

export const ActionCreators = {
  ...ItemsActionCreators,
  ...ItemsThunksCreators,
  ...ModalActionCreators
};