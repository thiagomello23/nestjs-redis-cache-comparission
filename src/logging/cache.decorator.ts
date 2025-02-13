import { Reflector } from '@nestjs/core';

// Indicates whether a route is using cache or not
export const Cache = Reflector.createDecorator<boolean>()