import { observer } from "mobx-react"
import { useState, useEffect, useContext, useRef } from "react"
import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import { Cookies } from "react-cookie"
import Button from "../../components/ui/Button/Button"
import { IAssembledSchedule, IClassSchedule } from "../../core/types/types"
import { api } from "../../api"

const DebugPage = () => {
  const { authStore } = useContext(StoreContext)
  const [me, setMe] = useState<any>()
  const cookies = new Cookies()

  const inputStyles = {
    border: "0.01em solid black",
    borderRadius: "0.35em",
    fontSize: "1.6em",
    width: "5em",
    marginLeft: "0.5em",
    paddingInline: "0.3em"
  }

  const deleteClassWithIdInputRef = useRef<any>()
  const deleteClassScheduleWithIdInputRef = useRef<any>()
  const deleteAssembledScheduleWithIdInputRef = useRef<any>()
  const updateClassWithIdInputRef = useRef<any>()
  const updateClassScheduleWithIdInputRef = useRef<any>()
  const updateAssembledScheduleWithIdInputRef = useRef<any>()

  const fetchMe = async () => {
    try {
      const data = await api.get("users/me").json()
      setMe(data)
      return data
    } catch(err) { return }
  }

  // ============= "Add" Requests =============
  
  const addClass = async () => {
    try {
      const data = await api
        .post(`users/me/classes`, {
          json: {
            title: "Name of the class here " + Math.random().toFixed(1),
            teacher: "Some Teacher Name Here " + Math.random().toFixed(1),
            cabinet: (Math.random() * 1000).toFixed(0) + "q",
            uid: Math.random().toString()
          }
        })
        .json()

      console.log("Trying to add new class. Result: ", data)
      fetchMe()
    } catch (err) {
      return
    }
  }

  const addClassSchedule = async () => {
    try {
      const data = await api
        .post(`users/me/class-schedules`, {
          json: {
            name: "New class schedule name" + Math.random().toFixed(5),
            classes: [
              { start: `${+Math.random().toFixed(0) + 1}:00`, end: `${+Math.random().toFixed(0) * 2 + 2}:00` }
            ],
            uid: Math.random().toString()
          } as IClassSchedule
        })
        .json()

      console.log("Trying to add new class schedule. Result: ", data)
      fetchMe()
    } catch (err) {
      return
    }
  }

  const addAssembledSchedule = async () => {
    try {
      const data = await api
        .post(`users/me/assembled-schedules`, {
          json: {
            name: "(new) some name",
            days: [
              {
                classIds: new Array(5).fill(0).map((i) => Math.random().toFixed(3).toString()),
                classScheduleId: Math.random().toFixed(3).toString()
              }
            ],
            uid: Math.random().toString()
          } as IAssembledSchedule
        })
        .json()

      console.log("Trying to add new class schedule. Result: ", data)
      fetchMe()
    } catch (err) {
      return
    }
  }

  // ============= "Update" Requests =============

  const updateClassWithId = async () => {
    try {
      await api
        .put(`users/me/classes/${updateClassWithIdInputRef.current.value}`, {
          json: {
            title: "Updated Name of the class " + Math.random().toFixed(1),
            teacher: "Updated Teacher Name Here " + Math.random().toFixed(1),
            cabinet: (Math.random() * 1000).toFixed(0) + "q"
          }
        })
        .json()
      fetchMe()
    } catch (err) {
      return
    }
  }

  const updateClassSchedulesWithId = async () => {
    try {
      await api
        .put(`users/me/class-schedules/${updateClassScheduleWithIdInputRef.current.value}`, {
          json: {
            name: "(updated) class schedule name " + Math.random().toFixed(5),
            classes: [
              { start: `${+Math.random().toFixed(0) + 1}:00`, end: `${+Math.random().toFixed(0) * 2 + 2}:00` }
            ]
          } as IClassSchedule
        })
        .json()
      fetchMe()
    } catch (err) {
      return
    }
  }

  const updateAssembledSchedule = async () => {
    try {
      await api
        .put(`users/me/assembled-schedules/${updateAssembledScheduleWithIdInputRef.current.value}`, {
          json: {
            name: "(updated) some new name",
            days: [{
              classIds: new Array(5).fill(0).map(i => Math.random().toFixed(3).toString()),
              classScheduleId: Math.random().toFixed(3).toString()
            }]
          } as IAssembledSchedule
        })
        .json()
     fetchMe()
   } catch(err) { return }
  }

  // ============= "Delete By Id" Requests =============

  const deleteClassWithId = async () => {
    try {
      const data = api
        .delete(`users/me/classes/${deleteClassWithIdInputRef.current.value}`)
        .json()

      console.log(`Trying to delete class with id:"${deleteClassWithIdInputRef.current.value}". Result: `, data)
      fetchMe()
      deleteClassWithIdInputRef.current.value = ""
    } catch(err) { return }
  }

  const deleteClassScheduleWithId = async () => {
    try {
      const data = await api
        .delete(`users/me/class-schedules/${deleteClassScheduleWithIdInputRef.current.value}`)
        .json()

      console.log(`Trying to delete class schedule with id:"${deleteClassScheduleWithIdInputRef.current.value}". Result: `, data)
      fetchMe()
      deleteClassScheduleWithIdInputRef.current.value = ""
    } catch(err) { return }
  }

  const deleteAssembledScheduleWithId = async () => {
    try {
      const data = await api
        .delete(`users/me/assembled-schedules/${deleteAssembledScheduleWithIdInputRef.current.value}`)
        .json()

      console.log(`Trying to delete assembled schedule with id:"${deleteAssembledScheduleWithIdInputRef.current.value}". Result: `, data)
      fetchMe()
      deleteAssembledScheduleWithIdInputRef.current.value = ""
    } catch(err) { return }
  }

  // ============= "Delete All" Requests =============

  const deleteAllClasses = async () => {
    try {
      const data = await api.
        delete(`users/me/delete-all-classes`)
        .json()

      console.log("Trying to delete all classes. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  const deleteAllClassSchedules = async () => {
    try {
      const data = await api
        .delete(`users/me/delete-all-class-schedules`)
        .json()

      console.log("Trying to delete all class schedules. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  const deleteAllAssembledSchedules = async () => {
    try {
      const data = await api
        .delete(`users/me/delete-all-assembled-schedules`)
        .json()

      console.log("Trying to delete all assembled schedules. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  useEffect(() => {
   (async () => {
     fetchMe()
   })()
  }, [])
  return (
    <>
      <Container>
        <Header>
          <Header.NavHome/>
          <h1>Debug Dashboard (kinda)</h1>
          <Header.BurgerButton/>
        </Header>
      </Container>
      <div style={{width: "73em", margin: "0 auto", display: "flex", justifyContent: "space-between"}}>
        <div style={{flexBasis: "50%", height: "fit-content", borderRight: "2px solid lightgray", paddingRight: "2em"}}>
          <div>isAuthorized: <strong>{authStore.isSignedIn.toString()}</strong></div>
          <br/>

          <div>session_id cookie: <strong>{cookies.get("session_id")?.toString()}</strong></div>
          <br/>

          <div><strong>backend://users/me:</strong></div>
          <pre>{JSON.stringify(me, null, 2)}</pre>
          <br/>
        </div>
        
        <div style={{height: "81vh", overflowY: "auto", fontSize: "0.8em", paddingRight: "1em"}}>
          <h2>Classes controlls:</h2>
          <br/>
          <Button onClick={addClass}>Add new class with random uid</Button>
          <br/><br/>
          <Button onClick={updateClassWithId}>Update class with passed uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={updateClassWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteClassWithId}>Delete class with passed uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={deleteClassWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteAllClasses}>Delete all classes</Button>

          <br/><br/>
          <br/><br/>
          <h2>Class Schedules controlls:</h2>
          <br/>

          <Button onClick={addClassSchedule}>Add class schedule with random uid</Button>
          <br/><br/>
          <Button onClick={updateClassSchedulesWithId}>Update class schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={updateClassScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteClassScheduleWithId}>Delete class schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={deleteClassScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteAllClassSchedules}>Delete all class schedules</Button>

          <br/><br/>
          <br/><br/>
          <h2>Assembled Schedules controlls:</h2>
          <br/>

          <Button onClick={addAssembledSchedule}>Add assembled schedule with random uid</Button>
          <br/><br/>
          <Button onClick={updateAssembledSchedule}>Update assembled schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={updateAssembledScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteAssembledScheduleWithId}>Delete assembled schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={deleteAssembledScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteAllAssembledSchedules}>Delete all assembled schedules</Button>
        </div>

      </div>
    </>
  )
}

export default observer(DebugPage)
