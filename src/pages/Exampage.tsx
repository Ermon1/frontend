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
    content: "What is the result of ∫(0 to π/2) sin(x) dx?",
    options: ["0", "1", "π", "2"],
    answerIndex: 1, // The correct answer is "1"
    explanation: "The integral of sin(x) from 0 to π/2 equals 1.",
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
    content: "What is the result of ∫(0 to π/2) sin(x) dx?",
    options: ["0", "1", "π", "2"],
    answerIndex: 1, // The correct answer is "1"
    explanation: "The integral of sin(x) from 0 to π/2 equals 1.",
    exam: {
      id: 1,
      title: "MATHEMATICS - 2022 - HIGH SCHOOL",
      description: "Mathematics exam for high school students",
      givenTime: 45,
      examYear: 2010,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 1,
        title: "MATHEMATICS",
        description: "Study of numbers, quantities, and shapes",
        chapters: ["Algebra", "Geometry", "Calculus"],
        image_url: null,
      },
      createdAt: "2022-01-15",
      active: true,
    },
    questionCategory: {
      id: 3,
      title: "HARD",
      description: "Difficult questions requiring deeper understanding",
    },
  },
  {
    id: 1,
    content: "What is the result of ∫(0 to π/2) sin(x) dx?",
    options: ["0", "1", "π", "2"],
    answerIndex: 1, // The correct answer is "1"
    explanation: "The integral of sin(x) from 0 to π/2 equals 1.",
    exam: {
      id: 1,
      title: "MATHEMATICS - 2022 - HIGH SCHOOL",
      description: "Mathematics exam for high school students",
      givenTime: 45,
      examYear: 2010,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 1,
        title: "MATHEMATICS",
        description: "Study of numbers, quantities, and shapes",
        chapters: ["Algebra", "Geometry", "Calculus"],
        image_url: null,
      },
      createdAt: "2022-01-15",
      active: true,
    },
    questionCategory: {
      id: 3,
      title: "HARD",
      description: "Difficult questions requiring deeper understanding",
    },
  },
  {
    id: 1,
    content: "What is the result of ∫(0 to π/2) sin(x) dx?",
    options: ["0", "1", "π", "2"],
    answerIndex: 1, // The correct answer is "1"
    explanation: "The integral of sin(x) from 0 to π/2 equals 1.",
    exam: {
      id: 1,
      title: "MATHEMATICS - 2022 - HIGH SCHOOL",
      description: "Mathematics exam for high school students",
      givenTime: 45,
      examYear: 2010,
      examCategory: {
        id: 3,
        title: "HIGH SCHOOL",
        description: "Exams for high school students",
      },
      subject: {
        id: 1,
        title: "MATHEMATICS",
        description: "Study of numbers, quantities, and shapes",
        chapters: ["Algebra", "Geometry", "Calculus"],
        image_url: null,
      },
      createdAt: "2022-01-15",
      active: true,
    },
    questionCategory: {
      id: 3,
      title: "HARD",
      description: "Difficult questions requiring deeper understanding",
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

const Exampage: React.FC = () => {
  const { subject, year } = useParams<{ subject: string; year: string }>();
  console.log("in exam page " + subject);
  console.log("in exam page" + year);

  const [data, setFilteredData] = useState<Exam[]>([]);
  console.log(Number(year));
  useEffect(() => {
    // Filter the data based on subject and year
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

export default Exampage;
