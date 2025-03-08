import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footur";

const CertificatePage = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [error, setError] = useState(null);

  const certificates = [
    { name: "Ali", roll: "12345", link: "/certificates/certificate1.pdf" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setCertificateUrl(null);
    setName("");

    // Find the certificate in the local array
    const certificate = certificates.find((cert) => cert.roll === rollNumber);

    if (certificate) {
      setCertificateUrl(certificate.link);
      setName(certificate.name);
    } else {
      setError("No certificate found for this roll number.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Check Your Certificate
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your roll number to view your certificate.
            </p>
          </div>

          {/* Roll Number Input Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="rollNumber" className="sr-only">
                  Roll Number
                </label>
                <input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Check Certificate
              </button>
            </div>
          </form>

          {/* User Information Card */}
          {name && (
            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Certificate Holder:
              </h3>
              <p className="text-gray-600 text-lg mt-1">{name}</p>

              
              {certificateUrl && (
                <a
                  href={certificateUrl}
                  download="certificate.pdf"
                  className="mt-4 inline-block no-underline bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                  Download Certificate
                </a>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md text-center">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CertificatePage;
