import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const SOPsPage = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed background to white and text color to dark gray */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Standard Operating Procedures (SOPs) - Roshan Mustaqbil Hunarmand Program (RMHP)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase">Ensuring Excellence and Compliance</div> {/* Changed to gray for better contrast */}
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            {/* Communication Guidelines */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">1. Communication Guidelines</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Communication is strictly limited to course-related discussions with management and trainers via text.</li>
                <li>Personal chats, especially with female members, are strictly prohibited. Violation of this rule may lead to legal action and cancellation of enrollment.</li>
                <li>In case of delayed responses to queries, students may contact the group admin directly. Repeated texting or spamming the group is not allowed.</li>
                <li>Admins are responsible for responding during official timings only, and trainers will respond within 3 to 5 working days due to their busy schedules.</li>
                <li>Direct communication with trainers on their contact numbers is prohibited. Violations may result in removal from the course and group.</li>
              </ul>
            </div>

            {/* Course-Related Discussions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">2. Course-Related Discussions</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Discussions in group chats must be limited to course-related topics only during the course duration.</li>
                <li>Students can raise queries about LMS, quizzes, assignments, projects, and certificates. Only authorized persons may respond.</li>
                <li>Students cannot answer queries or provide advice in group chats.</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">3. Code of Conduct</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage of unethical, offensive, or inappropriate language is strictly prohibited. Any violations will result in legal action without prior warning.</li>
                <li>Students must adhere to all program rules and regulations. Non-compliance may result in penalties or fines.</li>
              </ul>
            </div>

            {/* Intellectual Property and Confidentiality */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">4. Intellectual Property and Confidentiality</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>RMHP lectures, materials, and resources are strictly for enrolled students. Unauthorized use, sharing, or reproduction of these materials is prohibited.</li>
                <li>Students found guilty of unlawful activities, including misuse of RMHP materials, may be fined a minimum of Rs. 10 Lacs.</li>
              </ul>
            </div>

            {/* Policy Updates and Compliance */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">5. Policy Updates and Compliance</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>RMHP management reserves the right to modify or update policies, terms, and conditions at any time. Students are required to comply with these changes.</li>
                <li>Students are advised to review updates shared by the management regularly.</li>
              </ul>
            </div>

            {/* Penalties for Non-Compliance */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">6. Penalties for Non-Compliance</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Violating any rules, including unethical behavior, spamming, or unauthorized communication, may result in fines or removal from the course.</li>
                <li>The management has full authority to impose penalties as deemed necessary.</li>
              </ul>
            </div>

            {/* Agreement to SOPs */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">7. Agreement to SOPs</h3> {/* Adjusted green for section titles */}
              <p>
                Only students who agree to abide by these SOPs will be added to the relevant course groups.
              </p>
              <p>
                By enrolling in RMHP, you confirm your understanding and acceptance of these Standard Operating Procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SOPsPage;
