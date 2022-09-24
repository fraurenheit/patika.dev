import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";

test("it click on emoji  must be copied" , () => {
    render(<App/>);
    // EmojiResultRow dosyasında kapsayıcı div'e data-testid= "row" atadım.
    const clicks = screen.getAllByTestId("row");
    
    //aynı div'in /data-clipboard-text/ attribute var.
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
    
});