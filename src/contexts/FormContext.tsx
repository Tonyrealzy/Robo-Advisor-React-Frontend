import { createContext, useContext, useState } from "react";

interface Form {
  age: number;
  amount: number;
  currency: string;
  investmentHorizon: number;
  investmentKnowledge: string;
  investmentPurpose: string;
  location: string;
  riskTolerance: string;
}

interface FormContextType {
  form: Form;
  // saveForm: () => void;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider = ({ children }: FormProviderProps) => {
  const [form, setForm] = useState<Form>({
    age: 0,
    amount: 0,
    currency: "",
    investmentHorizon: 0,
    investmentKnowledge: "",
    investmentPurpose: "",
    location: "",
    riskTolerance: "",
  });

  // const saveForm = (e) => {
  //   setForm();
  // };

  return (
    <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
  );
};

const useQuestionForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useGetProfile must be used within an AuthProvider");
  }
  return context;
};

export { FormProvider, useQuestionForm };
