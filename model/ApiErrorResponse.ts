/**
 * Api error response
 */
export type ApiErrorResponse = {
  statusCode: number
  message: string
  error?: Error
}
