import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

export function error404Handler(next: NextFunction) {
	next(createError(NOT_FOUND));
}

export function errorHandler(err: any, req: Request, res: Response) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// sends the error to front
	res.status(err.status || SERVER_ERROR);
	res.send({
		status: 'error',
		errors: err.message,
	});
}
