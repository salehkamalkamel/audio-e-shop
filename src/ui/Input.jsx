export default function Input({ heading, holder, error }) {
  return (
    <div className="flex flex-col items-start gap-[0.5rem] w-[19rem]">
      <div
        className={`flex items-center justify-between w-full ${
          error && "text-red-600"
        }`}
      >
        <p className="font-bold text-[0.75rem]">{heading}</p>
        {error && <p className="font-bold text-[0.75rem]">{error}</p>}
      </div>
      <input
        placeholder={holder}
        type="text"
        className={`bg-white border w-full border-lightGray rounded-[0.5rem] py-4 px-6 outline-1 outline-primary ${
          error && "border-red-600"
        }`}
      />
    </div>
  );
}
