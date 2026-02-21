import React from "react";
import PolicyLayout from "../components/PolicyLayout";

const Privacy = () => {
    return (
        <PolicyLayout title="Privacy Policy" lastUpdated="February 20, 2026">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, enroll in a course, or communicate with us.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, and to process your transactions.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this policy.</p>

            <h2>4. Security</h2>
            <p>We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access.</p>
        </PolicyLayout>
    );
};

export default Privacy;
