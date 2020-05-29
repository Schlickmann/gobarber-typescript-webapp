import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../context/ToastContext';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}
const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={20} />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;