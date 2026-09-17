import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPME from "./Auth/RegisterPME";
import RegisterFreelance from "./Auth/RegisterFreelancer";
import Login from "./Auth/Login";
import Home from "./Home";
import Dashboard from "./Dashboard/Dashboard.jsx";

import ProjectsList from "./Projects/ProjectsList";
import MyProjects from "./Projects/MyProjects";
import ProjectForm from "./Projects/ProjectForm";
import ProjectDetails from "./Projects/ProjectDetails";
import MyOffers from "./Offers/MyOffers";
import ProjectOffers from "./Offers/ProjectOffers";
import FreelancersList from "./Freelancers/FreelancersList.jsx";
import FreelancerReviewsPage from "./Reviews/FreelancerReviewsPage";
import MyReviews from "./Reviews/MyReviews";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/pme" element={<RegisterPME />} />
                <Route path="/register/freelance" element={<RegisterFreelance />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/new" element={<ProjectForm />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/projects/:id/edit" element={<ProjectForm />} />
                <Route path="/my-projects" element={<MyProjects />} />
                <Route path="/my-offers" element={<MyOffers />} />
                <Route path="/projects/:projectId/offers" element={<ProjectOffers />} />
                <Route path="/my-offers" element={<MyOffers />} />
                <Route path="/projects/:projectId/offers" element={<ProjectOffers />} />
                <Route path="/freelancers" element={<FreelancersList />} />
                <Route path="/freelancers/:freelancerId/reviews" element={<FreelancerReviewsPage />} />
                <Route path="/my-reviews" element={<MyReviews />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;