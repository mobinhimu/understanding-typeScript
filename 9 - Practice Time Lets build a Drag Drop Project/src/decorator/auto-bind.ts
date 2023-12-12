// /Property Decorator

export function AutoBind(
  _: any,
  _2: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  const adjDecorator: PropertyDescriptor = {
    get() {
      return originalMethod.bind(this);
    },
  };

  return adjDecorator;
}
