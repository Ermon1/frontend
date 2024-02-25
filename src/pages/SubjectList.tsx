import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SubjectCard from "../components/SubjectList/SubjectCard";
const subjects = [
  {
    id: 1,
    title: "CHEMISTRY",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 2,
    title: "PHYSICS",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 3,
    title: "MATHS",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 4,
    title: "BIOLOGY",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 5,
    title: "SAT",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 6,
    title: "SAT",
    description: null,
    chapters: [],
    image_url: null,
  },
  {
    id: 7,
    title: "SAT",
    description: null,
    chapters: [],
    image_url: null,
  },
];

const SubjectList: React.FC = () => {
  const navigate = useNavigate();
  const { entrance } = useParams<{ entrance: string }>();
  const handleLinkClick = (category: string) => {
    console.log("in subject list   " + entrance);
    navigate(`/start/exam/${category.toLowerCase()}`);
  };
  return (
    <>
      <div className="header ">
        <h1 className="header-txt ">Subject List</h1>
      </div>
      <div className=" w-full h-full  gap-4 mt-5 items-start justify-center mb-6 grid grid-cols-1 mr-3 md:mr-0  xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 ">
        {subjects.map((subject, index) => (
          <SubjectCard
            subject={subject}
            key={index}
            index={index}
            handleLinkClick= {handleLinkClick}
          />
        ))}
      </div>
    </>
  );
};

export default SubjectList;
