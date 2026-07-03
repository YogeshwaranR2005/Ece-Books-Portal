import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function Course() {

    const { id } = useParams();

    const course = courses.find(
    (c) => c.id === id
);
if (!course) {
  return (
    <div className="course-page">
      <h1>Course Not Found</h1>
      <Link to="/">← Go Home</Link>
    </div>
  );
}

    return (

        <div className="course-page">

            <Link className="back-btn" to="/">
                ← Back
            </Link>

           <div className="course-header">

    <h1>{course.name}</h1>

    <p>
        {course.books.length} {course.books.length === 1 ? "Book" : "Books"} Available
    </p>

</div>

            {

                course.books.map(book=>(

                    <div
                        key={book.id}
                        className="book-card"
                    >

                        <div>

<h2>📘 {book.title}</h2>

<p>PDF Book</p>

</div>

                        <div className="buttons">

                            <a
                                href={book.file}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button>
                                     View
                                </button>
                            </a>

                            <a
                                href={book.file}
                                download
                            >
                                <button>

                                    Download

                                </button>
                            </a>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default Course;