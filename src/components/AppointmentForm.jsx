const AppointmentForm = () => {
  return (
    <div className="max-w-full mx-auto bg-[#1F2B6C] p-8 rounded-md">
      <form className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your name"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-white"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              autoComplete="gender"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              placeholder="Enter your phone number"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-white"
            >
              Date
            </label>
            <select
              id="date"
              name="date"
              autoComplete="date"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            >
              <option>May 13, 2024</option>
              <option>May 14, 2024</option>
              <option>May 15, 2024</option>
              <option>May 16, 2024</option>
              <option>May 17, 2024</option>
              <option>May 18, 2024</option>
              <option>May 19, 2024</option>
              <option>May 20, 2024</option>
              <option>May 21, 2024</option>
              <option>May 22, 2024</option>
              <option>May 23, 2024</option>
              <option>May 24, 2024</option>
              <option>May 25, 2024</option>
              <option>May 26, 2024</option>
              <option>May 27, 2024</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-white"
            >
              Time
            </label>
            <select
              id="time"
              name="time"
              autoComplete="time"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            >
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="doctor"
              className="block text-sm font-medium text-white"
            >
              Doctor
            </label>
            <select
              id="doctor"
              name="doctor"
              autoComplete="doctor"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            >
              <option>Dr. John Doe</option>
              <option>Dr. Jane Smith</option>
              <option>Dr. Michael Johnson</option>
              <option>Dr. Sarah Williams</option>
              <option>Dr. David Brown</option>
              <option>Dr. Jennifer Garcia</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-white"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              autoComplete="department"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            >
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Ophthalmology</option>
              <option>Obstetrics and Gynecology</option>
              <option>Dermatology</option>
              <option>Urology</option>
              <option>Oncology</option>
              <option>Pediatrics</option>
              <option>ENT (Ear, Nose, and Throat)</option>
              <option>Gastroenterology</option>
              <option>Radiology</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#BFD2F8] text-gray-800 placeholder-[#1F2B6C] focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#BFD2F8] text-[#1F2B6C] rounded-md font-medium shadow-sm hover:bg-[#8cadf0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BFD2F8]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
