import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [itemData, setItemData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedPrice, setSavedPrice] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const baseUrl = "https://www.steamwebapi.com/steam/api/item";
    const apiKey = "8LT6RU86OSR2H5Z6";
    const itemName = "AK-47 | Redline (Field-Tested)";
    const encodedItemName = encodeURIComponent(itemName);
    const apiUrl = `${baseUrl}?key=${apiKey}&market_hash_name=${encodedItemName}`;

    // Load saved price from localStorage
    const localPrice = localStorage.getItem("latestPrice");
    if (localPrice) {
      setSavedPrice(localPrice);
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItemData(data);
        setLoading(false);
        // Save latest price to localStorage if available
        if (data.pricelatest !== undefined) {
          localStorage.setItem("latestPrice", data.pricelatest);
          setSavedPrice(data.pricelatest);
        }
      })
      .catch(() => {
        setError("Error fetching item data.");
        setLoading(false);
      });
  }, []);

  // Create a slug for the item name for the URL
  const itemSlug = "ak-47-redline-field-tested";

  return (
    <div>
      <h1>Steam Item Information</h1>
      <Link
        to={`/item/${itemSlug}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            border: "1px solid #ccc",
            borderRadius: 12,
            padding: 20,
            cursor: "pointer",
            transition: "box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            background: "#fafbfc",
            maxWidth: 500,
          }}
        >
          <img
            src="/ak47redlineft.png"
            alt="AK-47 | Redline (Field-Tested)"
            style={{
              width: 160,
              height: "auto",
              borderRadius: 8,
              background: "#222",
            }}
          />
          <div>
            {loading && <span>Loading item data...</span>}
            {error && (
              <span style={{ color: "#d25050" }}>
                {error}
                {savedPrice && (
                  <>
                    <br />
                    Showing last saved price: <strong>{savedPrice}</strong>
                  </>
                )}
              </span>
            )}
            {!loading && !error && itemData && (
              <span>
                <strong>
                  {itemData.marketname ||
                    itemData.markethashname ||
                    "Unknown Item"}
                </strong>
                {itemData.wear && (
                  <>
                    {" "}
                    (
                    {itemData.wear.replace(/^\w/, (c: string) =>
                      c.toUpperCase()
                    )}
                    )
                  </>
                )}
                <br />
                Latest Price:{" "}
                <strong>
                  {itemData.pricelatest !== undefined
                    ? itemData.pricelatest
                    : savedPrice || "N/A"}
                </strong>
              </span>
            )}
          </div>
        </div>
      </Link>
      <button
        style={{
          marginTop: 24,
          padding: "10px 24px",
          borderRadius: 8,
          border: "none",
          background: "#222",
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
        }}
        onClick={() => navigate("/XD")}
      >
        Go to ThomasXD
      </button>
    </div>
  );
}

export default Home;
