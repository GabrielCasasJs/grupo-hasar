
function Screen({
    children,
    safe = false,
    className,
}) {
    return (
        <section className={`bg-[#1f1e2a] ${safe ? 'h-full' : 'h-fit' } ${className} pt-10`}>
            <div className="w-10/12 m-auto">
                {children}
            </div>
        </section>
    )
}

export default Screen;
