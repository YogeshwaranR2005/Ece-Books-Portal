import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

import "../styles/home.css";

function Home() {

  const [search, setSearch] = useState("");

 const filteredCourses = courses
  .filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="home">

        <h2>Available Courses</h2>

        <div className="course-grid">

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))
          ) : (
            <p>No course found.</p>
          )}

        </div>

      </div>
    </>
  );
}

export default Home;