import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import { BrowserRouter, useParams } from "react-router-dom";

const mockNavigate = jest.fn()
let mockUser = ''

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useParams: () => ({
        user: mockUser
    })
}))

describe('Perfil', () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    )

    it('Deve renderizar a tabela na página caso o usuário seja válido', () => {
        mockUser = 'gabriel'
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    /* it('Deve redirecionar para home caso o usuário não seja válido', () => {
        mockUser = 'outro-usuario'
        expect(mockNavigate).toHaveBeenCalled()
    }) */
})