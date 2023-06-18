import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,Button
  } from '@chakra-ui/react'
  import { useState } from 'react'

const DeleteDialog = ({ isOpen, onClose, roomId, onDelete }) => {
    const cancelRef = React.useRef();

    const confirmDelete = async () => {
        try {
          await axios.delete(`http://localhost:3003/rooms/${roomId}`);
          onDelete(roomId);
          onClose();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
    
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={confirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  )
}

export default DeleteDialog