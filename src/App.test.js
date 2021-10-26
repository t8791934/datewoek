import React  from "react";
import { render,scree } from "@testing-library/react";
import App from "./App.js";

test('render learn react link', () => {
    render(<App />);
    const linkElement = scree.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})