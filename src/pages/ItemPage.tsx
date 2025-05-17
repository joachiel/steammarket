import { useParams } from "react-router-dom";

function ItemPage() {
  const { itemSlug } = useParams();

  return (
    <div>
      <h2>Item Page</h2>
      <p>
        You are viewing: <strong>{itemSlug?.replace(/-/g, " ")}</strong>
      </p>
      {/* You can fetch and display more info here based on itemSlug */}
    </div>
  );
}

export default ItemPage;
