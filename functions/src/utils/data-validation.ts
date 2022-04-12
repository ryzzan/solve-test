const validateSchema = async (schema: any, objectToValidate: any) => {
  const validation = schema.validate(objectToValidate);
  if (validation.error) {
    return {
      message: validation.error.details[0].message,
      data: objectToValidate,
      error: validation.error,
    };
  }
  return false;
};

export {
  validateSchema,
};

