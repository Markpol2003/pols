import React, { useState } from 'react';
import logo from './assets/logo.jpg';

// Sample gallery images (replace these with actual paths or URLs)
const galleryImages = [
  { id: 1, src: '/src/assets/gallery1.jpg', alt: 'Campus View' },
  { id: 2, src: '/src/assets/gallery2.jpg', alt: 'Library' },
  { id: 3, src: '/src/assets/gallery3.jpg', alt: 'Students' },
  { id: 4, src: '/src/assets/gallery4.jpg', alt: 'Sports Event' },
  { id: 5, src: '/src/assets/gallery5.jpg', alt: 'Graduation' },
  { id: 6, src: '/src/assets/gallery6.jpg', alt: 'Classroom' },
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const renderPage = () => {
    switch (activePage) {
case 'home':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900 text-center">Davao Central College</h2>
            <p className="text-md text-gray-700 text-center mb-4">
              Davao Central College, Inc. (DCCI), like many other institutions, has had its share of successes and defeats. It opened its doors in 1948, shortly after World War II ended. Originally named Davao Central Institute (DCI), it was the first high school established in Toril with no more than 76 enrollees from First Year to Fourth Year during its opening.
            </p>

            <p className="text-md text-gray-700 text-center mb-6">
              Today, DCC is committed to producing empowered individuals guided by Christian ideals and prepared for service.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">VISION</h3>
              <p className="text-gray-700">
                Empowered individuals imbued with Christian ideals for service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">MISSION</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide integral formation of students</li>
                <li>Develop God-loving and community service-oriented individuals</li>
                <li>Promote competence through quality instruction and research for nation-building</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">GOALS</h3>
              <ul className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Strengthen the total development of persons</li>
                <li>Develop a self-sustained community</li>
                <li>Cultivate the value of patriotism</li>
                <li>Promote a global standard of education</li>
                <li>Intensify faculty development programs</li>
                <li>Cultivate a strong research culture</li>
                <li>Upgrade physical plant and facilities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">CORE VALUES</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <span>Discipline</span>
                <span>Competence</span>
                <span>Compassion</span>
                <span>Integrity</span>
                <span>Love</span>
                <span>Toril City</span>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Academic Departments</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>College of Business Education</li>
              <li>College of Information Technology</li>
              <li>College of Education</li>
              <li>College of Engineering</li>
              <li>Senior High School Department</li>
              <li>Basic Education Department</li>
            </ul>
          </div>
        );

      case 'programs':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Admission Procedures</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Submit completed application form.</li>
              <li>Provide high school/college credentials.</li>
              <li>Take entrance examination (if applicable).</li>
              <li>Attend interview or orientation.</li>
              <li>Settle tuition and fees at the cashier.</li>
              <li>Get your student ID and enrollment slip.</li>
            </ol>
          </div>
        );

      case 'admission':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Contact Information</h2>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> DCC Campus, Davao City, Philippines</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> (082) 123-4567</p>
            <p className="text-gray-700"><strong>Email:</strong> info@dcc.edu.ph</p>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Announcements</h2>
            <ul className="text-gray-700 space-y-2">
              <li>🎓 Enrollment for AY 2025-2026 is now open!</li>
              <li>🏅 Join our intramurals this October.</li>
              <li>📢 New course offering: Bachelor of Science in Cybersecurity</li>
            </ul>
          </div>
        );

      case 'gallery':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map(image => (
                <div
                  key={image.id}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <p className="text-center text-gray-700 mt-2">{image.alt}</p>
                </div>
              ))}
            </div>

            {/* Modal */}
            {modalImage && (
              <div
                onClick={closeModal}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
              >
                <div
                  className="bg-white rounded-lg overflow-hidden max-w-3xl max-h-[80vh] shadow-lg"
                  onClick={(e) => e.stopPropagation()} // prevent modal close when clicking image container
                >
                  <img
                    src={modalImage.src}
                    alt={modalImage.alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="p-4 text-center text-gray-800 font-semibold">
                    {modalImage.alt}
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 font-bold hover:bg-red-700 transition"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow py-6 flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full object-cover border-4 border-blue-200 shadow" />
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Davao Central College</h1>
        </div>
        <p className="text-blue-700 mt-1 text-sm">Empowering Minds. Building the Future.</p>
      </header>

      {/* Navigation */}
      <nav className="w-full bg-[#045F09] shadow flex justify-center py-2 flex-wrap gap-2">
        {['home', 'about', 'programs', 'admission', 'contact', 'gallery'].map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`mx-2 px-4 py-2 rounded text-white font-medium transition duration-200
              ${activePage === page ? 'bg-[#034d07]' : 'hover:bg-[#034d07]'}`}
          >
            {page === 'home' ? 'Home' :
             page === 'about' ? 'Departments' :
             page === 'programs' ? 'Admission' :
             page === 'admission' ? 'Contact' :
             page === 'contact' ? 'Announcements' :
             'Gallery'}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main
        className="flex flex-1 flex-col items-center justify-center py-10 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/bg.jpg')` }}
      >
        <div className="bg-white bg-opacity-90 p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-5xl">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#045F09] text-white text-center text-sm py-4">
        © {new Date().getFullYear()} Davao Central College. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
