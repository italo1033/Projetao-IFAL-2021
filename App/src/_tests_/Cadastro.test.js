import React from 'react'



import {Cadastro} from '../Screens/Cadastro'

import { render, fireEvent, waitFor } from '@testing-library/react-native';


describe('Testss para  o componete Lista', () => { 
    it('Should add new task when form has been submitted', async () => { 
        const { getByTestId} = render(<Cadastro/>)

        const input = getByTestId('Input')
        const testagem = 'testing'
        fireEvent.changeText(
            input,
            { target: { value: testagem}}
        )
        expect(input.value).toBe(testagem)

    })
})
