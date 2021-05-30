import React from 'react';
import { useHistory, useParams } from 'react-router';

const Modal = ({ setShowModal, showModal, Children }) => {
    const history = useHistory();
    const { orderId } = useParams();

    const handleCloseModal = () => {
        setShowModal(false);
        if (orderId)
            history.goBack();
    }

    return (
        <div className={`modal__overlay ${showModal && "showModal"}`}>
            <div className="modal">
                <div className="closeBtn" onClick={handleCloseModal}>&#10005;</div>
                { <Children /> }
            </div>
        </div>
    )
}

export default Modal
