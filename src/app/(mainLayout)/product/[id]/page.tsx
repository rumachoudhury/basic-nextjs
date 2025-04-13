function ProductDetailsPage({ params }: { params: { id: string } }) {
  console.log("Product ID:", params?.id);

  return <div> Product Details id: {params?.id}</div>;
}

export default ProductDetailsPage;
