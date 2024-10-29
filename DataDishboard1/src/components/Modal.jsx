import React from "react";
import "./Modal.css"; // Create a CSS file for styling

const Modal = ({ isOpen, onClose, brewery }) => {
    if (!isOpen || !brewery) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{brewery.name}</h2>
                <p>Type: {brewery.brewery_type}</p>
                <p>City: {brewery.city}</p>
                <p>State: {brewery.state}</p>
                <p>Address: {brewery.street ? brewery.street : "N/A"}</p>
                <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
