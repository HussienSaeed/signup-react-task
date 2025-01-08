import { useState } from "react";
import '../../styles/CustomSelect.css'
import { ArrowDownIcon } from "../../assets/icons/Icons";

const CustomSelect = ({ options = [], id, onChange }) => {
    const [selectedCountry, setSelectedCountry] = useState(options[0]); 
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        onChange(country.value);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}>

                <div className="selected-flag">
                    {selectedCountry.flag && (
                        <img className="flag-image"
                            src={selectedCountry.flag}
                            alt={`${selectedCountry.name} Flag`}
                        />
                    )}
                    <span>{selectedCountry.name}</span>
                </div>

                <span className="arrown-down">
                    <ArrowDownIcon
                        style={{
                            transition: "all .2s",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                        }} />
                </span>
            </div>
            {isOpen && (<div className="dropdown-menu">
                {options.map((option) => (
                    <div className="dropdown-option"
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        {option.flag && (
                            <img
                                className="flag-image"
                                src={option.flag}
                                alt={`${option.name} Flag`}
                            />
                        )}
                        <span>{option.name}</span>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
};

export default CustomSelect;
