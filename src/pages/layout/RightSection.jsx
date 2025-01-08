import React, { useEffect } from "react";
import { MessageIcon, ShoppingBagIcon, StarsSvg } from "../../assets/icons/Icons";
import DescriptionMessage from "../../components/common/DescMsg";



function RightSection({ pageNum }) {
    const { icon, title, p1, p2 } = DescMessage(pageNum);
     function DescMessage(pageNum) {
        switch (pageNum) {
           
            case 0: {
                return {
                    icon: <StarsSvg />,
                    title: {
                        text: "Start turning your ideas into reality.",
                        excerptLength: 3,
                    },
                    p1: "Create a free account and get full access to all features for",
                    p2: "30-days. No credit card needed. Get started in 2 minutes.",
                };
            }
            case 1: {
                return {
                    icon: <MessageIcon />,
                    title: {
                        text: "Verify your account now",
                        excerptLength: 2,
                    },
                    p1: "Verify your account to continue with the setup process.",
                    p2: "This helps us ensure your security.",
                };
            }
            case 2: {
                return {
                    icon: <MessageIcon />,
                    title: {
                        text: "Verify your account now",
                        excerptLength: 2,
                    },
                    p1: "Verify your account to continue with the setup process.",
                    p2: "This helps us ensure your security.",
                };
            }

            case 3: {
                return {
                    icon: <ShoppingBagIcon />,
                    title: {
                        text: "Setup your store the way you like",
                        excerptLength: 3,
                    },
                    p1: "Customize your store settings to match your brand.",
                    p2: "Add products, set payment methods, and more.",
                };
            }
            default: {
                return {
                    icon: null,
                    title: { text: "Welcome!", excerptLength: 1 },
                    p1: "Please select an option to proceed.",
                    p2: "",
                };
            }
        }
    }
    return (
        <section className="register-page__rsec">
            <DescriptionMessage icon={icon} title={title} p1={p1} p2={p2} />
        </section>
    );
}

export default RightSection;
