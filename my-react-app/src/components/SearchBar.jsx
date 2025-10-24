import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
    const handleSearch = (e) => {
        e.preventDefault();
    }   
    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={handleSearch} className="w-100" style={{ maxWidth: "640px" }}>
                <div className="d-flex gap-2">
                    <Form.Control
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Buscar productos..."
                        aria-label="Buscar productos"
                        className="rounded-pill shadow-sm ps-4 py-2"
                        size="lg"
                    />
                </div>
            </Form>
        </div>
    );
};

export default SearchBar;