import React from "react";

const RequestList = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <main className="mt-6">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="text-xl absolute top-[70px] font-semibold">
                Toyota Corolla
              </h2>
              <p className="text-sm   absolute top-[100px] text-gray-500">
                Register Number: MH-129093456
              </p>
              <p className="text-sm bg-black text-white absolute top-[140px] px-1 py-0 rounded-full">
                Make: December 2022
              </p>
              <p className="text-sm bg-black text-white absolute top-[180px] px-1 py-0 rounded-full">
                VIN: 828728188278m
              </p>

              <p className="text-sm  absolute top-[220px]  text-gray-500">
                KA-45-9876
              </p>
              <p className="text-sm   absolute top-[250px] mt-4">
                Hi, let's have a meeting tomorrow to<br></br> discuss the
                project. I've been reviewing...
              </p>
            </div>
            <div className="text-sm   absolute top-[400px] mt-4">
              <h3 className="font-semibold text-lg">Owner Detail</h3>
              <p className="text-sm text-gray-600">Akash Vars</p>
              <p className="text-sm text-gray-600">+913247848490</p>
              <p className="text-sm text-gray-600">New Delhi, New Bus stand</p>
              <p className="text-sm text-blue-500">owner@gmail.com</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="absolute top-20 right-16 flex items-start justify-end gap-16">
              <div className="text-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mx-auto"></div>
                <p className="text-xs mt-2">Request Sent</p>
              </div>
              <div className="h-1 bg-green-500 flex-1"></div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mx-auto"></div>
                <p className="text-xs mt-2">Quotation Made</p>
              </div>
              <div className="h-1 bg-gray-300 flex-1"></div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto"></div>
                <p className="text-xs mt-2">Payment Done</p>
              </div>
              <div className="h-1 bg-gray-300 flex-1"></div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto"></div>
                <p className="text-xs mt-2">Policy Uploaded</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <div className="grid gap-8 w-full max-w-lg">
                {[
                  {
                    name: "Jira : Basic",
                    cover: "₹ 1000000",
                    price: "₹1500",
                    activity: 150,
                  },
                  {
                    name: "Jira : Standard",
                    cover: "₹ 2000000",
                    price: "₹2000",
                    activity: 200,
                  },
                  {
                    name: "Jira : Premium",
                    cover: "₹ 3000000",
                    price: "₹5000",
                    activity: 250,
                  },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
                  >
                    <div>
                      <h4 className="font-semibold">{plan.name}</h4>
                      <p className="text-sm text-gray-600">
                        Cover amount (IDV): {plan.cover}
                      </p>
                      <p className="text-sm text-gray-600">
                        Cashless Garages:{" "}
                        <span className="text-blue-500">Available</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Activity Point: {plan.activity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">
                        {plan.price}
                      </p>
                      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Pay Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-red-500 text-center mt-4">
              Payment Link expires after 24 hours
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestList;
