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
import Profile from "./Profile/Profile";
import UsersList from "./Admin/UsersList";
import UserForm from "./Admin/UserForm";

import AuthGuard from "./guards/AuthGuard";
import AuthRedirect from "./guards/AuthRedirect";
import RoleGuard from "./guards/RoleGuard";
import AccessDeniedPage from "./guards/AccessDeniedPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/access-denied" element={<AccessDeniedPage />} />

                {/* AUTH (redirect si déjà connecté) */}
                <Route path="/register/pme" element={<AuthRedirect><RegisterPME /></AuthRedirect>} />
                <Route path="/register/freelance" element={<AuthRedirect><RegisterFreelance /></AuthRedirect>} />
                <Route path="/login" element={<AuthRedirect><Login /></AuthRedirect>} />

                {/* PROTÉGÉ (token requis) */}
                <Route element={<AuthGuard />}>
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* Accès PME uniquement */}
                    <Route element={<RoleGuard roles={["PME"]} />}>
                        <Route path="/my-projects" element={<MyProjects />} />
                        <Route path="/projects/new" element={<ProjectForm />} />
                        <Route path="/projects/:id/edit" element={<ProjectForm />} />
                        <Route path="/projects/:projectId/offers" element={<ProjectOffers />} />
                        <Route path="/freelancers" element={<FreelancersList />} />
                    </Route>

                    {/* Accès FREELANCER / PME */}
                    <Route element={<RoleGuard roles={["PME", "FREELANCER"]} />}>
                        <Route path="/projects" element={<ProjectsList />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                        <Route path="/my-offers" element={<MyOffers />} />
                    </Route>

                    {/* Profil : tous les rôles connectés */}
                    <Route path="/profile" element={<Profile />} />

                    {/* Accès ADMIN uniquement */}
                    <Route element={<RoleGuard roles={["ADMIN"]} />}>
                        <Route path="/admin/users" element={<UsersList />} />
                        <Route path="/admin/users/new" element={<UserForm />} />
                        <Route path="/admin/users/:id/edit" element={<UserForm />} />
                    </Route>

                    {/* Accès FREELANCER uniquement */}
                    <Route element={<RoleGuard roles={["FREELANCER"]} />}>
                        <Route path="/my-reviews" element={<MyReviews />} />
                        <Route path="/freelancers/:freelancerId/reviews" element={<FreelancerReviewsPage />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
