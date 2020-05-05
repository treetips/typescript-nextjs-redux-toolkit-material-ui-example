import { NextApiRequest, NextApiResponse } from "next"
import { Todo } from "../../../model"
import { ApiErrorResponse } from "../../../model/ApiErrorResponse"
import { testTodos } from "../../../model/TestData"

/**
 * TODO restful-api with path-parameter
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req

  try {
    res.setHeader("Content-Type", "application/json")

    // validation
    const idStr = String(id)
    if (!/^\d+$/.test(idStr)) {
      const error: ApiErrorResponse = {
        statusCode: 400,
        message: "Please enter the todo-id as a number.",
      }
      res.status(400).json(error)
      return
    }

    // find data
    const todoId = Number(idStr)
    const currentTodo = testTodos
      .filter((todo) => todo.id === todoId)
      .find((todo) => !!todo)
    if (!currentTodo) {
      const error: ApiErrorResponse = {
        statusCode: 404,
        message: `todo ${id} is not found.`,
      }
      res.status(404).json(error)
      return
    }

    switch (method) {
      case "GET":
        res.status(200).json(currentTodo)
        break
      case "PUT":
        const newTodo: Todo = body
        newTodo.updatedAt = new Date()
        testTodos[todoId] = body
        res.status(200).json(newTodo)
        break
      case "DELETE":
        const deleteTargetId = testTodos.findIndex((todo) => todo.id === todoId)
        testTodos.splice(deleteTargetId, 1)
        res.status(204).end()
        break
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"])
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
