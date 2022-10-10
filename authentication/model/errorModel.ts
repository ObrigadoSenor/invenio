export type ErrorUserIds =
  | "user.invalidToken"
  | "user.authenticationError"
  | "user.failedFetchUser"
  | "user.failedToRemoveUser";

export type ErrorSignInIds =
  | "signIn.userNotExists"
  | "signIn.incorrectPassword"
  | "signIn.serverError"
  | "signIn.email"
  | "signIn.password";

export type ErrorSignUpIds =
  | "signUp.failedInSavingToDb"
  | "signUp.userExists"
  | "signUp.firstName"
  | "signUp.surName"
  | "signUp.email"
  | "signUp.password";

export type AuthenticationErrorIds =
  | ErrorSignInIds
  | ErrorSignUpIds
  | ErrorUserIds;

export interface AuthenticationErrorModel {
  id: AuthenticationErrorIds;
  msg: string;
  status: number;
}
