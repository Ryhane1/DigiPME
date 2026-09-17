import { useParams } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ReviewsList from "./ReviewsList";

function FreelancerReviewsPage() {
    const { freelancerId } = useParams();
    const role = localStorage.getItem("role");

    return (
        <DashboardLayout role={role}>
            <div className="dashboard-header">
                <div>
                    <h1>Avis du prestataire</h1>
                    <p>Retours des entreprises ayant travaillé avec ce freelancer.</p>
                </div>
            </div>

            <ReviewsList freelancerId={freelancerId} />
        </DashboardLayout>
    );
}

export default FreelancerReviewsPage;