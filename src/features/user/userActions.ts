import {
  approveBookOwnerSuccess,
  changeOwnerStatusSuccess,
  changePasswordFailure,
  changePasswordStart,
  changePasswordSuccess,
  completeProfileSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userSlice";
import { UserService } from "./userService";
import { AppDispatch } from "../../app/store";
import { CreateUser } from "../../models/user";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());
      const response = await UserService.login(email, password);
      dispatch(loginSuccess(response));
    } catch (error: any) {
      dispatch(
        loginFailure(
          error.response ? error.response.data.error : "Unknown error"
        )
      );
      throw error;
    }
  };

export const signUpUser =
  (userData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(registerUserStart());

      const response = await UserService.registerUser(userData);

      if (response.success) {
        dispatch(registerUserSuccess(response.data));
      } else {
        dispatch(registerUserFailure(response.error || "Unknown error"));
      }
    } catch (error) {
      dispatch(registerUserFailure("Unknown error"));
    }
  };

export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(getUsersStart());
      const response = await UserService.getUsers();
      dispatch(getUsersSuccess(response));
    } catch (error) {
      dispatch(getUsersFailure(error));
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  UserService.logout();
  dispatch(logoutUser());
};

export const updateUser = (userData: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(updateUserStart());

    const response = await UserService.updateUser(userData);

    if (response.success) {
      dispatch(updateUserSuccess(response.data));
    } else {
      dispatch(updateUserFailure(response.error || "Unknown error"));
    }
  } catch (error) {
    dispatch(updateUserFailure("Unknown error"));
  }
};

export const deleteUser = (id: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(deleteUserStart());

    const response = await UserService.deleteUser(id);

    if (response.success) {
      dispatch(deleteUserSuccess(response.data));
    } else {
      dispatch(deleteUserFailure(response.error || "Unknown error"));
    }
  } catch (error) {
    dispatch(deleteUserFailure("Unknown error"));
  }
};

export const changePassword = (passwordData: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(changePasswordStart());

    const response = await UserService.changePassword(passwordData);

    if (response.success) {
      dispatch(changePasswordSuccess(response.data));
    } else {
      dispatch(changePasswordFailure(response.error || "Unknown error"));
    }
  } catch (error) {
    dispatch(changePasswordFailure("Unknown error"));
  }
};

export const completeProfile =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());
      const response = await UserService.completeProfile(data);
      dispatch(completeProfileSuccess(response));
    } catch (error: any) {
      dispatch(
        loginFailure(
          error.response ? error.response.data.error : "Unknown error"
        )
      );
      throw error;
    }
  };

  export const approveBookOwner =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());
      const response = await UserService.approveBookOwner(data);
      dispatch(approveBookOwnerSuccess(response));
    } catch (error: any) {
      dispatch(
        loginFailure(
          error.response ? error.response.data.error : "Unknown error"
        )
      );
      throw error;
    }
  };
  export const changeOwnerStatus =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());
      const response = await UserService.changeOwnerStatus(data);
      dispatch(changeOwnerStatusSuccess(response));
    } catch (error: any) {
      dispatch(
        loginFailure(
          error.response ? error.response.data.error : "Unknown error"
        )
      );
      throw error;
    }
  };