import React from 'react';
import NavBarNTec from 'components/navbar';
import ContainerNTec from 'components/container';
import Aside from 'components/aside';
import MainNTec from 'components/main';
import PiuNTec from 'components/piu';

const ExampleTemplate = () => {
    return (
        <ContainerNTec>
            <NavBarNTec />
            <MainNTec>
                <PiuNTec />
            </MainNTec>
            <Aside />
        </ContainerNTec>
    );
};

export default ExampleTemplate;
