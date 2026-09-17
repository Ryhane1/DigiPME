import { useState, useEffect } from "react";
import api from "../api/axios";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ReviewsList from "./ReviewsList";

function MyReviews() {
    const [freelancerId, setFreelancerId] = useState(null);

    useEffect(() => {
        api.get("/api/freelancers/me").then((res) => setFreelancerId(res.data.id));
    }, []);

    return (
        <DashboardLayout role="FREELANCE">
            <div className="dashboard-header">
                <div>
                    <h1>Mes évaluations</h1>
                    <p>Ce que les PME pensent de votre travail.</p>
                </div>
            </div>

            {freelancerId && <ReviewsList freelancerId={freelancerId} />}
        </DashboardLayout>
    );
}

export default MyReviews;