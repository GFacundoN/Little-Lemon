const Main = () => {
    return (
        <main className="main">
            {/* Hero */}
            <section className="hero">
                <img src="/images/restaurant-interior.jpg" alt="Restaurant interior" />
                <div className="text">
                    <h1>Little Lemon</h1>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Book a table</button>
                </div>
            </section>

            {/* Specials */}
            <section className="highlights">
                <h2>This week's specials!</h2>
                <div className="specials">
                    <article>
                        <img src="/images/fish.jpg" alt="Grilled fish" />
                        <h3>Grilled fish</h3>
                        <p>Our famous grilled fish, served with a side of roasted vegetables.</p>
                        <button>Order online</button>
                    </article>

                    <article>
                        <img src="/images/lemon-cake.jpg" alt="Lemon cake" />
                        <h3>Lemon cake</h3>
                        <p>Our signature lemon cake, made with fresh lemons and a hint of vanilla.</p>
                        <button>Order online</button>
                    </article>

                    <article>
                        <img src="/images/bruschetta.jpg" alt="Bruschetta" />
                        <h3>Bruschetta</h3>
                        <p>Our classic bruschetta, topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.</p>
                        <button>Order online</button>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Main
