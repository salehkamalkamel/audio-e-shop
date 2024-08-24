export default function Heading({ children, as = 'h1', className }) {
  const styles = {
    h1: 'font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[2.25rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3.5rem] tracking-[2px]',
    h2: 'font-bold text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[2rem] sm:leading-[2.25rem] md:leading-[2.5rem] lg:leading-[2.75rem] tracking-[1.5px]',
    h3: 'font-bold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.75rem] sm:leading-[2rem] md:leading-[2.25rem] lg:leading-[2.5rem] tracking-[1.15px]',
    h4: 'font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem] lg:leading-[2.25rem] tracking-[2px]',
    h5: 'font-bold text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1.25rem] sm:leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2rem] tracking-[1.7px]',
    h6: 'font-bold text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] leading-[1.125rem] sm:leading-[1.25rem] md:leading-[1.5rem] lg:leading-[1.75rem] tracking-[1.3px]',
  };
  const Tag = styles[as] ? as : 'h1';
  return (
    <Tag className={`${styles[as]} ${className} uppercase`}>{children}</Tag>
  );
}
