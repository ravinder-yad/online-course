import React from "react";
import PolicyLayout from "../components/PolicyLayout";

const Cookies = () => {
    return (
        <PolicyLayout title="Cookie Policy" lastUpdated="February 20, 2026">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our platform, to keep you logged in, and to analyze our traffic.</p>

            <h2>3. Your Choices</h2>
            <p>You can manage your cookie preferences through your browser settings. However, disabling some cookies may affect the functionality of our platform.</p>
        </PolicyLayout>
    );
};

export default Cookies;
