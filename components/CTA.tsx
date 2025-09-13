import { FiUpload } from 'react-icons/fi';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to see your data clearly?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Upload your first file today and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="bg-white text-blue-600 text-lg font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            onClick={() => {
              // Handle file upload
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.accept = '.csv,.xlsx,.xls';
              fileInput.onchange = (e) => {
                // Handle file upload logic here
                console.log('File selected:', e.target.files[0]);
              };
              fileInput.click();
            }}
          >
            <FiUpload className="w-5 h-5" />
            Upload Data
          </button>
          <a 
            href="#contact" 
            className="border-2 border-white text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors inline-block"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
