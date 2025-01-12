import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const ErrorToast = ({ message, show, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000
      }}
    >
      <Toast 
        show={show} 
        onClose={onClose}
        bg="danger"
        delay={3000}
        autohide
      >
        <Toast.Header closeButton>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          {message}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ErrorToast;