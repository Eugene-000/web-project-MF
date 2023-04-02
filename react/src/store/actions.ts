import * as ItemsActionCreators from "./items/actions";
import * as ItemsThunksCreators from "./items/thunks";
import * as ModalActionCreators from "./modal/actions";
import * as SelectListActionCreators from "./selectList/actions"

export const ActionCreators = {
  ...ItemsActionCreators,
  ...ItemsThunksCreators,
  ...ModalActionCreators,
  ...SelectListActionCreators,
};