import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";

test("it click on emoji  must be copied" , () => {
    render(<App/>);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
    
});