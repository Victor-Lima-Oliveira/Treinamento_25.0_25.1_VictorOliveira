import React from 'react';
import NavBarNTec from 'components/container/navbar';
import ContainerNTec from 'components/container';
import Aside from 'components/container/aside';
import MainNTec from 'components/container/main';

const ExampleTemplate = () => {
    return (
        <ContainerNTec>
            <NavBarNTec />
            <MainNTec />
            <Aside />
        </ContainerNTec>
    );
};

export default ExampleTemplate;
