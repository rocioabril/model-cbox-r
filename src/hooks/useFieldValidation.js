import { useCallback, useEffect, useState } from "react";

const useFieldValidation = (value, validations) => {
  const [isValid, setIsValid] = useState(true);
  const [isValidated, setIsValidated] = useState(false);

  const validateField = useCallback(() => {
    if (!isValidated) return true;

    for (const validation of validations) {
      const isFieldValid = validation(value);
      if (!isFieldValid) {
        setIsValid(false);
        return false;
      }
    }
    setIsValid(true);
    return true;
  }, [value, validations, isValidated]);

  useEffect(() => {
    validateField();
  }, [validateField]);

  const startValidating = () => setIsValidated(true);

  return { isValid, validateField, startValidating };
};

export default useFieldValidation;