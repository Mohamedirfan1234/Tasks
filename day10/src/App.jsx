/*video playback*/
import React, { useState, useMemo, useCallback, useEffect } from "react";
import "./App/css";
const FilterableProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        const uniqueCategories = [
          "all",
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, sortOrder]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          style={{ marginRight: "10px" }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <button onClick={clearSearch}>Clear Filters</button>
      </div>
      <p>Count: {filteredAndSortedProducts.length}</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredAndSortedProducts.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "20px",
              }}
            />
            <div>
              <h3 style={{ margin: "0 0 10px" }}>{product.title}</h3>
              <p style={{ margin: "0 0 5px", fontSize: "14px", color: "#555" }}>
                {product.description}
              </p>
              <p style={{ margin: 0, fontWeight: "bold" }}>
                Price: ${product.price}
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableProductList;
/* video playback*/
import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play the video
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Pause the video
  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React Video Player</h1>

      {}
      <video ref={videoRef} width="100%" style={styles.video} controls>
        <source
          src="https://cdn.api.video/vod/vi1FBKkaYe5Y2L9wNbGDYztl/mp4/720/source.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/}
      <div style={styles.controls}>
        <button style={styles.button} onClick={handlePlay} disabled={isPlaying}>
          Play
        </button>
        <button
          style={styles.button}
          onClick={handlePause}
          disabled={!isPlaying}
        >
          Pause
        </button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  video: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  controls: {
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
  },
};

export default App;
