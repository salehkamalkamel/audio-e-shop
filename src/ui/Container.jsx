export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-[70rem] mx-auto p-6 ${className}`}>
      {children}
    </div>
  );
}
