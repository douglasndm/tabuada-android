import React from 'react';

import { ButtonContainer, BackButtonImage } from './styles';

interface RequestProps {
    handleOnPress?: () => void;
    color?: string;
}

const BackButton: React.FC<RequestProps> = ({
    handleOnPress,
    color,
}: RequestProps) => (
    <ButtonContainer onPress={handleOnPress} rippleColor="red">
        {color ? <BackButtonImage color={color} /> : <BackButtonImage />}
    </ButtonContainer>
);

export default BackButton;
