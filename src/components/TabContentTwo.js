import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

function TabContentTwo() {
    return (
        <div>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                    <Button>try it now</Button>
                </div>
            </div>
        </div>
    )
}

export default TabContentTwo;

// Main Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);
`;