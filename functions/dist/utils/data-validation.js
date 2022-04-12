"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = async (schema, objectToValidate) => {
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
exports.validateSchema = validateSchema;
//# sourceMappingURL=data-validation.js.map