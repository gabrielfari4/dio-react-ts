import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, useNavigate } from "react-router-dom";
import gitApi from "../api/github";


// TODO: pedir pro ChatGPT explicar em detalhes
const mockNavigate = jest.fn() 

jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate
}))

describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para a página de perfil', async () => {
        gitApi.getUser = jest.fn().mockResolvedValue({ login: 'gabrielfari4' })
        const user = 'gabrielfari4'
        
        render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )

            const input = screen.getByRole('textbox', { name: 'User' })

            const button = screen.getByRole('button', { name: 'Entrar' })

            fireEvent.change(input, {
                target: { value: user }
            })

            fireEvent.click(button)
            expect(gitApi.getUser).toHaveBeenCalledWith(user)
    })
    
    it('Não deve redirecionar para a página de perfil caso o usuário não seja informado', () => {
        window.alert = jest.fn()
        
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const button = screen.getByRole('button', { name: 'Entrar' })

        fireEvent.click(button)
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalled()
    })

})