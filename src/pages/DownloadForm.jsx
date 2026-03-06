import { useParams, useNavigate } from "react-router-dom";
import pdfs from "../dataProduct/data";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kenya",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "UAE",
  "UK",
  "USA",
  "Vietnam",
];

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhIvTydBv7w4JFud2QbcRTo3cA5WuL85dSvySqgl-hCgpjOSme-_t6Jj9RCkNq2Fxn/exec";

function DownloadForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedPDF = pdfs.find((pdf) => pdf.id === parseInt(id));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    country: "",
    agree: false,
  });
  useEffect(() => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;

    if (locale.includes("IN")) {
      setFormData((prev) => ({ ...prev, country: "India" }));
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState("Download Catalogue");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("You must agree to store and process data.");
      return;
    }

    setLoading(true);
    setBtnText("Submitting...");

    const payload = {
      ...formData,
      pdfName: selectedPDF.name,
    };

    try {
      // Convert to form-urlencoded
      const formBody = new URLSearchParams(payload).toString();

      const res = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      // const data = await res.json();
      const data = await res.json().catch(() => null);

      if (data.status === "success") {
        setBtnText("Downloading...");

        // Clean download trigger
        const link = document.createElement("a");
        link.href = selectedPDF.file;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          navigate("/download");
        }, 1500);
      } else {
        alert("Submission failed");
        setBtnText("Download Catalogue");
        setLoading(false);
      }
    } catch (err) {
      alert("Error submitting form");
      setBtnText("Download Catalogue");
      setLoading(false);
    }
  };

  if (!selectedPDF) return <h2>PDF Not Found</h2>;

  return (
    <div className="min-h-screen bg-[#f2f2f2] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-wide mb-12">
          DOWNLOAD {selectedPDF.name.toUpperCase()} .
        </h1>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div>
            <img
              src={selectedPDF.image}
              alt={selectedPDF.name}
              className="w-full shadow-lg"
            />
          </div>

          {/* Right Form */}
          <div>
            <p className="mb-6 text-gray-700">
              Fill in the form to download our free catalogue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  className="border border-gray-400 px-4 py-3"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  className="border border-gray-400 px-4 py-3"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="border border-gray-400 px-4 py-3"
                />
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    border: "1px solid #9CA3AF",
                    paddingLeft: "48px",
                    fontSize: "16px",
                  }}
                  buttonStyle={{
                    border: "1px solid #9CA3AF",
                    borderRight: "none",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                />
              </div>

              {/* Selects */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="title"
                  required
                  onChange={handleChange}
                  className="border border-gray-400 px-4 py-3"
                >
                  <option value="">Professional Title</option>
                  <option>Dentist</option>
                  <option>Distributor</option>
                  <option>Student</option>
                  <option>Other</option>
                </select>

                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="border border-gray-400 px-4 py-3"
                >
                  <option value="">Select Country</option>

                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Privacy Text */}
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>{selectedPDF.description}</p>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="marketing"
                  />
                  <span>
                    I agree to receive further communications from Marks
                    Biotech.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    onChange={handleChange}
                  />
                  <span>
                    I allow Marks Biotech to store and process my personal
                    data.*
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B0000] text-white py-3 mt-6 hover:bg-red-800 transition duration-300"
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadForm;
