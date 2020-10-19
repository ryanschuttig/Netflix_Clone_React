import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span>
                        Choose one plan and watch everything on Netflix.
                    </span>
                    <Button className="btn">try it now</Button>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree;

// Main Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);
`;