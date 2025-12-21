import { NavLink } from "react-router";

const DashboardNavLink = ({ to, icon: Icon, label, tip }) => {
    return (
        <NavLink
            to={to}
            data-tip={tip}
            className={({ isActive }) =>
                isActive
                    && "bg-blue-600 text-white"
                    
            }
        >
            {Icon && <Icon className="text-lg" />}
            <span className="is-drawer-close:hidden">{label}</span>
        </NavLink>
    );
};

export default DashboardNavLink;
