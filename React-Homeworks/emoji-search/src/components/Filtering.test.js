import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";

test("Page has been filtered", () => {
    render(<App />);
    const inputText = screen.getByText("100");
    expect(inputText).toBeInTheDocument("100");
});