import "../../styles/Otp.css";

export default function Otp({ otp, setOtp }) {
    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false;
        const value = e.target.value;
        setOtp([...otp.map((data, i) => (i === index ? value : data))]);

        if (value && e.target.nextSibling) {
            // focus on the next input
            e.target.nextSibling.focus();
        }
    }

    function handleKeyDown(e, index) {
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0) {
                // focus on the previous input
                e.target.previousSibling.focus();
            }
            setOtp([...otp.map((data, i) => (i === index ? "" : data))]);
        }
    }

    function handlePaste(e) {
        const value = e.clipboardData.getData("text");
        if (isNaN(value)) return false;

        const updatedValue = value.toString().split("").slice(0, otp.length);
        setOtp(updatedValue);

        const inputs = e.target.parentNode.querySelectorAll("input");
        updatedValue.forEach((char, i) => {
            inputs[i].value = char;
        });

        if (inputs[updatedValue.length]) {
            inputs[updatedValue.length].focus();
        }
    }

    return (
        <div>
            <div className="otp-area">
                {otp.map((data, i) => {
                    return (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            value={data}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            onPaste={(e) => handlePaste(e)}
                            style={{
                                borderColor: data ? "#7144c8" : "#D0D5DD",
                                borderWidth: "2px",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
