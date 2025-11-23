// External deps
import clsx from 'clsx';

// Local deps
import './Notification.css';

export type NotificationType = 'info' | 'success' | 'error';

interface NotificationProps {
  message: string;
  type?: NotificationType;
}

const Notification = (props: NotificationProps) => {
  const {
    message,
    type = 'info',
  } = props;

  const typeClasses = clsx({
    'notification__info': type === 'info',
    'notification__success': type === 'success',
    'notification__error': type === 'error',
  });

  const prefix = type === 'success' ? 'Success: '
    : type === 'error' ? 'Error: '
      : '';

  return (
    <div
      className={clsx(
        "notification",
        typeClasses
      )}
    >
      {prefix && <span className={`notification__prefix--${type}`}>{prefix}</span>}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
