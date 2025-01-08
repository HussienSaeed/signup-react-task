import { LeftArrow, SuccessIcon } from "../../assets/icons/Icons";

function EmailVerified({ setPageNum, setEmailChecked }) {


    return (
        <>
            <div className="header">
                <SuccessIcon />

                <h1 className="header-title">Email verified</h1>
                <p className="header-description-one" style={{ textAlign: "center" }}>
                    Your account has been verifeid succesfully. <br /> Click below to
                    setup your store
                </p>
                <p className="header-description-two"></p>
                <button
                    type="submit"
                    className="submit-btn"
                    onClick={() => {
                        setPageNum(3);
                        setEmailChecked(false);
                    }}
                >
                    Continue
                </button>
            </div>

            <p className="back-to-login">
                <LeftArrow />
                <a>Back to log in</a>
            </p>
        </>
    );
}

export default EmailVerified;
