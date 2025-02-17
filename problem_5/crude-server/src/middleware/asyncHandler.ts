import express from 'express';

const asyncHandler = (fn: Function) => (req: express.Request, res: express.Response, next: express.NextFunction, ...args: any[]) => {
    Promise.resolve(fn(req, res, next, ...args)).catch(next);
};

export default asyncHandler;
  