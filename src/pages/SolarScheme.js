import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const SolarScheme = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed background to white and text color to dark gray */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Assan Solar Scheme Roshan Mustaqbil Hunarmand Program (RMHP)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase">Sustainable Energy for All</div> {/* Changed to gray for better contrast */}
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            <div className="space-y-4">
              <p>
                The Assan Solar Scheme under the Roshan Mustaqbil Hunarmand Program (RMHP) is an initiative designed to promote sustainable energy solutions and empower individuals with the tools needed to adopt and utilize solar energy. This scheme aims to make renewable energy accessible, affordable, and practical for participants, contributing to a greener and more energy-efficient future.
              </p>
            </div>

            {/* Program Objectives */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">1. Program Objectives</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide affordable solar energy solutions to participants.</li>
                <li>Encourage the use of renewable energy for sustainable development.</li>
                <li>Reduce reliance on traditional energy sources, thereby lowering energy costs.</li>
                <li>Train participants in the installation, maintenance, and use of solar energy systems.</li>
                <li>Support energy independence and environmental sustainability.</li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">2. Eligibility Criteria</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Be an active participant or graduate of RMHP training programs.</li>
                <li>Show a commitment to adopting sustainable energy solutions.</li>
                <li>Have a suitable location for the installation of solar panels or systems.</li>
                <li>Provide necessary documentation, such as:
                  <ul className="list-circle pl-6 space-y-1">
                    <li>National Identity Card (NIC) or equivalent.</li>
                    <li>Proof of residence.</li>
                    <li>Income certificate or proof of financial need (if applicable).</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Features of the Scheme */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">3. Features of the Scheme</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Affordable Solar Solutions: Subsidized rates for solar panels, inverters, and batteries.</li>
                <li>Flexible Payment Plans: Easy installment options to ensure affordability.</li>
                <li>Training Programs: Hands-on training on solar energy systems, including installation, troubleshooting, and maintenance.</li>
                <li>Technical Support: Post-installation support, including system maintenance and performance monitoring.</li>
                <li>Environment-Friendly Approach: Promoting the use of clean energy to reduce carbon footprints.</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">4. Application Process</h3> {/* Adjusted green for section titles */}
              <ol className="list-decimal pl-6 space-y-2">
                <li>Submit an Application: Complete the RMHP Solar Scheme Application Form, available online or at RMHP offices.</li>
                <li>Provide Documentation: Attach required documents, including proof of residence and income (if applicable).</li>
                <li>Site Evaluation: RMHP experts will conduct a feasibility assessment of the installation site.</li>
                <li>Approval Notification: Successful applicants will be informed via email or phone.</li>
                <li>Installation: Solar systems will be installed by RMHP-certified technicians.</li>
              </ol>
            </div>

            {/* Benefits of the Assan Solar Scheme */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">5. Benefits of the Assan Solar Scheme</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Cost Savings: Reduce electricity bills with renewable energy solutions.</li>
                <li>Energy Independence: Minimize reliance on conventional power grids.</li>
                <li>Environmental Impact: Contribute to a cleaner, greener environment.</li>
                <li>Skill Development: Gain expertise in solar energy through RMHP training programs.</li>
                <li>Long-Term Investment: Solar energy systems are durable and offer long-term value.</li>
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">6. Terms and Conditions</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Solar systems provided under the scheme are intended for personal or household use.</li>
                <li>Participants must comply with RMHP’s guidelines for system maintenance and usage.</li>
                <li>Any misuse of the provided solar systems will result in penalties, including potential removal of the system.</li>
                <li>RMHP reserves the right to modify the terms of the scheme as required.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">7. Contact Information</h3> {/* Adjusted green for section titles */}
              <p>
                For more information about the Assan Solar Scheme, please contact:
              </p>
              <ul className="list-none text-lg mt-2">
                <li><strong>Email:</strong> solarscheme@rmhp.org</li>
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

export default SolarScheme;
