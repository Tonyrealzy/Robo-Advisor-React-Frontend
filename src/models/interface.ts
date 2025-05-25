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

export interface ApiResponse {
  error: string;
  status: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LogoutRequest {
  email: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface ChangePasswordRequest {
  new_password: string;
  token: string;
}

export interface SignUpRequest {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  username: string;
}

export interface SignupFormFields {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword?: string;
  username: string;
}

export interface ConfirmSignUpRequest {
  email: string;
  token: string;
}

export interface AISendRequest {
  age: number;
  amount: number;
  currency: string;
  investmentHorizon: number;
  investmentKnowledge: string;
  investmentPurpose: string;
  location: string;
  riskTolerance: string;
}

export interface GetByDateRequest {
  page?: number;
  limit?: number;
  from?: string;
  to?: string;
}

export interface GetByDaysRequest {
  days: number;
  page?: number;
  limit?: number;
}

export interface GetByTodayRequest {
  page?: number;
  limit?: number;
}
