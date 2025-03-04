import React from "react";

/**
 * A responsive, visually appealing application form.
 * No advanced validation, but includes all fields from the screenshot.
 */
const Apply = () => {
	return (
		<section className="relative pt-36 w-full min-h-screen bg-gradient-to-b from-accentcolor via-white to-white py-16">
			{/* Decorative wave at the top */}
			<div className="absolute top-0 left-0  w-full overflow-hidden leading-none">
				<svg
					className="relative block w-[calc(100%+1.3px)] h-[100px]"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M1200 0L0 0 0 100 1200 0z"
						fill="#FFCC00" /* accentcolor */
					/>
				</svg>
			</div>

			<div className="max-w-4xl mx-auto px-4 relative z-10">
				{/* Heading */}
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-navyblue">
						Finance &amp; Management Research Institute Ltd/Gte
					</h1>
					<p className="text-secondaryblue text-xl md:text-2xl font-semibold mt-2">
						Application Form
					</p>
				</div>

				{/* Form Card */}
				<form
					action="mailto:infofmrin@gmail.com?subject=Application"
					method="post"
					encType="text/plain"
					className="bg-white rounded-lg shadow-lg p-6 space-y-6"
				>
					{/* Row 1: First Name / Last Name */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="firstName"
								className="font-medium text-gray-700 mb-1"
							>
								First Name
							</label>
							<input
								id="firstName"
								name="First Name"
								type="text"
								placeholder="Enter first name"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="lastName"
								className="font-medium text-gray-700 mb-1"
							>
								Last Name
							</label>
							<input
								id="lastName"
								name="Last Name"
								type="text"
								placeholder="Enter last name"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
					</div>

					{/* Row 2: Other Names / Gender */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="otherNames"
								className="font-medium text-gray-700 mb-1"
							>
								Other Names
							</label>
							<input
								id="otherNames"
								name="Other Names"
								type="text"
								placeholder="Enter other names"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="gender"
								className="font-medium text-gray-700 mb-1"
							>
								Choose Gender
							</label>
							<select
								id="gender"
								name="Gender"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							>
								<option value="">Choose gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								{/* More options if needed */}
							</select>
						</div>
					</div>

					{/* Contact Address */}
					<div className="flex flex-col">
						<label
							htmlFor="contactAddress"
							className="font-medium text-gray-700 mb-1"
						>
							Contact Address
						</label>
						<input
							id="contactAddress"
							name="Contact Address"
							type="text"
							placeholder="Enter contact address"
							className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
						/>
					</div>

					{/* Row 3: DOB / Country */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label htmlFor="dob" className="font-medium text-gray-700 mb-1">
								Date of Birth
							</label>
							<input
								id="dob"
								name="Date of Birth"
								type="date"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="country"
								className="font-medium text-gray-700 mb-1"
							>
								Country
							</label>
							<select
								id="country"
								name="Country"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							>
								<option value="">Choose country</option>
								<option value="Nigeria">Nigeria</option>
								<option value="Ghana">Ghana</option>
								<option value="Kenya">Kenya</option>
								{/* More countries as needed */}
							</select>
						</div>
					</div>

					{/* Row 4: City / Student Courses */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label htmlFor="city" className="font-medium text-gray-700 mb-1">
								City
							</label>
							<input
								id="city"
								name="City"
								type="text"
								placeholder="Enter city"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="studentCourses"
								className="font-medium text-gray-700 mb-1"
							>
								Student Courses
							</label>
							<select
								id="studentCourses"
								name="Student Courses"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							>
								<option value="">Choose course</option>
								<option value="BPC">
									Basic Professional Certificate (BPC)
								</option>
								<option value="FMP-1">FMP-1</option>
								<option value="FMP-2">FMP-2</option>
								<option value="FMP-3">FMP-3</option>
								<option value="FFMP">FFMP</option>
							</select>
						</div>
					</div>

					{/* Row 5: Direct Membership / Email */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="membership"
								className="font-medium text-gray-700 mb-1"
							>
								Direct Membership (For Membership Only)
							</label>
							<select
								id="membership"
								name="Direct Membership"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							>
								<option value="">Choose membership</option>
								<option value="GFM">Graduate Member (GFM)</option>
								<option value="LFM">Licentiate Member (LFM)</option>
								<option value="AFM">Associate Member (AFM)</option>
								<option value="MFM">Full Member (MFM)</option>
								<option value="FFM">Fellow Member (FFM)</option>
							</select>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								id="email"
								name="Email"
								type="email"
								placeholder="Enter your email address"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
					</div>

					{/* Row 6: Phone Number / Qualification */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="phoneNumber"
								className="font-medium text-gray-700 mb-1"
							>
								Phone Number
							</label>
							<input
								id="phoneNumber"
								name="Phone Number"
								type="tel"
								placeholder="Enter your phone number"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="qualification"
								className="font-medium text-gray-700 mb-1"
							>
								Qualification &amp; Any Other Info
							</label>
							<input
								id="qualification"
								name="Qualification & Other Info"
								type="text"
								placeholder="Enter your qualification and any other important info"
								className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
							/>
						</div>
					</div>

					{/* Submit Button */}
					<div className="text-right">
						<button
							type="submit"
							className="bg-secondaryblue text-white font-semibold py-3 px-8 rounded-full hover:bg-navyblue transition-colors"
						>
							Send Application
						</button>
					</div>
				</form>
			</div>

			{/* Decorative wave at the bottom */}
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
				<svg
					className="relative block w-[calc(100%+1.3px)] h-[100px]"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M1200 0L0 0 0 100 1200 0z"
						fill="#FFCC00" /* accentcolor */
					/>
				</svg>
			</div>
		</section>
	);
};

export default Apply;
