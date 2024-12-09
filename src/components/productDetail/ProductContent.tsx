export default function ProductContent({
  description,
}: {
  description: string;
}) {
  return (
    <div className="bg-white p-4">
      <h3 className="p-2 bg-gray-200 mb-4">Chi tiết sản phẩm</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
