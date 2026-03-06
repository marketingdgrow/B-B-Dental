import React, { Fragment } from "react";

import bgImage from "../assets/Tissue.png";

import useImg from "../assets/use-img.jpeg";
import indicatedImg from "../assets/indicated-img.jpeg";

import imgCae from "../assets/caesarian.jpeg";
import imgApp from "../assets/appendectomy.jpeg";
import imgDental from "../assets/dental.jpeg";
import imgCosmetic from "../assets/cosmetic.jpeg";
import imgBiopsy from "../assets/biopsy.jpeg";
import imgLap from "../assets/laproscopy.jpeg";
import applicator1 from "../assets/applicator1.jpeg";
import productImg from "../assets/amcrylate-pack.jpeg";



const Subperiosteal = () => {
  return (
    <Fragment>
      <div className="w-full min-h-[70vh] md:min-h-[80vh] lg:h-[600px] relative overflow-hidden flex items-center justify-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Image */}
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content on top */}
        <div className="absolute z-20 flex flex-col items-center gap-2 lg:gap-3">
          {/* <p className="text-red-500 tracking-[.3rem] font-semibold">
            FULL digital CUSTOMISED
          </p> */}
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
            TISSUE ADHESIVE - AMCRYLATE
          </h1>
          <p className="text-white text-center w-[80%] md:w-[60%] lg:w-[55%]">
            wonder care for wonud closure - A patient Molecule
          </p>
        </div>
      </div>

    
      <section className="w-full bg-white py-10">
  <div className="max-w-5xl mx-auto px-6 text-gray-800 text-[16px] leading-relaxed">

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">AMCRYLATE</span> is developed by Concord Drugs Ltd. in technical collaboration with IICT (Indian Institute of Chemical Technology) and with assistance of TIFAC (The Technology Information Forecasting and Assessment Council, New Delhi)
    </p>

    <p className="mb-4">
      ISO amyl - 2 Cyanoacrylate undergoes an exothermic polymerization catalysed by the presence of small quantities of weak base such as water. This anionic polymerization provides bonding action. The adhesiveness is maximised by spreading monomer in a very thin film.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → is a Bio-Adhesive which contains Iso - Amyl 2 - Cyanoacrylate.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">AMCRYLATE</span> i.e. iso-Amyl 2 - Cyanoacrylate is superior than N _ Butyl Cyanoacrylate since it does not brittle and fracture on long lacerations.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">AMCRYLATE</span> is also superior than octyle Cyanoacrylate as it has faster tissue bonding capacity and also cures faster.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">AMCRYLATE</span> has longer molecular chain, the toxicity is much reduced. So by increasing the size of the molecule it is possible to lengthen the time taken to polymerize and thus it gives ample time to the surgeon to close the incision after aligning the cut edges very well.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → is a sterile, non - toxic, haemostatic & bacteriostatic.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → is a monomer but when it gets into contact with moisture it gets converted to Polymer.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → solidifies within 5 to 10 seconds and solidifies fast in alkaline and slowly in acidic media.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → does not get absorbed in the blood and does not react to the tissue fluids.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → produces less oedema formation and granuloma than sutures.
    </p>

    <p className="mb-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → is a free flowing liquid monomer to spread easily in between the two skin Lesions of the wound to be closed and holds tightly and permanently.
    </p>

    <p>
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → reduces the risk of post surgical infection & trauma - thus it is simple and safe to use.
    </p>

    <p className="mt-4">
      <span className="text-[#2aa7c9] font-semibold">Amcrylate</span> → biodegradable and eliminates from the body by urine and faeces.
    </p>

  </div>
</section>

<section className="w-full bg-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-gray-800 text-[16px] leading-relaxed">

    {/* FIRST BLOCK */}
    <h3 className="text-[20px] italic mb-6">
      Amcrylate is widely used in
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={useImg}
          alt="Amcrylate Uses"
          className="w-full object-contain"
        />
      </div>

      {/* RIGHT LIST */}
      <ul className="space-y-3">
        <li>♦ ENT Surgery</li>
        <li>♦ Vascular Surgery</li>
        <li>♦ Cosmetic Surgery</li>
        <li>♦ Dental Surgery</li>
        <li>♦ Periodontal Surgery</li>
        <li>♦ Sterilization</li>
      </ul>

    </div>


    {/* SECOND BLOCK */}
    <h3 className="text-[20px] italic mb-6">
      Further Doctor, Amcrylate is Indicated in <br />
      (In closure of Surgical Incisions)
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={indicatedImg}
          alt="Indicated Surgeries"
          className="w-full object-contain"
        />
      </div>

      {/* RIGHT LIST */}
      <ul className="space-y-3">
        <li>♦ Appendectomy</li>
        <li>♦ Cholecystectomy</li>
        <li>♦ Gaastro - Jejunostomy</li>
        <li>♦ Episiotomy</li>
        <li>♦ Caesarian Section</li>
        <li>♦ Histerectomy</li>
        <li>♦ Oophorectomy</li>
        <li>♦ Laproscopy</li>
        <li>♦ Biopsy</li>
      </ul>

    </div>


    {/* BEST ADHESIVE SECTION */}
    <h3 className="font-semibold mb-4">
      Iso Amyl 2 - Cyanoacrylate (Amcrylate) is found to be BEST adhesive for the following reasons :
    </h3>

    <ul className="space-y-3">
      <li>✔ Ease of application.</li>
      <li>✔ Bondage time available is more than in N _ Butyl Cyanoacrylate to make any corrections.</li>
      <li>✔ Does not leave any scar and has COSMETIC look.</li>
      <li>✔ Tensile Strength more than conventional sutures.</li>
      <li>✔ Easy storage.</li>
      <li>✔ Good preservation in glass ampoules.</li>
      <li>✔ Stable in fluid form after loading into the syringe for two hours as long as the syringe was kept tightly shut.</li>
      <li>✔ Easy visibility as it is tinted blue.</li>
      <li>✔ Good packaging as the ampoule was packed along with the syringe.</li>
    </ul>

  </div>
</section>


{/* ----  img section ---- */}


<section className="w-full bg-gradient-to-b from-pink-100 to-white py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

      {/* CARD COMPONENT */}
      {[
        { img: imgCae, title: "Caesarian" },
        { img: imgApp, title: "Appendectomy" },
        { img: imgDental, title: "Dental Surgery" },
        { img: imgCosmetic, title: "Cosmetic Surgery" },
        { img: imgBiopsy, title: "Biopsy" },
        { img: imgLap, title: "Laproscopy" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 object-cover" />

          <div className="bg-blue-800 text-white text-center py-3 text-lg font-medium">
            {item.title}
          </div>
        </div>
      ))}

    </div>

  </div>

  
</section>


<section className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 text-gray-800 text-[15px] leading-relaxed">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

      {/* LEFT SIDE - METHOD OF USAGE */}
      <div>
        <h3 className="text-red-600 font-bold mb-3 text-[26px]">Method of Usage</h3>
        <p className="text-[18px]"> 
          Cut the Amcrylate glass ampoule with an ampoule cutter. Draw the total Amcrylate solution
          into special applicators provided along with the Amcrylate ampoule. Use the loaded syringe
          or dropper applicator gently for application directly on the tissue edges with correct
          position of wound surface to be joined by controlled delivery and flow. (If necessary use
          the needle provided along with the ampoule for thin application). Keep the wound surfaces
          as dry as possible and hold the sides of the wound together for 60 seconds after Amcrylate
          application. Always apply thin layer and remove the excess with dry swab immediately
          (Refer the figures depicted right side). Subcutaneous sutures may be applied wherever necessary.
        </p>
      </div>

      {/* CENTER - APPLICATOR I */}
      <div className="bg-white  p-10">
       
        <img
          src={applicator1}
          alt="Applicator I"
          className="w-full object-contain"
        />
      </div>

     

    </div>

    {/* BOTTOM CONTENT */}
    <div className="mt-12 space-y-6">

      <div>
        <h3 className="text-red-600 font-bold text-[22px] mb-4">Precautions</h3>
        <p className="text-[18px]">
          Amcrylate is sterile tissue adhesive for single use only. Discard the left over adhesive.
          Keep away the instruments from the adhesive. In case of accidental adhesion Amcrylate tissue
          adhesive can be removed with acetone or dimethyl formamide. (Make sure the condition of the
          adhesive is in liquid form. Do not use viscous adhesive).
        </p>
      </div>

      <div>
        <h3 className="text-red-600 font-bold text-[22px] mb-4">Side effects</h3>
        <p className="text-[18px]">
          Avoid too thick application. The heat on polymerization may cause injury to the adjacent
          tissue and reduces the healing due to slow absorption.
        </p>
      </div>

      <div>
        <h3 className="text-red-600 font-bold text-[22px] mb-4">Contraindications</h3>
        <p className="text-[18px]">
          Amcrylate should not be used for the closure of the wound on the surface of the brain or
          on the central peripheral nervous system.
        </p>
      </div>

      <div>
        <h3 className="text-red-600 font-bold text-[22px] mb-4">Availability</h3>
        <p className="text-[18px]">
          Amcrylate is available in 0.25 & 0.5 ml Ampoules containing ISO Pentyl (Amyl) 2 Cyanoacrylate.
        </p>
      </div>

    </div>

  </div>
</section>


<section className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 text-gray-800">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* LEFT CONTENT */}
      <div className="space-y-5 text-[17px] leading-relaxed">

        <h2 className="text-3xl font-semibold">
          Amcrylate – Liquid Tissue Bio-Adhesive
        </h2>

        <p>
          <strong>Amcrylate</strong>, manufactured by Concord Drugs Limited, is a sterile,
          medical-grade, liquid tissue bio-adhesive (cyanoacrylate) designed for rapid,
          needle-free closure of surgical incisions and wounds. It acts as a protective,
          flexible barrier that reduces infection risks, minimizes scarring, and replaces stitches.
        </p>

        <p><strong>Composition:</strong> Contains iso-amyl 2-cyanoacrylate.</p>

        <p><strong>Mechanism:</strong> It is a fast-acting adhesive that forms a strong, flexible bond upon contact with moisture.</p>

        <p><strong>Benefits:</strong> It acts as a bacteriostatic/bio-static agent, minimizes scarring, provides a water-resistant seal, and is generally painless to apply.</p>

        <p><strong>Key Features:</strong> It is non-toxic, non-allergic, and biodegradable, degrading slowly and safely within the body.</p>

        <p>It is typically available in 0.25ml or 0.5ml dose</p>

        <div>
          <p className="font-semibold">Manufacturer:</p>
          <p className="uppercase">CONCORD DRUGS LIMITED.</p>
          <p className="text-gray-600">
            Survey No: 249, Brahmanapally(V), Abdullapurmet (M), R.R.District,
            Telangana, INDIA – 501511
          </p>
        </div>

        

      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="flex flex-col items-center space-y-8">

        <img
          src={productImg}
          alt="Amcrylate Product"
          className="w-full max-w-md object-contain border"
        />


      </div>

    </div>

  </div>
</section>



    </Fragment>
  );
};

export default Subperiosteal;
