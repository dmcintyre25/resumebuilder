import React from 'react';
import {
    Segment
} from 'semantic-ui-react';
import ResumeSteps from './ResumeSteps';
import ResumeExamples from './ResumeExamples';


const HomePageContent = () => {
    return (
        <Segment className='homepageSection' vertical>
            <ResumeSteps />
            <ResumeExamples />
        </Segment >

    );
}

export default HomePageContent;