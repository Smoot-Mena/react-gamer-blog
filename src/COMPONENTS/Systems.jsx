
const Systems = ( {systems} ) => {

    return (
        <section>
            {systems && systems.map((system) => (
                <section key={system.id}>
                    <h4>{system.type}</h4>
                    <img src={"../" + system.image} alt={system.type} width="300px" />
                </section>
            ))}
        </section>
    )
}

export default Systems;