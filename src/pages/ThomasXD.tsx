import { useParams } from "react-router-dom";

function ThomasXD() {
  const { itemSlug } = useParams();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <h2>Item Page</h2>
      <p>
        You are viewing: <strong>{itemSlug?.replace(/-/g, " ")}</strong>
      </p>
      <img
        src="/XDDDD.png"
        alt="XDDDD"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          borderRadius: 0,
          marginTop: 0,
        }}
      />
    </div>
  );
}

export default ThomasXD;
