import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/navbarWithStyling";
import Navbar from "./components/navbar/navbar";
import HoverButton from "./components/button/HoverButton";

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      {/* header */}
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md">
          Register
        </button>
      </header>

      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 border rounded-md bg-white shadow-md">
            {" "}
            <img
              src="/path-to-image/car.png"
              alt="Car"
              className="w-full h-40 object-cover mb-4"
            />{" "}
            <h3 className="font-semibold">Nama/Tipe Mobil</h3>{" "}
            <p className="text-green-500 font-bold">Rp 430.000 / hari</p>{" "}
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>{" "}
            <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
              {" "}
              <span>4 orang</span> <span>Manual</span> <span>Tahun 2020</span>{" "}
            </div>{" "}
            <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
              Pilih Mobil
            </button>{" "}
          </div>
        ))}{" "}
      </section>

      {/* <Navbar />
      <NavbarWithStyling
        menu={listMenu}
        name="Melinda"
        age="26"
        address="hatinya Aqsa"
      />
      <NavbarWithStyling
        name="Iqmal Main rambut terus"
        age="78"
        address="Agar tampan di kelas"
      />
      <NavbarWithStyling
        menu={["Tentang saya", "Tentang Tegar", "Tentang Rizal"]}
        name="Ferdi"
        age="11"
        address="Aqsa Zoom Muka mu"
      />

      <HoverButton>
        <p>TEST CHILDREN</p>
      </HoverButton> */}
    </>
  );
}

export default App;
