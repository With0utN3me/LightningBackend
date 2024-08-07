class HttpError extends Error {
  constructor(status, message) {
    super(message || messageList[status]);
    this.status = status;
    this.name = this.constructor.name; // Устанавливаем имя ошибки
    Error.captureStackTrace(this, this.constructor); // Сохраняем стек вызовов
  }
}

const messageList = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

export { HttpError };
