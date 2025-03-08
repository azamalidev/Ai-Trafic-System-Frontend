import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const ScholarshipSection = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed background to white and text color to dark gray */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Study Abroad Scholarship Opportunities - Roshan Mustaqbil Hunarmand Program (RMHP)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mt-6">
                <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
                <div className="hr-icon text-lg font-medium text-gray-700 uppercase"> {/* Changed to gray for better contrast */}
                  <i className="fas fa-user-graduate fa-2x"></i>
                </div>
                <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              </div>
            </div>
          

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            {/* Program Objectives */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">1. Program Objectives</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide financial support for deserving students to study at world-class universities.</li>
                <li>Facilitate access to quality education and advanced research opportunities.</li>
                <li>Foster global exposure and intercultural exchange among participants.</li>
                <li>Develop a pool of skilled professionals who can contribute to national development.</li>
                <li>Strengthen participants' technical, academic, and leadership capabilities.</li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">2. Eligibility Criteria</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Be an active participant or graduate of RMHP training programs.</li>
                <li>Have an excellent academic record with at least 80% marks or equivalent GPA.</li>
                <li>Demonstrate strong leadership potential and commitment to community development.</li>
                <li>Meet the admission requirements of the intended foreign university.</li>
                <li>Provide proof of English language proficiency (e.g., IELTS, TOEFL, or equivalent).</li>
                <li>Exhibit financial need or inability to fund studies independently.</li>
              </ul>
            </div>

            {/* Scholarship Coverage */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">3. Scholarship Coverage</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Tuition Fees: Full or partial coverage of academic fees.</li>
                <li>Living Expenses: Monthly stipend to cover accommodation, food, and other necessities.</li>
                <li>Travel Costs: Round-trip airfare to the destination country.</li>
                <li>Health Insurance: Coverage for medical and health-related expenses.</li>
                <li>Books and Supplies: Allowance for academic materials and tools.</li>
              </ul>
            </div>

            {/* Supported Fields of Study */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">4. Supported Fields of Study</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Engineering and Technology</li>
                <li>Medicine and Health Sciences</li>
                <li>Information Technology and Computer Science</li>
                <li>Business Administration and Management</li>
                <li>Renewable Energy and Environmental Studies</li>
                <li>Vocational Education and Technical Skills</li>
                <li>Arts, Humanities, and Social Sciences</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">5. Application Process</h3> {/* Adjusted green for section titles */}
              <ul className="list-decimal pl-6 space-y-2">
                <li>Submit an Application: Fill out the RMHP Study Abroad Scholarship Application Form available online or at RMHP offices.</li>
                <li>Attach Required Documents: Include academic transcripts, personal statement, proof of English proficiency, etc.</li>
                <li>Interview and Assessment: Shortlisted candidates will undergo an interview.</li>
                <li>Approval Notification: Successful applicants will receive an official award letter.</li>
              </ul>
            </div>

            {/* Obligations of Scholarship Recipients */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">6. Obligations of Scholarship Recipients</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain excellent academic performance during their studies.</li>
                <li>Act as ambassadors of RMHP and their country.</li>
                <li>Return to Pakistan and contribute to local development for a specified period.</li>
                <li>Comply with the terms and conditions outlined in the scholarship agreement.</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">7. Benefits of the Scholarship</h3> {/* Adjusted green for section titles */}
              <ul className="list-disc pl-6 space-y-2">
                <li>Global Exposure: Experience diverse cultures, ideas, and learning environments.</li>
                <li>Career Advancement: Enhance career prospects with an internationally recognized degree.</li>
                <li>Networking Opportunities: Build connections with global professionals.</li>
                <li>Skill Development: Gain advanced knowledge and skills in cutting-edge fields.</li>
                <li>Nation-Building: Contribute to Pakistan’s growth with the expertise gained.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700">8. Contact Information</h3> {/* Adjusted green for section titles */}
              <ul className="list-none text-lg mt-2">
                <li><strong>Email:</strong> scholarships@rmhp.org</li>
                <li><strong>Phone:</strong> +92-XXX-XXXXXXX</li>
                <li><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</li>
              </ul>
            </div>
            <div className="hr-theme-slash-2 flex items-center text-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase">Empowering Talented Students</div> {/* Changed to gray for better contrast */}
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>
          
        </div>
        
      </section>
      <Footer />
    </>
  );
};

export default ScholarshipSection;
