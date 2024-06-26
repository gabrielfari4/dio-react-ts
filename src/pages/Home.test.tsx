import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, useNavigate } from "react-router-dom";


// TODO: pedir pro ChatGPT explicar em detalhes
const mockNavigate = jest.fn() 

jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate
}))

describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para a página de perfil', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

       const button = screen.getByRole('button', { name: 'Entrar' })

       fireEvent.click(button)
       expect(mockNavigate).toHaveBeenCalled()
    })
})