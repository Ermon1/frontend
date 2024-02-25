// import React from "react";
// import { Link } from "react-router-dom";

// interface BlogPost {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
// }

// const BlogPostCard: React.FC<BlogPost> = ({ id, title, date, content }) => (
//   <div key={id} className="bg-stone-800 p-4 rounded-md shadow-md">
//     <h2 className="text-xl font-bold mb-2">{title}</h2>
//     <p className="text-white mb-2">{date}</p>
//     <p className="text-white">{content}</p>
//     <Link
//       to={`/blog/${id}`}
//       className="text-blue-500 mt-4 inline-block hover:underline"
//     >
//       Read More
//     </Link>
//   </div>
// );

// const BlogPage: React.FC = () => {
//   // Dummy data for blog posts (you can replace this with your actual blog data)
//   const blogPosts: BlogPost[] = [
//     {
//       id: 1,
//       title: "The Importance of Mock Exams in Your Study Routine",
//       date: "January 15, 2023",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
//     },
//     {
//       id: 2,
//       title: "Effective Strategies for Time Management During Exams",
//       date: "February 5, 2023",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
//     },
//     // Add more blog posts as needed
//   ];

//   return (
//     <div className="mt-8 p-8">
//       <h1 className="text-3xl font-bold mb-4">Exam Web App Blog</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <BlogPostCard key={post.id} {...post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
