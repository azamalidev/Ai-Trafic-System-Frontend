import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const InternshipSection = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-white text-gray-800"> {/* Changed text color to dark gray for better readability */}
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-green-600 leading-tight mb-4"> {/* Adjusted green shade for main title */}
              Internship Opportunities - Roshan Mustaqbil Hunarmand Program (RMHP)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
              <div className="hr-icon text-lg font-medium text-gray-700 uppercase"> {/* Changed to gray for better contrast */}
                Empowering the Next Generation
              </div>
              <div className="hr-line w-1/4 h-1 bg-green-500 mx-2"></div> {/* Kept green for hr-line */}
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-700"> {/* Changed text color to dark gray */}
            {/* Program Overview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                1. Program Overview
              </h3>
              <p>
                The RMHP Internship Program is crafted to provide participants with real-world experience in their respective fields of study. This program aims to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Equip participants with industry-relevant skills.</li>
                <li>Foster professional growth through mentorship and guidance.</li>
                <li>Provide exposure to workplace dynamics and collaborative projects.</li>
                <li>Strengthen resumes with practical achievements and certifications.</li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                2. Eligibility Criteria
              </h3>
              <p>
                To apply for an internship under RMHP, applicants must meet the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be an active participant in RMHP training programs or a recent graduate.</li>
                <li>Demonstrate commitment, professionalism, and a willingness to learn.</li>
                <li>Possess a basic understanding of the technical or vocational field they wish to pursue.</li>
                <li>Meet any additional requirements specified by the partnering organization or project.</li>
              </ul>
            </div>

            {/* Internship Categories */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                3. Internship Categories
              </h3>
              <p>
                RMHP offers internships across various disciplines, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical Skills: IT support, software development, web design, and cybersecurity.</li>
                <li>Creative Fields: Graphic design, content writing, and digital marketing.</li>
                <li>Administrative Roles: Office management, customer service, and data entry.</li>
                <li>Entrepreneurial Projects: Hands-on experience in business operations and startups & much more.</li>
              </ul>
            </div>

            {/* Program Duration */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                4. Program Duration
              </h3>
              <p>
                Internships typically last between 1 to 3 months, depending on the nature of the project and the field of work. Flexible schedules may be offered to accommodate the needs of students or professionals in training.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                5. Benefits of the Internship
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Practical Experience: Work on real projects to apply the skills learned during training.</li>
                <li>Mentorship: Guidance from industry experts to refine technical and soft skills.</li>
                <li>Networking Opportunities: Build connections with professionals and organizations in your field.</li>
                <li>Certificate of Completion: Acknowledging your contributions and acquired expertise.</li>
                <li>Stipends (where applicable): Certain internships may offer financial assistance.</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                6. Application Process
              </h3>
              <ul className="list-decimal pl-6 space-y-2">
                <li>Submit an updated resume and cover letter highlighting your skills and interest.</li>
                <li>Complete the RMHP Internship Application Form.</li>
                <li>Attend an interview or assessment (if required).</li>
                <li>Await selection and onboarding instructions from the RMHP team.</li>
              </ul>
            </div>

            {/* Partnering Organizations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                7. Partnering Organizations
              </h3>
              <p>
                RMHP collaborates with leading companies, startups, and NGOs to provide internship placements. Our partners are committed to supporting skill development and empowering the next generation of professionals.
              </p>
            </div>

            {/* Expectations from Interns */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                8. Expectations from Interns
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adhere to the ethical and professional standards set by RMHP and the partnering organization.</li>
                <li>Complete assigned tasks and responsibilities diligently.</li>
                <li>Actively participate in team meetings and training sessions.</li>
                <li>Provide regular progress updates to mentors or supervisors.</li>
              </ul>
            </div>

            {/* Feedback and Evaluation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                9. Feedback and Evaluation
              </h3>
              <p>
                Interns will receive regular feedback from their mentors to help them improve their performance. At the end of the program, a comprehensive evaluation will be conducted, and constructive feedback will be shared.
              </p>
            </div>

            {/* How to Get Started */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700"> {/* Adjusted green for section titles */}
                10. How to Get Started
              </h3>
              <p>
                To learn more about available internship opportunities or to apply, contact the RMHP Internship Coordinator at:
              </p>
              <ul className="list-none text-lg mt-2">
                <li>
                  <strong>Email:</strong> internships@rmhp.org
                </li>
                <li>
                  <strong>Phone:</strong> +92-XXX-XXXXXXX
                </li>
                <li>
                  <strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InternshipSection;
