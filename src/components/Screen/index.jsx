
function Screen({ children, safe = false }) {
    return (
        <section className={`bg-[#1f1e2a] ${safe ? 'h-full' : 'h-lvh' } pt-10`}>
            <div className="w-10/12 m-auto">
                {children}
            </div>
        </section>
    )
}

export default Screen;
