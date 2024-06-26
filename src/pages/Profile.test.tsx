import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import { BrowserRouter } from "react-router-dom";

describe('Perfil', () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    )

    it('Deve renderizar a tabela na página', () => {
        expect(screen.getByRole('table')).toBeInTheDocument();
    })
})