export default function Text({ children, type, className }) {
  const styles = {
    overline:
      ' font-regular text-[0.875rem] uppercase leading-[1.1875rem] tracking-[10px]',
    subtitle:
      'text-primary font-bold text-[0.8125rem] uppercase leading-[1.5625rem] tracking-[1px]',
    body: 'font-medium text-[0.9375rem] leading-[1.5625rem] opacity-75',
  };

  return <p className={`${styles[type]} ${className}`}>{children}</p>;
}
