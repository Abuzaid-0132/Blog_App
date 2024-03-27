import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  // Check if currentUser exists and isAdmin is true
  if (currentUser && currentUser.isAdmin) {
    return <Outlet />;
  } else {
    // Redirect to sign-in if currentUser is null or isAdmin is false
    return <Navigate to="/sign-in" />;
  }
}
