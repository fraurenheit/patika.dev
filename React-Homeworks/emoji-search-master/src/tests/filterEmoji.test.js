import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";


    test("Emoji list must be rendered while filtering" , () => {
        render(<App />);
        //SearchInput.js dosyasında ınput'a placholder="search" verdim. 
        let input = screen.getByPlaceholderText("search");
        let inputChild = input[0]; 
        inputChild = screen.getByText("1234");
        expect(inputChild).toBeInTheDocument("1234");
    });



