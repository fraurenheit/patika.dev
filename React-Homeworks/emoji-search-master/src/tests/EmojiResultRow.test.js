import { render , screen } from "@testing-library/react";
import React from 'react';
import App from "../App";

test("Emoji list must be rendered successfully ", () => {

    render(<App />)
    //burada ekrana 20 emoji basıyor mu diye baktım. EmojiResultRow dosyasında kapsayıcı div'e data-testid olarak row atadım.
    const items = screen.getAllByTestId("row");
    expect(items.length).toEqual(20);
});
