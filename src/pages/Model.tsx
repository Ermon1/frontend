import { useNavigate } from "react-router-dom";

const Model: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (category: string) => {
    console.log("catagery" + category);
    console.log(category);
    navigate(
      `/start/exam/model/${
        category.toLowerCase() === "subject" ? "subjectlist" : "yearlist"
      }`
    );
  };

  return (
    <>
      <div className="header ">
        <h1 className="header-txt">Entrance</h1>
        {/* <button
          className="px-3 py-2 cursor-pointer rounded-md border"
          onClick={() => setOpen(true)}
        >
          Add New Exam
        </button> */}
      </div>

      <div className="w-full   h-full p-8 flex gap-4 mt-10 flex-col md:flex-row  ">
        <>
          <div
            onClick={() => handleLinkClick("Subject")}
            className="bg-blue-500 flex justify-center items-center w-2/4 h-1/4 mb-2 md:mb-0 md:h-1/4 md:w-1/4 hover:bg-blue-600 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer"
          >
            Subject
          </div>

          <div
            onClick={() => handleLinkClick("Year")}
            className="bg-green-500 flex justify-center items-center w-2/4 h-1/4 mb-2 md:mb-0 md:h-1/4 md:w-1/4 hover:bg-green-600 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 mx-auto cursor-pointer"
          >
            Year
          </div>
        </>
      </div>
    </>
  );
};

export default Model;
