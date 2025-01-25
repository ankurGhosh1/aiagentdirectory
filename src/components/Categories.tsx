import React, { useState } from "react";
import { useRouter } from "next/router"; // Import for routing

const categories = [
  { name: "All", url: "/categories", icon: "💯" }, // You'll need to replace these with actual icons or SVGs
  { name: "Technology", url: "/technology", icon: "💻" },
  { name: "Healthcare", url: "/healthcare", icon: "💼" },
  { name: "Entertainment", url: "/entertainment", icon: "📈" },
  { name: "Marketing", url: "/marketing", icon: "👤" },
  { name: "Travel & Hospitality", url: "/travel-hospitality", icon: "🌐" },
  { name: "Real Estate", url: "/real-estate", icon: "📝" },
  { name: "E-commerce", url: "/e-commerce", icon: "🔍" },
  { name: "Finance", url: "/finance", icon: "🤖" },
  { name: "Manufacturing", url: "/manufacturing", icon: "📊" },
  { name: "Other", url: "/other", icon: "💰" },
  { name: "Legal", url: "/legal", icon: "📢" },
  { name: "Education", url: "/education", icon: "🪙" },
  { name: "Human Resources", url: "/human-resources", icon: "🎨" },
  { name: "Energy & Utilities", url: "/energy-utilities", icon: "🧮" },
  { name: "Vertical", url: "/vertical", icon: "📞" },
  { name: "Horizontal", url: "/horizontal", icon: "🧪" },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter(); // Get the router instance

  const handleClick = (categoryName: string) => {
    setActiveCategory(categoryName);

    // Navigate to the category page based on the selected category
    if (categoryName !== "All") {
      router.push(`/categories/${categoryName.toLowerCase()}`); // Push to the category route
    } else {
      router.push(`/`); // Go back to the home page for "All"
    }
  };

  return (
    <div className="p-4 rounded-md overflow-x-auto whitespace-nowrap cats-scroll">
      {/* Added overflow for horizontal scrolling */}
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`px-3 py-1 rounded-md cursor-pointer transition duration-300
              ${
                activeCategory === category.name
                  ? "bg-gray-700 text-white" // Active style
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            onClick={() => handleClick(category.url)}
          >
            <span className="mr-1">{category.icon}</span> {/* Icon/Emoji */}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
