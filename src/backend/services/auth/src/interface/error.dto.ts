export interface ErrorDto {
  status: number;
  error: {
    title: string;
    description: string;
  };
}
