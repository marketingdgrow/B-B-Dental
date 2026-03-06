import { Link } from "react-router-dom";
import pdfs from "../dataProduct/data";

function DownloadList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            Product Downloads
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Access our official catalogues, surgical guides, and clinical
            documentation. All materials are available in downloadable format.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {pdfs.map((pdf) => (
            <div
              key={pdf.id}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={pdf.image}
                  alt={pdf.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-black transition-colors duration-300">
                    {pdf.name}
                  </h3>
                  <p className="text-gray-600 h-18 overflow-hidden text-sm leading-relaxed">
                    {pdf.description}
                  </p>
                </div>

                <Link to={`/download/${pdf.id}`} className="mt-8 inline-block">
                  <button className="w-full py-3 rounded-2xl bg-black text-white font-semibold tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Download PDF
                  </button>
                </Link>
              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DownloadList;
