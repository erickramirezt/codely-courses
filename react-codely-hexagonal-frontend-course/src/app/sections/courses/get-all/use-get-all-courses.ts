import { useState } from "react";
import { ActionStatus } from "../../shared/use-form-data";
import { useCoursesContext } from "../shared/course-context";

export function useGetCourses(): {
  actionStatus: ActionStatus
  getCourses: () => Promise<void>
  error: string
} {
  const [actionStatus, setActionStatus] = useState<ActionStatus>(ActionStatus.Initial)
  const [error, setError] = useState<string>('')
  const { getAllCourses } = useCoursesContext()

  async function getCourses() {
    setActionStatus(ActionStatus.Loading)

    try {
      await getAllCourses()
      setActionStatus(ActionStatus.Success)
    } catch (error) {
      setActionStatus(ActionStatus.Error)
      setError((error as Error).message)
    }
  }

  return { actionStatus, getCourses, error }
}