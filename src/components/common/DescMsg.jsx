
function DescriptionMessage({
    icon,
    title: { text = " ", excerptLength = 0 } = {},
    p1,
    p2,
}) {
    return (
        <div className="register-page__rsec-desc">
            <span>{icon}</span>
            <h2>
                {text.split(" ").slice(0, excerptLength).join(" ")}
                <br />
                {text.split(" ").slice(excerptLength).join(" ")}
            </h2>
            <div>
                <p style={{ marginBottom: ".5rem" }}>{p1}</p>
                <p>{p2}</p>
            </div>
        </div>
    );
}



export default DescriptionMessage;