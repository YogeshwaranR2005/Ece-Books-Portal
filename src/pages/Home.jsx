import { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

import "../styles/home.css";

function Home() {

  const [search, setSearch] = useState("");

  const filteredCourses = courses
    .filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

    const totalCourses = courses.length;

const totalBooks = courses.reduce(
  (total, course) => total + course.books.length,
  0
);

  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>📚 ECE Books Portal</h1>

          <h3>Department of Electronics and Communication Engineering</h3>

          <p>Thiagarajar College of Engineering, Madurai</p>

          <input
            type="text"
            placeholder="🔍 Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      <section className="stats">

  <div className="stat-card">
    <h2></h2>
    <h1>{totalCourses}</h1>
    <p>Courses</p>
  </div>

  <div className="stat-card">
    <h2></h2>
    <h1>{totalBooks}</h1>
    <p>Books</p>
  </div>

</section>

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
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;