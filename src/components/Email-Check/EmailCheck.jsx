import { useEffect, useState } from "react";
import { LeftArrow, SecMsgIcon } from "../../assets/icons/Icons";
import Otp from "../forms/Otp";
import '../../styles/global.css'

function EmailCheck({ setEmailChecked }) {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    useEffect(() => {
        const ref = setTimeout(() => {
            alert("Enter this code: 2342");
        }, 2000);
        return () => {
            clearTimeout(ref);
        };
    }, []);

    function checkOtpValidation(otp) {
        const otpValue = otp.join(""); 
        if (otp.some((o) => o === "")) {
            return true; 
        }
        return otpValue !== "2342"; 
    }

    function handleVerifyClick() {
        const otpValue = otp.join(""); 
        if (otpValue === "2342") {
            alert("OTP Verified Successfully!");
            setEmailChecked(true);
        } else {
            alert("Invalid OTP! Please try again.");
        }
    }

    const handleButtonClick = () => {
        handleVerifyClick(); 
        setEmailChecked(true); 
    };

    return (
        <>
            <div className="header">
                <SecMsgIcon className="icon-msg" />
                <h1 className="header-title">Check your email</h1>
                <p className="header-description-one">We sent a verification code to</p>
                <p className="header-description-two">omarmouneer@gmail.com</p>
            </div>
            <div className="otp-form">
                <Otp otp={otp} setOtp={setOtp} />
                <button
                    type="submit"
                    className="verify-btn"
                    onClick={handleButtonClick} 
                    disabled={checkOtpValidation(otp)} 
                >
                    Verify email
                </button>
            </div>
            <div className="resend-email">
                <p>
                    Didn’t receive the email? <a className="resend">Click to resend</a>{" "}
                </p>
            </div>
            <p className="back-to-login">
                <LeftArrow />
                <a>Back to log in</a>
            </p>
        </>
    );
}

export default EmailCheck;
