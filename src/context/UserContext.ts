import { createContext } from "react";
import type {
  UserManagementState,
  UserManagementAction,
} from "../hooks/userManagementReducer";

export const UserContext = createContext<{
  users: UserManagementState;
  usersDispatch: React.Dispatch<UserManagementAction>;
}>({
  users: [],
  usersDispatch: () => {},
});
