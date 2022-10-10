import { authentication } from "./slices/authentication";
import { system } from "./slices/system";
import { errors } from "./slices/errors";
import { workspaces } from "./slices/workspaces";

const reducer = {
  authentication,
  system,
  errors,
  workspaces,
};
export default reducer;
