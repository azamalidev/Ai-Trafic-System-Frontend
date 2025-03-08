import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed background to white and text color to dark gray */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Terms and Conditions for RMHP (Roshan Mustaqbil Hunarmand Program)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase">Understanding the Guidelines</div> {/* Changed to gray for better contrast */}
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            <div className="space-y-4">
              <p>
                Welcome to www.roshanmustaqbil.org, the official website for the Roshan Mustaqbil Hunarmand Program (RMHP). These Terms and Conditions govern your access to and use of this website. By accessing or using this website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use this website.
              </p>
            </div>

            {/* Program Overview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">1. Program Overview</h3> {/* Adjusted green for section titles */}
              <p>
                The Roshan Mustaqbil Hunarmand Program (RMHP) is designed to empower youth with the skills and resources needed to enhance their employability. The program offers various training opportunities, job placement assistance, and related services. The content on this website includes information about the program, available courses, and other relevant resources.
              </p>
            </div>

            {/* Eligibility and Registration */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">2. Eligibility and Registration</h3>
              <p>
                To participate in RMHP, users must meet the eligibility criteria outlined on the website. Registration is required for accessing certain services or applying for the program. By registering, you confirm that all information provided is accurate and up to date. You are responsible for maintaining the confidentiality of your account information.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">3. Changes to Terms</h3>
              <p>
                RMHP reserves the right to modify, update, or amend these Terms and Conditions at any time. Any changes will be posted on this page, and the revised Terms will take effect immediately upon posting. It is your responsibility to review these Terms periodically. Your continued use of the website after the changes are posted indicates your acceptance of the modified Terms.
              </p>
            </div>

            {/* Services and Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">4. Services and Content</h3>
              <p>
                The services provided on the www.roshanmustaqbil.org website are for informational purposes and to facilitate access to training programs and job opportunities. All content on this website is the property of RMHP or its partners and is protected by copyright and intellectual property laws. You may not copy, reproduce, or distribute any content without prior written permission from RMHP.
              </p>
            </div>

            {/* Payment and Fees */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">5. Payment and Fees</h3>
              <p>
                Certain services or programs offered by RMHP may require a fee. All fees and payment details will be clearly outlined on the relevant program or service page. Payments must be made using the payment methods specified on the website. Refund policies, if applicable, will be provided in the respective program details.
              </p>
            </div>

            {/* User Conduct */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">6. User Conduct</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Distributing malware or harmful software.</li>
                <li>Engaging in fraudulent activities.</li>
                <li>Harassing or discriminating against other users. Any violation of these rules may result in the termination of your access to the website and services.</li>
              </ul>
            </div>

            {/* Privacy and Data Protection */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">7. Privacy and Data Protection</h3>
              <p>
                RMHP respects your privacy and is committed to protecting your personal information. Any personal data you provide will be handled under our [Privacy Policy], which outlines how we collect, use, and protect your data.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">8. Third-Party Links</h3>
              <p>
                The website may contain links to external websites operated by third parties. RMHP does not endorse, control, or assume responsibility for the content, privacy practices, or services provided by these third-party sites. By accessing third-party websites through links on our site, you acknowledge and agree that RMHP is not responsible for any issues arising from your use of these external websites.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">9. Disclaimers</h3>
              <p>
                RMHP makes no guarantees or representations regarding the accuracy, reliability, or availability of the website content. We strive to keep the website updated and functional, but we do not guarantee that it will always be error-free, secure, or available. The use of this website is at your own risk.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">10. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, RMHP and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data or profits, arising from your use of the website, any third-party links, or participation in the programs offered through the site.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">11. Intellectual Property</h3>
              <p>
                All intellectual property, including logos, trademarks, graphics, and content found on www.RMHP.pk, are the property of RMHP or its affiliates. Unauthorized use of any intellectual property on this site is strictly prohibited.
              </p>
            </div>

            {/* Termination */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">12. Termination</h3>
              <p>
                RMHP reserves the right to suspend or terminate your access to the website at any time, without notice, if you violate these Terms and Conditions or engage in any behavior that disrupts the proper functioning of the website.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">13. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of [Insert Country/Region]. Any legal disputes arising from the use of this website will be subject to the jurisdiction of the courts located in [Insert Location].
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">14. Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="list-none text-lg mt-2">
                <li><strong>Email:</strong> support@roshanmustaqbil.org</li>
                <li><strong>Phone:</strong></li>
                <li><strong>Address:</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;