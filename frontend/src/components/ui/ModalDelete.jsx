import React from 'react'
import { Modal, Button } from 'react-bootstrap'
export default function ModalDelete({ show, onClose, onConfirm }) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar acción</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>¿Estás seguro de que querés eliminar este libro?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
