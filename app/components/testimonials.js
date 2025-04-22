"use client"
const testimonials = [
  { text: "BevEX helped us avoid a major fine and cleared everything before our DOB hearing. Super responsive and professional!", author: "J. Martinez, Property Manager" },
  { text: "Very efficient and reliable team. They handled all our violation issues without any hassle.", author: "T. Lewis, Commercial Owner" },
  { text: "Highly recommend BevEX. They explained everything clearly and took action quickly.", author: "R. Chen, Homeowner" },
  { text: "Saved us thousands in penalties. Incredible service!", author: "S. Patel, Developer" },
  { text: "Fast, friendly, and totally transparent with pricing and process.", author: "D. Rivera, Architect" },
  { text: "Took care of a last-minute permit need right before our deadline. Lifesavers.", author: "A. Singh, Contractor" },
  { text: "Navigated all the DOB complexities for us. We didn’t lift a finger.", author: "E. Johnson, Landlord" },
  { text: "The team was proactive, thorough, and extremely easy to work with.", author: "M. Alvarez, Project Manager" },
  { text: "Helped us close open violations fast and move forward with our renovation.", author: "H. Osei, Homeowner" },
  { text: "We felt fully supported from start to finish. Great experience!", author: "N. Davis, Real Estate Agent" }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-blue-800">Client Testimonials</h2>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <p className="text-blue-900">“{testimonial.text}”</p>
              <p className="mt-4 font-semibold text-blue-800">– {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
