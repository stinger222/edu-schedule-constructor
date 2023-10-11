import ky from "ky"
import { observer } from "mobx-react"
import { useState, useEffect, useContext, useRef } from "react"
import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import { Cookies } from "react-cookie"
import Button from "../../components/ui/Button/Button"
import { IClassSchedule } from "../../core/types/types"

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
  const updateClassWithIdInputRef = useRef<any>()
  const updateClassScheduleWithIdInputRef = useRef<any>()

  const fetchMe = async () => {
    try {
      const data = await ky.get("http://localhost:3001/users/me", {
        credentials: "include"
      }).json()
      setMe(data)
      return data
    } catch(err) { return }
  }

  // ============= Classes =============
  
  const addClass = async () => {
    try {
      const data = await ky.post(`http://localhost:3001/users/me/classes`, {
        credentials: "include",
        body: JSON.stringify({
          title: "(title) I was added using debug thing", 
          teacher: "(teacher) I was added using debug thing",
          cabinet: "(cabinet) I was added using debug thing",
          uid: Math.random().toString()
        }),
        headers: {
          "content-type": "application/json"
        }
      }).json()

      console.log("Trying to add new class. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  const updateClassWithId = async () => {
    try {
       await ky.put(`http://localhost:3001/users/me/classes/${updateClassWithIdInputRef.current.value}`, {
        credentials: "include",
        body: JSON.stringify({
          title: "(updated title) " + Math.random(), 
          teacher: "(updated teacher) " + Math.random(),
          cabinet: "(updated cabinet) " + Math.random()
        }),
        headers: {
          "content-type": "application/json"
        }
      }).json()
      fetchMe()
    } catch(err) { return }
  }

  const deleteClassWithId = async () => {
    try {
      const data = await ky.delete(`http://localhost:3001/users/me/classes/${deleteClassWithIdInputRef.current.value}`, {
        credentials: "include"
      }).json()
      console.log(`Trying to delete class with id:"${deleteClassWithIdInputRef.current.value}". Result: `, data)
      fetchMe()
      deleteClassWithIdInputRef.current.value = ""
    } catch(err) { return }
  }

  const deleteAllClasses = async () => {
    try {
      const data = await ky.delete(`http://localhost:3001/users/me/delete-all-classes`, {
        credentials: "include"
      }).json()
      console.log("Trying to delete all classes. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  // ============= Class Schdules =============

  const addClassSchedule = async () => {
    try {
      const data = await ky.post(`http://localhost:3001/users/me/class-schedules`, {
        credentials: "include",
        body: JSON.stringify({
          name: "new class schedule name" + Math.random().toFixed(5),
          classes: [
            {start: `${+Math.random().toFixed(0)+1}:00`, end:`${+Math.random().toFixed(0)*2+2}:00`}
          ],
          uid: Math.random().toString()
        } as IClassSchedule),
        headers: {
          "content-type": "application/json"
        }
      }).json()

      console.log("Trying to add new class schedule. Result: ", data)
      fetchMe()
    } catch(err) { return }
  }

  const updateClassSchedulesWithId = async () => {
    try {
      await ky.put(`http://localhost:3001/users/me/class-schedules/${updateClassScheduleWithIdInputRef.current.value}`, {
       credentials: "include",
       body: JSON.stringify({
        name: "(updated) class schedule name " + Math.random().toFixed(5),
        classes: [
          {start: `${+Math.random().toFixed(0)+1}:00`, end:`${+Math.random().toFixed(0)*2+2}:00`}
        ],
        uid: Math.random().toString()
      } as IClassSchedule),
       headers: {
         "content-type": "application/json"
       }
     }).json()
     fetchMe()
   } catch(err) { return }
  }

  const deleteClassScheduleWithId = async () => {
    try {
      const data = await ky.delete(`http://localhost:3001/users/me/class-schedules/${deleteClassScheduleWithIdInputRef.current.value}`, {
        credentials: "include"
      }).json()
      console.log(`Trying to delete class schedule with id:"${deleteClassScheduleWithIdInputRef.current.value}". Result: `, data)
      fetchMe()
      deleteClassScheduleWithIdInputRef.current.value = ""
    } catch(err) { return }
  }
  
  const deleteAllClassSchedules = async () => {
    try {
      const data = await ky.delete(`http://localhost:3001/users/me/delete-all-class-schedules`, {
        credentials: "include"
      }).json()
      console.log("Trying to delete all class schedules. Result: ", data)
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
      <div style={{width: "70em", margin: "0 auto", display: "flex", justifyContent: "space-between"}}>
        <div style={{flexBasis: "50%", height: "fit-content", borderRight: "2px solid lightgray", paddingRight: "2em"}}>
          <div>isAuthorized: <strong>{authStore.isSignedIn.toString()}</strong></div>
          <br/>

          <div>session_id cookie: <strong>{cookies.get("session_id")?.toString()}</strong></div>
          <br/>

          <div><strong>backend://users/me:</strong></div>
          <pre>{JSON.stringify(me, null, 2)}</pre>
          <br/>
        </div>
        
        <div style={{height: "75vh", overflowY: "auto", fontSize: "0.8em", paddingRight: "1em"}}>
          <Button onClick={addClass}>Add new class with random uid</Button>
          <br/><br/>
          <Button onClick={() => updateClassWithId()}>Update class with passed uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={updateClassWithIdInputRef}/>
          <br/><br/>
          <Button onClick={() => deleteClassWithId()}>Delete class with passed uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={deleteClassWithIdInputRef}/>
          <br/><br/>
          <Button onClick={deleteAllClasses}>Delete all classes</Button>

          <br/><br/>
          <br/><br/>

          <Button onClick={() => addClassSchedule()}>Add class schedule with random uid</Button>
          <br/><br/>
          <Button onClick={() => updateClassSchedulesWithId()}>Update class schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={updateClassScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={() => deleteClassScheduleWithId()}>Delete class schedule with uid</Button>
          <input placeholder="uid:" style={inputStyles} ref={deleteClassScheduleWithIdInputRef}/>
          <br/><br/>
          <Button onClick={() => deleteAllClassSchedules()}>Delete all class schedules</Button>
        </div>

      </div>
    </>
  )
}

export default observer(DebugPage)
