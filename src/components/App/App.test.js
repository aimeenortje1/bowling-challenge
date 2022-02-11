import React from 'react'
import { render, screen } from "@testing-library/react";
import App from 'components/App'
import Game from "components/Game";
import FramesList from "components/FramesList";
import Frame from "components/Frame";

it('should render the App component', () => {
    render(<App/>);
    screen.debug();
    
})