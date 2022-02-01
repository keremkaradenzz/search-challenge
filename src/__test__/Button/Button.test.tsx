import React from 'react';
import { render, screen} from "@testing-library/react";
import Button from "../../components/Button/Button";

describe('Button test', () => {
    it('should render a button', ()=> {
        render(<Button title="title" onClick={() => jest.fn()}/>);
        const element = screen.getByText(/title/i);
        expect(element).toBeInTheDocument();

    })

})



