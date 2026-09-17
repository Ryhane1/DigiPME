// src/Reviews/ReviewsList.jsx
import { useState, useEffect } from "react";
import api from "../api/axios";
import StarRating from "./StarRating";
import Pagination from "../Projects/Pagination";

function ReviewsList({ freelancerId }) {
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api
            .get(`/api/reviews/freelancer/${freelancerId}?page=${page}&size=10`)
            .then((res) => {
                setReviews(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .finally(() => setLoading(false));
    }, [freelancerId, page]);

    if (loading) return <p>Chargement des avis...</p>;
    if (reviews.length === 0) return <p>Aucun avis pour ce prestataire pour le moment.</p>;

    return (
        <div>
            <div className="dashboard-card projects-card">
                <div className="project-list">
                    {reviews.map((review) => (
                        <div className="project-row" key={review.id} style={{ gridTemplateColumns: "1fr auto" }}>
                            <div>
                                <StarRating value={review.note} readOnly size={16} />
                                <span style={{ display: "block", marginTop: 6 }}>{review.commentaire}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}

export default ReviewsList;