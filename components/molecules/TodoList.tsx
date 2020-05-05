import MaterialTable from "material-table"
import React, { useEffect } from "react"
import { useTodo } from "../../hooks"

type Props = {}

/**
 * TODO list
 * @param props Props
 */
export const TodoList = function (props: Props) {
  const {} = props
  const {
    isFetching,
    fetchAllTodos,
    addTodo,
    editTodo,
    deleteTodo,
    todos,
  } = useTodo()

  useEffect(() => {
    fetchAllTodos()
  }, [])

  return (
    <MaterialTable
      title="TODO List"
      columns={[
        { title: "id", field: "id", type: "numeric", editable: "never" },
        { title: "name", field: "name" },
        { title: "complete", field: "complete", type: "boolean" },
        {
          title: "create time",
          field: "createdAt",
          type: "datetime",
          editable: "never",
        },
        {
          title: "update time",
          field: "updatedAt",
          type: "datetime",
          editable: "never",
        },
      ]}
      options={{
        actionsColumnIndex: 99,
        search: true,
      }}
      data={todos}
      isLoading={isFetching}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            addTodo({
              todo: newData,
            })
              .then(() => resolve(todos))
              .catch((e) => reject(e))
          }),
        onRowUpdate: (newData, _) =>
          new Promise((resolve, reject) => {
            editTodo({
              todo: newData,
            })
              .then((payload) => resolve(payload))
              .catch((e) => reject(e))
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            deleteTodo({
              id: oldData.id,
            })
              .then(() => resolve(todos))
              .catch((e) => reject(e))
          }),
      }}
    />
  )
}
