import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import courses from "../data/courses";
import "../styles/course.css";

function Course() {

    const { id } = useParams();

    const [search, setSearch] = useState("");

    const course = courses.find((c) => c.id === id);

    const filteredBooks = course
        ? course.books.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    if (!course) {
        return (
            <div className="course-page">
                <h1>Course Not Found</h1>

                <Link to="/">
                    ← Go Home
                </Link>

            </div>
        );
    }

    return (

        <div className="course-page">

            <Link
                className="back-btn"
                to="/"
            >
                ← Back to Courses
            </Link>

            <div className="course-header">

                <h1>{course.name}</h1>

                <p>
                    📚 {course.books.length} {course.books.length === 1 ? "Book" : "Books"} Available
                </p>

                <input
                    type="text"
                    placeholder="Search books..."
                    className="book-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="books-list">

                {

                    filteredBooks.length > 0 ? (

                        filteredBooks.map(book => (

                            <div
                                key={book.id}
                                className="book-card"
                            >

                               <div className="book-info">

    <h2>📘 {book.title}</h2>

    <p>PDF Book</p>

</div>

                                <div className="buttons">

                                    <a
                                        className="action-btn"
                                        href={book.file}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View
                                    </a>

                                    <a
                                        className="action-btn"
                                        href={book.file}
                                        download
                                    >
                                        Download
                                    </a>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="no-books">

                            <h3>No books found</h3>

                            <p>Try searching with another keyword.</p>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default Course;