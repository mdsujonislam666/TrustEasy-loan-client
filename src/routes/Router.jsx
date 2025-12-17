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
          path: 'manager',
          element: <PrivateRoute><Manager></Manager></PrivateRoute>
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
        element: <Payment/>
      }, 
      {
        path: 'payment-success',
        Component:PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled
      },
      {
        path: 'manage-users',
        Component: ManageUsers
      },
      {
        path: 'userRole-info',
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
        path: 'all-loans',
        Component: AdminAllLoans
      },
      {
        path: 'update-loans/:id',
        Component: UpdateLoans,
      },
      {
        path: 'allLoanApplications',
        Component: AllApplications
      }, 
      {
        path: 'manageLoans',
        Component: ManageLoans
      },
      {
        path: 'update-loan/:id',
        Component: ManagerUpdateLoans,
      },
    ]
  }
]);