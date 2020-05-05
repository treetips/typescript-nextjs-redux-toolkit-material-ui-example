import { NextApiRequest, NextApiResponse } from "next"
import { Todo } from "../../../model"
import { ApiErrorResponse } from "../../../model/ApiErrorResponse"
import { testTodos } from "../../../model/TestData"

/**
 * TODO restful-api
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  try {
    res.setHeader("Content-Type", "application/json")

    switch (method) {
      case "GET":
        res.status(200).json(testTodos)
        break
      case "POST":
        if (!body) {
          const error: ApiErrorResponse = {
            statusCode: 400,
            message: `Request body is required.`,
          }
          res.status(400).json(error)
          return
        }

        const newTodo: Todo = body
        const lastTodo = testTodos.slice(-1)[0]
        newTodo.id = lastTodo.id + 1
        newTodo.createdAt = new Date()
        newTodo.updatedAt = new Date()
        testTodos.push(newTodo)
        res.status(201).json(newTodo)
        break
      default:
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).end(`Method ${method} Not Allowed`)
        break
    }
  } catch (e) {
    const error: ApiErrorResponse = {
      statusCode: 500,
      message: `Internal server error. ${e}`,
    }
    res.status(500).json(error)
  }
}
