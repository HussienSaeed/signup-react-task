import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PersonalDetailsForm from "../../components/forms/PersonalDetailsForm";
import EmailCheck from "../../components/Email-Check/EmailCheck";
import EmailVerified from "../../components/Email-Verification/EmailVerified";
import StoreForm from "../../components/forms/StoreForm";

function LeftSection({ setPageNum, pageNum }) {

    const [emailChecked, setEmailChecked] = useState(false);
    
    return (
        <section className="register-page__lsec">
            {/* layout */}
            <Header pageNum={pageNum} />
            {/* main */}
            <main className="register-page__lsec--main">
                {pageNum === 0 && <PersonalDetailsForm setPageNum={setPageNum} />}
                {pageNum === 1 && (
                    <>
                        {!emailChecked && <EmailCheck setEmailChecked={setEmailChecked} />}
                        {emailChecked && (
                            <EmailVerified
                                setPageNum={setPageNum}
                                setEmailChecked={setEmailChecked}
                            />
                        )}
                    </>
                )}
                {[2, 3].includes(pageNum) && <StoreForm setPageNum={setPageNum} />}
            </main>

            {/* footer */}
      <Footer/>
        </section>
    );
}

export default LeftSection;
