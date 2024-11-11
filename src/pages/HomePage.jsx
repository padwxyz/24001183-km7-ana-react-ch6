import { useEffect, useState } from "react";
import axios from "axios";
import HoverButton from "../components/button/HoverButton";
import "../App.css";

function Homepage() {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredShops, setFilteredShops] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/api/v1/shops", {
          headers: {
            Authorization: `Bearer $(token)`,
          },
        });
        const data = response.data;
        if (data.isSuccess) {
          setShops(data.data.shops);
          setFilteredShops(data.data.shops);
        } else {
          setError("Error retrieving data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const applyFilters = () => {
    const filtered = shops.filter((shop) =>
      shop.products.some((product) => {
        const matchesName = nameFilter
          ? product.name.toLowerCase().includes(nameFilter.toLowerCase())
          : true;
        const matchesPrice = priceFilter
          ? parseFloat(product.price) <= parseFloat(priceFilter)
          : true;
        return matchesName && matchesPrice;
      })
    );
    setFilteredShops(filtered);
  };

  const resetFilter = () => {
    setFilteredShops(shops);
    setNameFilter("");
    setPriceFilter("");
  };

  return (
    <>
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

      <div className="flex justify-center space-x-4 my-4">
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          placeholder="Filter by name"
          className="px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          placeholder="Max Price"
          className="px-4 py-2 border rounded-md"
        />

        <HoverButton onSelect={applyFilters}>Apply Filters</HoverButton>
        <HoverButton onSelect={resetFilter}>Reset Filter</HoverButton>
      </div>

      <main className="text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!error && (
          <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.length === 0 ? (
              <p className="text-white">No Data Available!</p>
            ) : (
              filteredShops.map((shop, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-md bg-white shadow-md"
                >
                  <img
                    src={shop.products[0].images[0]}
                    alt={shop.products[0].name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="font-bold text-black">
                    {shop.products[0].name}
                  </h3>
                  <p className="text-green-500 font-bold">
                    Price: {shop.products[0].price}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                    <span>4 orang</span> <span>Manual</span>{" "}
                    <span>Tahun 2020</span>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                    Pilih Mobil
                  </button>
                </div>
              ))
            )}
          </section>
        )}
      </main>
    </>
  );
}

export default Homepage;
