import * as ItemsActionCreators from "./items/actions";
import * as ItemsThunksCreators from "./items/thunks";
import * as UserActionCreators from "./user/actions";
import * as UserThunksCreators from "./user/thunks";
import * as AuthUserActionsCreators from "./auth/user/actions";
import * as AuthUserThunksActionsCreators from "./auth/user/thunks";
import * as AuthTokenActionsCreators from "./auth/token/actions";
import * as AuthTokenThunksCreators from "./auth/token/thunks";
import * as ModalActionCreators from "./modal/actions";
import * as SelectListActionCreators from "./selectList/actions"

export const ActionCreators = {
  ...ItemsActionCreators,
  ...ItemsThunksCreators,
  ...ModalActionCreators,
  ...SelectListActionCreators,
  ...AuthUserActionsCreators,
  ...AuthUserThunksActionsCreators,
  ...AuthTokenActionsCreators,
  ...AuthTokenThunksCreators,
  ...UserActionCreators,
  ...UserThunksCreators,
};