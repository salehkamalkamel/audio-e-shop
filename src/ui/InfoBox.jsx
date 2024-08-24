export default function InfoBox({children,className}) {
    return <div className={`flex flex-col items-center justify-center text-center gap-8 sm:gap-12 md:items-start md:text-start ${className}`}>{ children}</div>
}