import React from 'react';

// import react testing library
import { render, cleanup } from '@testing-library/react';

// Import the jest-dom Package
import '@testing-library/jest-dom/extend-expect';

// Import the About Component
import About from '..';



//============================= Configure the Testing Environment ================================//

// adding a utility function to keep things clean
afterEach(cleanup);

// describe function, declare the component we're testing
describe('About component', () => {
    //-------------------renders About test----------------------//

    //First Test 
    it('renders', () => {
        render(<About />);
    });

    //Second Test 
    it('matches snapshot DOM node structure', () => {
        // render About 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
  })