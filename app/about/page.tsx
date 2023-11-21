import React from 'react'
// import MainLayout from '../MainLayout'
import Image from 'next/image'

const About = () => {
  return (
    // <MainLayout>
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-16 px-6">
        {/* First section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="flex justify-center">
            <Image
                src="images/about.svg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to our blog! We are passionate about sharing knowledge and insights in
              various areas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg leading-relaxed">
              Feel free to explore our blog posts and discover interesting content that you will
              love!
            </p>
          </div>
        </div>

        {/* Second section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example cards */}
            <div className="bg-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Card 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Card 2</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Card 3</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
    // </MainLayout>
  )
}

export default About