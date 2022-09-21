import { render, screen } from "@testing-library/react";
import React from 'react';
import App from '../App';

    test("Emoji list rendered successsfully", () => {
        render(<App />)
        const items = screen.getAllByTestId("row");
        expect(items.length).toEqual(20);
    });