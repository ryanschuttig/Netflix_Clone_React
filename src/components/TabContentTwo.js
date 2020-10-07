import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                    <Button>try it now</Button>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentTwo;

// Main Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-item: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 1 / 8;
        
    }
`;