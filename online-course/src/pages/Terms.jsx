import React from "react";
import PolicyLayout from "../components/PolicyLayout";

const Terms = () => {
    return (
        <PolicyLayout title="Terms of Service" lastUpdated="February 20, 2026">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using EduFlow, you agree to be bound by these Terms of Service.</p>

            <h2>2. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password.</p>

            <h2>3. Course Enrollment</h2>
            <p>Enrolling in a course gives you a limited, non-exclusive license to access and view the course content.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content on EduFlow is the property of EduFlow or its content suppliers and is protected by international copyright laws.</p>
        </PolicyLayout>
    );
};

export default Terms;
