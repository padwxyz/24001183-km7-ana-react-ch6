// components/button/HoverButton.js
function HoverButton({ children, onSelect }) {
  return (
    <li>
      <button
        onClick={onSelect}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {children}
      </button>
    </li>
  );
}

export default HoverButton;