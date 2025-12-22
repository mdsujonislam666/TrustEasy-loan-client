import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayOut from "../Layout/AuthLayOut";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Manager from "../Pages/Manager/Manager";
import LoanApplication from "../Pages/LoanApplication/LoanApplication";
import DashboardLayout from "../Layout/DashboardLayout";
import MyApplication from "../Pages/Dashboard/MyApplication/MyApplication";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import UserRoleInfo from "../Pages/Dashboard/UserRoleInfo/UserRoleInfo";
import AddLoan from "../Pages/Dashboard/AddLoan/AddLoan";
import AllLoans from "../Components/AllLoans/AllLoans";
import LoanDetails from "../Pages/Dashboard/LoanDetails/LoanDetails";
import AdminAllLoans from "../Pages/Dashboard/AllLoans/AllLoans";
import UpdateLoans from "../Pages/Dashboard/UpdateLoans/UpdateLoans";
import AllApplications from "../Pages/Dashboard/allApplications/AllApplications";
import ManageLoans from "../Pages/Dashboard/ManageLoans/ManageLoans";
import ManagerUpdateLoans from "../Pages/Dashboard/ManagerUpdateLoan/ManagerUpdateLoans";
import PendingLoans from "../Pages/Dashboard/PendingLoans/PendingLoans";
import ApprovedLoans from "../Pages/Dashboard/ApprovedLoans/ApprovedLoans";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'loan-application',
        element: <PrivateRoute><LoanApplication></LoanApplication></PrivateRoute>
      },
      {
        path: 'allLoans',
        element: <AllLoans></AllLoans>
      },
      {
        path: 'aboutUs',
        Component: AboutUs
      },
      {
        path: 'contact',
        Component: Contact
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayOut,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-application',
        Component: MyApplication
      },
      {
        path: 'payment/:applicationId',
        element: <Payment />
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'allLoanApplications',
        element: <AdminRoute><AllApplications></AllApplications></AdminRoute>
      },
      {
        path: 'all-loans',
        element: <AdminRoute><AdminAllLoans></AdminAllLoans></AdminRoute>
      },
      {
        path: 'userRole-info/:id',
        Component: UserRoleInfo
      },
      {
        path: 'add-loan',
        Component: AddLoan
      },
      {
        path: 'loan-details/:id',
        Component: LoanDetails
      },

      {
        path: 'update-loans/:id',
        Component: UpdateLoans,
      },

      {
        path: 'manageLoans',
        Component: ManageLoans
      },
      {
        path: 'update-loan/:id',
        Component: ManagerUpdateLoans,
      },
      {
        path: 'pendingLoans',
        Component: PendingLoans
      },
      {
        path: 'approvedLoans',
        Component: ApprovedLoans
      }, 
      {
        path: "myProfile",
        Component: MyProfile
      },
      {
        path: "dashboardHome",
        Component: DashboardHome
      }
    ]
  }, 
  {
    path: "/*",
    Component: ErrorPage
  }
]);