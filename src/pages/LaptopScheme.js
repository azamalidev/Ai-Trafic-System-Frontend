import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const LaptopScheme = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed background to white and text color to dark gray */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Assan Laptop Scheme - Privacy Policy for RMHP (Roshan Mustaqbil Hunarmand Program)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase">Securing Your Information</div> {/* Changed to gray for better contrast */}
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                The Assan Laptop Scheme by the Roshan Mustaqbil Hunarmand Program (RMHP) is a transformative initiative aimed at empowering students and trainees with the tools they need to thrive in today’s digital age. This scheme is specifically designed to bridge the digital divide, enhance learning experiences, and enable participants to achieve academic and professional success.
              </p>
            </div>

            {/* Program Objectives */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">1. Program Objectives</h3> {/* Adjusted green for section titles */}
              <p>
                The Assan Laptop Scheme seeks to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide affordable and accessible laptops to eligible students and trainees.</li>
                <li>Encourage digital literacy and skill development.</li>
                <li>Foster opportunities for online learning, remote work, and research.</li>
                <li>Support participants in completing their RMHP coursework and projects efficiently.</li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">2. Eligibility Criteria</h3> {/* Adjusted green for section titles */}
              <p>
                Applicants must meet the following criteria to qualify for the Assan Laptop Scheme:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be an active participant or graduate of the RMHP training programs.</li>
                <li>Demonstrate consistent performance in assignments, quizzes, and projects.</li>
                <li>Exhibit a genuine need for a laptop to support academic or vocational training.</li>
                <li>Provide supporting documents, such as:
                  <ul className="list-circle pl-6 space-y-2">
                    <li>National Identity Card (NIC) or equivalent.</li>
                    <li>Enrollment verification from RMHP.</li>
                    <li>Income certificate or proof of financial need (if applicable).</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Features of the Scheme */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">3. Features of the Scheme</h3> {/* Adjusted green for section titles */}
              <p>
                The Assan Laptop Scheme offers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subsidized Pricing: Laptops are offered at significantly reduced costs to ensure affordability.</li>
                <li>Flexible Payment Plans: Participants can opt for installment-based payments for added convenience.</li>
                <li>High-Quality Devices: The laptops provided are preloaded with essential software and tools required for RMHP coursework.</li>
                <li>Technical Support: Comprehensive after-sales services, including maintenance and troubleshooting, are available.</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">4. Application Process</h3> {/* Adjusted green for section titles */}
              <p>
                Participants interested in the Assan Laptop Scheme must follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Submit an Application: Complete the RMHP Laptop Scheme Application Form, available online or at RMHP offices.</li>
                <li>Provide Documentation: Attach the necessary supporting documents, including proof of enrollment and financial need.</li>
                <li>Application Review: The RMHP team will evaluate applications based on eligibility criteria and document verification.</li>
                <li>Approval Notification: Successful applicants will be informed via email or phone and provided with further instructions.</li>
                <li>Laptop Distribution: Approved participants can collect their laptops from designated RMHP centers or opt for home delivery (charges may apply).</li>
              </ol>
            </div>

            {/* Benefits of the Scheme */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">5. Benefits of the Assan Laptop Scheme</h3> {/* Adjusted green for section titles */}
              <p>
                The Assan Laptop Scheme aims to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enhanced Learning: Access to digital tools enables participants to engage in online courses, research, and collaborative projects.</li>
                <li>Skill Development: Laptops support the development of IT, programming, and design skills.</li>
                <li>Career Opportunities: Equipping participants with laptops helps them explore remote work and freelancing opportunities.</li>
                <li>Increased Productivity: Participants can efficiently complete RMHP assignments, quizzes, and projects.</li>
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">6. Terms and Conditions</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Laptops provided under the scheme are non-transferable and intended solely for the beneficiary’s use.</li>
                <li>Participants must agree to the terms outlined in the Laptop Scheme Agreement Form.</li>
                <li>RMHP reserves the right to reclaim the laptop in cases of misuse or breach of agreement.</li>
                <li>Participants must notify RMHP immediately in case of loss, theft, or damage to the laptop.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">7. Contact Information</h3> {/* Adjusted green for section titles */}
              <p>
                For more details about the Assan Laptop Scheme, reach out to:
              </p>
              <ul className="list-none text-lg mt-2">
                <li><strong>Email:</strong> laptopscheme@rmhp.org</li>
                <li><strong>Phone:</strong> +92-XXX-XXXXXXX</li>
                <li><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LaptopScheme;
