/* eslint-disable @typescript-eslint/ban-types */
export function createStubInstance<TType>(
  constructor: Function & { prototype: TType },
): jest.MockedObject<TType> {
  if (typeof constructor !== 'function') {
    throw new TypeError('The constructor should be a function.');
  }

  const stubbedObject = {} as { [key in keyof TType]: unknown };
  const descriptors = Object.getOwnPropertyDescriptors(constructor.prototype);
  const methodNamesToStub = Object.keys(descriptors).filter(
    (methodName) => methodName !== 'constructor',
  ) as (keyof TType)[];

  for (const methodName of methodNamesToStub) {
    stubbedObject[methodName] = jest.fn();
  }

  return stubbedObject as jest.MockedObject<TType>;
}
