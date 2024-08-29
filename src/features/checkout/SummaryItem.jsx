export default function SummaryItem({ item }) {
  // Destructure with optional chaining to prevent accessing undefined properties
  const imageUrl = item?.image?.mobile;
  const name = item?.name || 'Unnamed Product';
  const price = item?.details?.price || 'N/A';
  const count = item?.count || 0;

  return (
    <div className="flex justify-between items-center w-[17rem] gap-4">
      <div className="flex gap-4 items-center">
        {imageUrl && (
          <img
            className="w-[4rem] h-[4rem] rounded-[0.5rem]"
            src={imageUrl}
            alt={name}
          />
        )}
        <div className="flex flex-col items-start">
          <p className="font-bold text-black text-[0.9375rem] leading-6">
            {name}
          </p>
          <p className="font-bold text-[0.875rem] leading-6 tracking-normal text-darkGray">
            ${price}
          </p>
        </div>
      </div>
      <div className="text-[0.9375rem] font-bold text-darkGray">x{count}</div>
    </div>
  );
}
