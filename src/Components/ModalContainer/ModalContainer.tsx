import { Box, Modal } from '@mui/material'
import React, { FC } from 'react'

interface ModalContainerProps {
    children: React.ReactNode,
    open: boolean,
    handleClose: ()  =>  void
}

const ModalContainer: FC<ModalContainerProps> = ({ children, open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <span>
                {children}
            </span>
        </Modal>
    )
}

export default ModalContainer
