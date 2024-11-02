import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const RoleBasedAccess = ({ allowedRoles, children }) => {
    const { user } = useContext(ProductContext);

    // Check if user role is allowed
    const isAllowed = user && allowedRoles.includes(user.role);

    return isAllowed ? children : null; // Render children if allowed, otherwise render nothing
};

export default RoleBasedAccess;