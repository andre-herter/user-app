export type InputType = "email" | "tel" | "url";

export type ValidationError = {
  isError: boolean;
  errorMessage: string;
  inputType?: InputType;
};
