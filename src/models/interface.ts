export interface FormQuestions {
  id: number;
  text: string;
  name: string;
  options: FormOptions[];
}

export interface FormOptions {
  label: string;
  value: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface QuestionnaireData {
  age: number;
  investment_purpose: string;
  investment_horizon: string;
  investment_knowledge: string;
  risk_tolerance: string;
  amount: string;
  currency: string;
  location: string;
}

export interface FinancialProduct {
  financial_product: string;
  ticker: string;
  provider: string;
  brief_description: string;
  expectedReturn: string;
  composition: string;
  estimatedReturnValue: number;
  principal: number;
  currency: string;
}

export interface ResponseList {
  response_list: FinancialProduct[];
}

export interface SignUp {
  email: string;
  username: string;
  password: string;
}
