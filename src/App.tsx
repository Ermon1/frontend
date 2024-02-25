import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

import SubjectList from "./pages/SubjectList";
import "./index.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Subjects, { SingleSubject } from "./pages/subject/Subjects";
import Category from "./pages/category/Category";
import SingleExam from "./pages/exams/SingleExam";
import Exams from "./pages/exams/Exams";
import SingleCategory from "./pages/category/SingleCategory";
import ExamComponent from "./pages/ExamComponent";
import Exampage from "./pages/Exampage";
import Model from "./pages/Model";
import ModelComponent from "./pages/ModelComponent";
import ModelPage from "./pages/ModelPage";
const queryClient = new QueryClient();
import ModelSubjectList from "./pages/ModelSubjectList";
import AiSubjectList from "./pages/AisubjectList";
import AiPage from "./pages/AiPage";
import SignUp from "./pages/SIgnUp";
import Profile from "./pages/Profile";
function App() {
  const Layout = () => {
    return (
      <div className="main ">
        <Navbar />
        <div className="grid grid-cols-5 gap-2">
          <div className="ml-2 overflow-y-auto  top-5 h-screen  ">
            <Menu />
          </div>
          <div className=" col-span-4 mr-4  ">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "start/",
      element: <Layout />,
      children: [
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "exams",
          element: <Exams />,
        },
        {
          path: "exams/:id",
          element: <SingleExam />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "subjects",
          element: <Subjects />,
        },
        {
          path: "subject/:id",
          element: <SingleSubject />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "examCategory/:id",
          element: <SingleCategory />,
        },

        {
          path: "exam/model",
          element: <Model />,
        },
        {
          path: "exam/entrance/subjectlist",
          element: <SubjectList />,
        },
        {
          path: "exam/model/subjectlist",
          element: <ModelSubjectList />,
        },
        {
          path: "exam/:subject",
          element: <ExamComponent />,
        },
        {
          path: "exam/model/:subject",
          element: <ModelComponent />,
        },
        {
          path: "exam/:subject/:year",
          element: <Exampage />,
        },
        {
          path: "exam/model/:subject/:year",
          element: <ModelPage />,
        },
        {
          path: "exam/ai",
          element: <AiSubjectList />,
        },
        {
          path: "exam/ai/:subject",
          element: <AiPage />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
