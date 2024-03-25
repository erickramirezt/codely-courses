import { useState } from "react";

export const useFormData = <T>(
  initialState: T
): {
  formData: T;
  updateFormData: (value: Partial<T>) => void
  resetFormData: () => void
} => {
  const [formData, setFormData] = useState<T>(initialState)

  const updateFormData = (value: Partial<T>) => {
    setFormData((prev) => ({ ...prev, ...value }))
  }

  const resetFormData = () => {
    setFormData(initialState)
  }

  return { formData, updateFormData, resetFormData }
}
