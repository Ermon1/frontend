import { useEffect, useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import {
  getExamById,
  getExamCategory,
  getExams,
  getSubject,
} from "../../api/APIService";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 10 },
//   // {
//   //   field: "img",
//   //   headerName: "Image",
//   //   width: 100,
//   //   renderCell: (params) => {
//   //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
//   //   },
//   // },
//   {
//     field: "title",
//     type: "string",
//     headerName: "Title",
//     width: 250,
//   },
//   {
//     field: "givenTime",
//     type: "number",
//     headerName: "Given Time",
//     width: 100,
//   },
//   {
//     field: "examYear",
//     type: "number",
//     headerName: "Exam Year",
//     width: 100,
//   },
//   {
//     field: "examCategory",
//     headerName: "Category",
//     type: "number",
//     width: 200,
//     renderCell: (params) => {
//       const category = params.row.examCategory;
//       return category ? category.title : "-";
//     },
//   },
//   {
//     field: "subject",
//     headerName: "Subject",
//     type: "number",
//     width: 200,
//     renderCell: (params) => {
//       const subject = params.row.subject;
//       return subject ? subject.title : "-";
//     },
//   },
//   {
//     field: "createdAt",
//     headerName: "Created At",
//     width: 100,
//     type: "string",
//   },
//   {
//     field: "active",
//     headerName: "Is Active",
//     width: 100,
//     type: "boolean",
//   },
//   {
//     field: "description",
//     headerName: "Desciption",
//     width: 0,
//     type: "string",
//   },
// ];
const exams = [
  {
    id: 1,
    title: "MATHS - 2008 - UNIVERSITY ENTRANCE",
    description: "Exam added successfully",
    givenTime: 68,
    examYear: 2008,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included",
    },
    subject: {
      id: 3,
      title: "MATHS",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 2,
    title: "MATHS - 2010 - UNIVERSITY ENTRANCE",
    description: "Exam added successfully",
    givenTime: 60,
    examYear: 2010,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included",
    },
    subject: {
      id: 3,
      title: "MATHS",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: true,
  },
];

function Exams() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    exams: [],
    examCategory: [],
    subject: [],
  });
  const navigate = useNavigate();

  const handleLinkClick = (category: string) => {
    navigate(`/start/exam/${category.toLowerCase()}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [exams, examCategory, subject] = await Promise.all([
        getExams(),
        getExamCategory(),
        getSubject(),
      ]);
      setData({ exams, examCategory, subject });
      setIsLoading(false);
    };
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="header ">
        <h1 className="header-txt">Exams</h1>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full ] h-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mt-10  ">
          <div
            onClick={() => handleLinkClick("model/subjectlist")}
            className="bg-blue-500 justify-center items-center w-2/3  h-2/3 lg:h-1/3 md:h-2/3  hover:bg-blue-600 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer"
          >
            Model
          </div>

          <div
            onClick={() => handleLinkClick("AI")}
            className="bg-green-500 justify-center items-center w-2/3  h-2/3 lg:h-1/3 md:h-2/3    hover:bg-green-600 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer"
          >
            AI Question
          </div>

          <div
            onClick={() => handleLinkClick("Entrance/subjectlist")}
            className="bg-orange-500  hover:bg-orange-600 w-2/3 lg:h-1/3 md:h-2/3 h-2/3 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer"
          >
            Entrance
          </div>
        </div>
      )}
    </>
  );
}

export default Exams;
