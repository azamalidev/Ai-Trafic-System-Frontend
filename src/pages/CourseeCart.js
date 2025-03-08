import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyAddToCartCourse,
  removeMyAllCourse,
  uploadChallan,
} from '../redux/action/request';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Upload } from 'lucide-react';

pdfMake.vfs = pdfFonts?.pdfMake?.vfs;

export default function Cart() {
  const { addToCartCourse } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    dispatch(getMyAddToCartCourse('AddToCart'));
  }, [dispatch]);

  const toggleModal = () => {
    setShowInvoiceModal(!showInvoiceModal);
  };

  const handleCheckboxChange = (courseId, isChecked) => {
    if (isChecked) {
      setSelectedCourses((prev) => {
        const updatedCourses = [...prev, courseId];
        const course = addToCartCourse.find(
          (course) => course?.courseDetails._id === courseId
        );
        setTotal(total + course?.courseDetails?.prize);
        return updatedCourses;
      });
    } else {
      setSelectedCourses((prev) => {
        const updatedCourses = prev.filter((id) => id !== courseId);
        const course = addToCartCourse.find(
          (course) => course?.courseDetails._id === courseId
        );
        setTotal(total - course?.courseDetails?.prize);
        return updatedCourses;
      });
    }
  };

  const removeCourseFromCart = () => {
    const data = { courseIds: selectedCourses };
    dispatch(removeMyAllCourse(data));
    setTimeout(() => {
      dispatch(getMyAddToCartCourse('AddToCart'));
      setSelectedCourses([]);
    }, 2000);
  };

  const generateInvoice = () => {
    toggleModal();
  };

  const download = () => {
    const totalAmount = addToCartCourse.reduce(
      (total, course) => total + course?.courseDetails?.prize,
      0
    );

    const docDefinition = {
      content: [
        { text: 'Invoice', style: 'header' },
        { text: 'Selected Courses:', style: 'subheader' },
        ...addToCartCourse.map((course) => ({
          text: `${course?.courseDetails?.title} - Rs: ${course?.courseDetails?.prize}`,
          style: 'bodyText',
        })),
        {
          text: `Grand Total: Rs ${totalAmount}`,
          style: 'totalAmount',
        },
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          color: 'blue',
        },
        subheader: {
          fontSize: 16,
          italics: true,
          margin: [0, 10, 0, 5],
        },
        bodyText: {
          fontSize: 12,
          margin: [0, 5],
        },
        totalAmount: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 5],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('invoice.pdf');
  };

  const handleFileChange = (file, Id) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        dispatch(uploadChallan(Id, { paidChallan: reader.result }));
      };
      reader.onerror = (error) => {
        console.error('Error converting file:', error);
      };
    }
  };

  return (
    <>
      <ToastContainer />
      <section className='min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-8'>
        <div className='container mx-auto'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6'>
            Your Cart
          </h1>
          <div className='flex flex-col lg:flex-row gap-6'>
            {/* Course List */}
            <div className='w-full lg:w-8/12'>
              <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6'>
                {addToCartCourse.length > 0 ? (
                  <div className='overflow-x-auto'>
                    <table className='w-full'>
                      <thead>
                        <tr className='bg-gray-100'>
                          <th className='p-2 sm:p-3 text-left'>Select</th>
                          <th className='p-2 sm:p-3 text-left'>Thumbnail</th>
                          <th className='p-2 sm:p-3 text-left'>Course</th>
                          <th className='p-2 sm:p-3 text-left hidden sm:table-cell'>
                            Duration
                          </th>
                          <th className='p-2 sm:p-3 text-left'>Upload</th>
                          <th className='p-2 sm:p-3 text-left'>Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {addToCartCourse.map((course) => (
                          <tr
                            key={course.id}
                            className='border-b border-gray-200 hover:bg-gray-50 transition-all'
                          >
                            <td className='p-2 sm:p-3'>
                              <input
                                type='checkbox'
                                className='form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded'
                                onChange={(e) =>
                                  handleCheckboxChange(
                                    course?.courseDetails?._id,
                                    e.target.checked
                                  )
                                }
                              />
                            </td>
                            <td className='p-2 sm:p-3'>
                              <img
                                src={course?.courseDetails.courseImage}
                                alt={course?.courseDetails?.title}
                                className='w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg'
                              />
                            </td>
                            <td className='p-2 sm:p-3'>
                              <p className='text-sm sm:text-base text-gray-800 font-medium'>
                                {course?.courseDetails?.title}
                              </p>
                            </td>
                            <td className='p-2 sm:p-3 text-gray-600 hidden sm:table-cell'>
                              {course?.courseDetails?.duration}
                            </td>
                            <td className='p-2 sm:p-3'>
                              <label className='cursor-pointer flex items-center gap-1 sm:gap-2'>
                                <Upload
                                  size={16}
                                  className='text-gray-500 hover:text-blue-600'
                                />
                                <input
                                  type='file'
                                  accept='image/png, image/jpeg'
                                  className='hidden'
                                  onChange={(e) =>
                                    handleFileChange(e.target.files[0], course?._id)
                                  }
                                />
                              </label>
                            </td>
                            <td className='p-2 sm:p-3 text-gray-800 font-semibold'>
                              Rs: {course?.courseDetails?.prize}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className='text-center py-6'>
                    <p className='text-gray-600'>No courses in your cart yet.</p>
                  </div>
                )}
                {/* Remove Selected Button */}
                <div className='mt-4 sm:mt-6'>
                  <button
                    onClick={removeCourseFromCart}
                    disabled={selectedCourses.length === 0}
                    className={`w-full px-4 py-2 sm:px-6 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${
                      selectedCourses.length === 0
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    Remove Selected
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className='w-full lg:w-4/12'>
              <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6'>
                  Cart Summary
                </h2>
                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex justify-between'>
                    <span className='text-sm sm:text-base text-gray-600'>
                      Subtotal
                    </span>
                    <span className='text-sm sm:text-base text-gray-800 font-semibold'>
                      Rs {total}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm sm:text-base text-gray-600'>
                      Discount (0%)
                    </span>
                    <span className='text-sm sm:text-base text-gray-800 font-semibold'>
                      Rs 0
                    </span>
                  </div>
                  <div className='border-t border-gray-200 pt-3 sm:pt-4'>
                    <div className='flex justify-between'>
                      <span className='text-sm sm:text-base text-gray-800 font-bold'>
                        Total
                      </span>
                      <span className='text-sm sm:text-base text-gray-800 font-bold'>
                        Rs {total}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={generateInvoice}
                  disabled={selectedCourses.length === 0}
                  className={`w-full mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${
                    selectedCourses.length === 0
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Generate Invoice
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Modal */}
        {showInvoiceModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-md mx-4'>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4'>
                Invoice
              </h3>
              <p className='text-sm sm:text-base text-gray-600 mb-6'>
                Your invoice has been successfully generated! Download or print
                your fee slip below.
              </p>
              <div className='flex justify-end gap-3 sm:gap-4'>
                <button
                  onClick={toggleModal}
                  className='px-4 py-2 sm:px-6 sm:py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm sm:text-base'
                >
                  Close
                </button>
                <button
                  onClick={download}
                  className='px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base'
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}