import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockcontactSelected = jest.fn();
const mocksetContactSelected = jest.fn();
//============================= Configure the Testing Environment ================================//

// adding a utility function to keep things clean
afterEach(cleanup);

// describe function, declare the component we're testing
describe('Nav component', () => {
    //-------------------renders Nav test----------------------//

    //baseline Test 
    it('renders', () => {
        render(<Nav 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockcontactSelected}
          setContactSelected={mocksetContactSelected}
        />);
    });

    //snapshot Test 
    it('matches snapshot', () => {
        // render Nav 
        const { asFragment } = render(<Nav 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockcontactSelected}
          setContactSelected={mocksetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
  });


// Create a Test for Emoji Visibility

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockcontactSelected}
          setContactSelected={mocksetContactSelected}
          />);

        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })


//  Create a Test for Link Visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockcontactSelected}
          setContactSelected={mocksetContactSelected}
        />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
    });
  })