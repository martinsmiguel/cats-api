import React from 'react';
import {
    ModalContainer,
    ModalContent,
    ModalTitle,
    ModalCloseButton,
    ModalCloseIcon,
    ModalDescription,
    ModalInfo,
    ModalInfoLabel,
    ModalInfoText
} from './styles';
import { CatImage } from '../../modules/Home/screens/Initial/styles';

const Modal = ({ cat, onClose }) => (
    <ModalContainer>
        <ModalContent>
            <ModalTitle>{cat?.name}</ModalTitle>
            {cat?.image && <CatImage source={{ uri: cat?.image }} />}
            <ModalDescription>{cat?.description}</ModalDescription>
            <ModalInfo>
                <ModalInfoLabel>Origin:</ModalInfoLabel>
                <ModalInfoText>{cat?.origin}</ModalInfoText>
            </ModalInfo>
            <ModalInfo>
                <ModalInfoLabel>Life Span:</ModalInfoLabel>
                <ModalInfoText>{cat?.life_span}</ModalInfoText>
            </ModalInfo>
            <ModalCloseButton onPress={onClose}>
                <ModalCloseIcon name="close" />
            </ModalCloseButton>
        </ModalContent>
    </ModalContainer>
);


export default Modal;
