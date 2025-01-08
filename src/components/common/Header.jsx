import { Steps } from "antd";
import { LogoIcon } from "../../assets/icons/Icons";
import { useState } from "react";

const items = [
    {
        title: "Your details",
        description: "Provide your basic information",
    },
    {
        title: "Confirmation",
        description: "Confirm your email",
    },
    {
        title: "Store information",
        description: "Set your store main info",
    },
];
function Header({ pageNum }) {
    const [step, setStep] = useState(pageNum - 1);

    return (
        <header className="register-page__lsec--header">
            <LogoIcon width={100} height={45} />
            <div style={{ margin: "1.5rem 0" }}>
                <Steps
                    size="small"
                    current={pageNum}
                    labelPlacement="vertical"
                    items={items}
                />
            </div>
        </header>
    );
}

export default Header;
