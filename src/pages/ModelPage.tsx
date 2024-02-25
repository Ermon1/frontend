import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Test from "./Test"; // Make sure the correct path to the Test component is provided

interface Exam {
  id: number;
  content: string;
  image: string | null;
  options: string[];
  answerIndex: number;
  explanation: string;
  exam: {
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
      chapters: any[];
      image_url: string | null;
    };
    createdAt: string;
    active: boolean;
  };
  questionCategory: {
    id: number;
    title: string;
    description: string;
  };
}

const question = [
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2010,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
  {
    id: 1,
    content: "What is the capital of France?",
    image: "https://example.com/france_image.jpg",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answerIndex: 1,
    explanation: "Paris is the capital of France.",
    exam: {
      id: 1,
      title: "GEOGRAPHY - 2009 - HIGH SCHOOL",
      description: "Geography exam for high school students",
      givenTime: 40,
      examYear: 2012,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 8,
        title: "CHEMISTRY",
        description: "Study of the Earth's features and inhabitants",
        chapters: ["Physical Geography", "Human Geography"],
        image_url: null,
      },
      createdAt: "2024-01-18",
      active: true,
    },
    questionCategory: {
      id: 2,
      title: "MEDIUM",
      description: "Moderately difficult questions",
    },
  },
];

const ModelPage: React.FC = () => {
  const { subject, year } = useParams<{ subject: string; year: string }>();
  const { model } = useParams<{ model: string }>();
  console.log("model in" + model);
  const [data, setFilteredData] = useState<Exam[]>([]);
  console.log(Number(year));
  useEffect(() => {
    
    const filteredAndSortedData = question
      .filter(
        (exams) =>
          exams.exam.subject.title.toLowerCase() === subject?.toLowerCase() &&
          exams.exam.examYear === Number(year)
      )
      .sort((a, b) => b.exam.examYear - a.exam.examYear);

    setFilteredData(filteredAndSortedData);
  }, [subject, year]);

  console.log(data);

  return <Test data={data} />;
};

export default ModelPage;
