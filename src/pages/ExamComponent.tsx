import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface Exam {
  id: number;
  title: string;
  description: string;
  givenTime: number;
  examYear: number;
  examCategory: {
    id: number;
    title: string;
    description: string;
  };
  subject: {
    id: number;
    title: string;
    description: string | null;
    chapters: any[]; // Adjust the type accordingly
    image_url: string | null;
  };
  createdAt: string;
  active: boolean;
}

const examData = [
  {
    id: 1,
    title: "MATHS - 2008 - UNIVERSITY ENTRANCE",
    description: "Exam added successfully",
    givenTime: 68,
    examYear: 2008,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
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
      description: "At this category a lot of UEE exams included ",
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
  {
    id: 3,
    title: "CHEMISTRY - 2010 - UNIVERSITY ENTRANCE",
    description: "Exam added successfully",
    givenTime: 60,
    examYear: 2010,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 1,
      title: "CHEMISTRY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: true,
  },
  {
    id: 4,
    title: "CHEMISTRY - 2010 - MODEL EXAM",
    description: "Exam added successfully",
    givenTime: 60,
    examYear: 2010,
    examCategory: {
      id: 2,
      title: "MODEL EXAM",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 1,
      title: "CHEMISTRY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: true,
  },
  {
    id: 5,
    title: "CHEMISTRY - 2012 - UNIVERSITY ENTRANCE",
    description: "It is the exam",
    givenTime: 50,
    examYear: 2012,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 1,
      title: "CHEMISTRY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 6,
    title: "SAT - 2011 - UNIVERSITY ENTRANCE",
    description: "My god it is working",
    givenTime: 70,
    examYear: 2011,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 5,
      title: "SAT",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 7,
    title: "CIVIC - 2099 - UNIVERSITY ENTRANCE",
    description: "",
    givenTime: 90,
    examYear: 2099,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 6,
      title: "CIVIC",
      description: "just do it",
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 8,
    title: "CHEMISTRY - 2011 - UNIVERSITY ENTRANCE",
    description: "",
    givenTime: 100,
    examYear: 2011,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 1,
      title: "CHEMISTRY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 9,
    title: "BIOLOGY - 2013 - UNIVERSITY ENTRANCE",
    description: "",
    givenTime: 100,
    examYear: 2013,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 4,
      title: "BIOLOGY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 10,
    title: "SAA - 2034 - AI EXAMS",
    description: "12",
    givenTime: 34,
    examYear: 2034,
    examCategory: {
      id: 5,
      title: "AI EXAMS",
      description: "AI generated",
    },
    subject: {
      id: 12,
      title: "SAA",
      description: "jej",
      chapters: [],
      image_url: null,
    },
    createdAt: "2024-01-17",
    active: false,
  },
  {
    id: 11,
    title: "CHEMISTRY - 2009 - UNIVERSITY ENTRANCE",
    description: "Ch",
    givenTime: 160,
    examYear: 2009,
    examCategory: {
      id: 1,
      title: "UNIVERSITY ENTRANCE",
      description: "At this category a lot of UEE exams included ",
    },
    subject: {
      id: 1,
      title: "CHEMISTRY",
      description: null,
      chapters: [],
      image_url: null,
    },
    createdAt: "2024",
  },
];

const ExamComponent: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  //const [examData, setExamData] = useState<Exam[]>([]);
  const [filteredData, setFilteredData] = useState<Exam[]>([]);

  // useEffect(() => {
  //
  //   setExamData([
  //
  //   ]);
  // }, []);
  const navigate = useNavigate();

  const { model } = useParams<{ model: string }>();
  const handleLinkClick = (category: string, year: number) => {
    console.log("model" + model);
    navigate(`/start/exam/${category.toLowerCase()}/${year}`);
   
  };

  useEffect(() => {
    if (!subject) return; // Check if subject exists before filtering

    const filteredAndSortedData = examData
      .filter(
        (exam) =>
          exam.subject.title.toLowerCase() === subject.toLowerCase() &&
          exam.examCategory.title === "UNIVERSITY ENTRANCE"
      )
      .sort((a, b) => b.examYear - a.examYear);

    setFilteredData(filteredAndSortedData);
  }, [examData, subject]);

  return (
    <>
      <div className="header ">
        <h1 className="header-txt  text-2xl font-bold text-shadow-md text-yellow-600">
          Subject: <span className=" font-bold">{"  " + subject}</span>
        </h1>
      </div>
      <div className="w-full    h-full p-8 flex gap-4 mt-10 flex-col md:flex-row  ">
        {filteredData.map((exam, index) => (
          <div
            key={exam.id}
            onClick={() => handleLinkClick(exam.subject.title, exam.examYear)}
            className={`bg-${
              index % 2 === 0 ? "orange" : "green"
            }-500 flex flex-col justify-center items-center w-2/4 h-1/4 mb-2 md:mb-0 md:h-1/4 md:w-2/4 hover:bg-${
              index % 2 === 0 ? "orange" : "green"
            }-600 text-white p-4 rounded-lg shadow-lg 
            transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer`}
          >
            <div className=" text-2xl font-bold">Year: {exam.examYear}</div>
            <div className="font-bold">{subject}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExamComponent;
