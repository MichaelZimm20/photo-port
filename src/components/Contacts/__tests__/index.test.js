import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

// to release memory from allocation between tests
afterEach(cleanup);


//============================= Configure the Testing Environment ================================//

describe('Contacts Component', () => {
        //-------------------renders Nav test----------------------//


        // baseline tests
        it('renders', () => {
            render(
                <ContactForm />

            )
        });

        it('matches snapshot', () => {
            // render Nav
            const { asFragment } = render(<ContactForm 
            />);
            expect(asFragment()).toMatchSnapshot();
        });

        it('if h1 is equal to Contact Me', () => {
            const { getByTestId } = render(<ContactForm 
            
            />)
            // Assert
            expect(getByTestId('h1Contact')).toHaveTextContent('Contact Me');
        });
        it('if button matches Submit', () => {
            const { getByTestId } = render(<ContactForm 
            
            />)
            // Assert
            expect(getByTestId('btnSubmit')).toHaveTextContent('Submit');
        });


})