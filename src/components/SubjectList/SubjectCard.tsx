import React from "react";

interface Subject {
  id: number;
  title: string;
  description: string | null;
  chapters: any[];
  image_url: string | null;
}

interface SubjectCardProps {
  subject: Subject;
  index: number;
  handleLinkClick: (title: string) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  index,
  handleLinkClick,
}) => {
  console.log(subject.title + "where is the subject");
  return (
    <div
      key={subject.id}
      onClick={() => handleLinkClick(subject.title)}
      className="h-full lg:w-full lg:h-1/2 md:w-2/3 cursor-pointer rounded-md lg:mb-[-125px] shadow-white shadow-sm"
    >
      <div className="">
        <div
          className={`rounded-t-md p-2 ${
            index % 3 === 0
              ? "bg-green-500 "
              : index % 3 === 2
              ? "bg-orange-500"
              : "bg-blue-500"
          }  font-extrabold`}
        >
          <h1 className="">{subject.title}</h1>
        </div>
        <div className="p-2">
          <p>{subject.description}</p>
          <p>Chapters: {subject.chapters.length}</p>
          <p>Exams: 4</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
