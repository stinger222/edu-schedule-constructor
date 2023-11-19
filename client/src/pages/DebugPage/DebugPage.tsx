import { observer } from "mobx-react"
import { useState, useEffect, useContext, useRef } from "react"
import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import Button from "../../components/ui/Button/Button"
import { api } from "../../api"
import { Link } from "react-router-dom"

const DebugPage = () => {
  const { authStore } = useContext(StoreContext)
  const [me, setMe] = useState<any>()

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

  const fetchMe = () => {
    api.get("users/me").then(response => {
      setMe(response.data)
    })
  }

  // ============= "Add" Requests =============
  
  const addClass = () => {
    api
      .post(`users/me/classes`, {

        title: "Name of the class here " + Math.random().toFixed(1),
        teacher: "Some Teacher Name Here " + Math.random().toFixed(1),
        cabinet: (Math.random() * 1000).toFixed(0) + "q",
        uid: Math.random().toString()
      })
      .then(response => {
        console.log("Trying to add new class. Result: ", response.data)
        fetchMe()
      })
  }

  const addClassSchedule = () => {
    api
      .post(`users/me/class-schedules`, {
        name: "New class schedule name " + Math.random().toFixed(5),
        classes: [
          { start: `${+Math.random().toFixed(0) + 1}:00`, end: `${+Math.random().toFixed(0) * 2 + 2}:00` }
        ],
        uid: Math.random().toString()
      })
      .then(response => {
        console.log("Trying to add new class schedule. Result: ", response.data)
        fetchMe()
      })
  }

  const addAssembledSchedule = () => {
      api
      .post(`users/me/assembled-schedules`, {
        name: "(new) some name",
        days: [
          {
            classIds: new Array(5).fill(0).map((i) => Math.random().toFixed(3).toString()),
            classScheduleId: Math.random().toFixed(3).toString()
          }
        ],
        uid: Math.random().toString()
      })
      .then(response => {
        console.log("Trying to add new class schedule. Result: ", response)
        fetchMe()
      })
  }

  // ============= "Update" Requests =============

  const updateClassWithId = () => {
    api
      .put(`users/me/classes/${updateClassWithIdInputRef.current.value}`, {
        title: "Updated Name of the class " + Math.random().toFixed(1),
        teacher: "Updated Teacher Name Here " + Math.random().toFixed(1),
        cabinet: (Math.random() * 1000).toFixed(0) + "q"
      })
      .then(response => {
        fetchMe()
      })
}

  const updateClassSchedulesWithId = () => {
    api
      .put(`users/me/class-schedules/${updateClassScheduleWithIdInputRef.current.value}`, {
        name: "(updated) class schedule name " + Math.random().toFixed(5),
        classes: [
          { start: `${+Math.random().toFixed(0) + 1}:00`, end: `${+Math.random().toFixed(0) * 2 + 2}:00` }
        ]
      })
      .then(() => {
        fetchMe()
      })
  }

  const updateAssembledSchedule = () => {
    
    api
      .put(`users/me/assembled-schedules/${updateAssembledScheduleWithIdInputRef.current.value}`, {
        name: "(updated) some new name",
        days: [{
          classIds: new Array(5).fill(0).map(i => Math.random().toFixed(3).toString()),
          classScheduleId: Math.random().toFixed(3).toString()
        }]
      })
      .then(() => {
        fetchMe()
      })
  }

  // ============= "Delete By Id" Requests =============

  const deleteClassWithId = () => {
    api
      .delete(`users/me/classes/${deleteClassWithIdInputRef.current.value}`)
      .then(response => {
        console.log(`Trying to delete class with id:"${deleteClassWithIdInputRef.current.value}". Result: `, response.data)
        fetchMe()
        deleteClassWithIdInputRef.current.value = ""
      })
  }

  const deleteClassScheduleWithId = () => {
    api
      .delete(`users/me/class-schedules/${deleteClassScheduleWithIdInputRef.current.value}`)
      .then(response => {
        console.log(`Trying to delete class schedule with id:"${deleteClassScheduleWithIdInputRef.current.value}". Result: `, response.data)
        fetchMe()
        deleteClassScheduleWithIdInputRef.current.value = ""
      })
  }

  const deleteAssembledScheduleWithId = () => {
    api
      .delete(`users/me/assembled-schedules/${deleteAssembledScheduleWithIdInputRef.current.value}`)
      .then(response => {
        console.log(`Trying to delete assembled schedule with id:"${deleteAssembledScheduleWithIdInputRef.current.value}". Result: `, response.data)
        fetchMe()
        deleteAssembledScheduleWithIdInputRef.current.value = ""
      })
  }

  // ============= "Delete All" Requests =============

  const deleteAllClasses = () => {
    api.
      delete(`users/me/delete-all-classes`)
      .then(response => {
        console.log("Trying to delete all classes. Result: ", response.data)
        fetchMe()
      })
  }

  const deleteAllClassSchedules = () => {
    api
      .delete(`users/me/delete-all-class-schedules`)
      .then(response => {
        console.log("Trying to delete all class schedules. Result: ", response.data)
        fetchMe()
      })
  }

  const deleteAllAssembledSchedules = () => {
    api
      .delete(`users/me/delete-all-assembled-schedules`)
      .then(response => {
        console.log("Trying to delete all assembled schedules. Result: ", response.data)
        fetchMe()
      })
  }

  useEffect(() => {
   (() => {
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
        <div style={{flexBasis: "50%", maxWidth: "40em", height: "fit-content", borderRight: "2px solid lightgray", paddingRight: "2em"}}>
          <div>isAuthorized: <strong>{authStore.isSignedIn?.toString() || null}</strong></div>
          <br/>

          <div><strong>backend://users/me:</strong></div>
          <pre>{JSON.stringify(me, null, 2)}</pre>
          <br/>
        </div>
        
        <div style={{height: "81vh", overflowY: "auto", fontSize: "0.8em", paddingInline: "1em", minWidth: "45em"}}>
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

          <br/><br/>
          <br/><br/>
          <h2>Root Protection Tests:</h2>
          <br/>

          <Link to="/"> / </Link> <br/>
          <Link to="/assembled"> assembled </Link> <br/>
          <Link to="/classes"> classes </Link> <br/>
          <Link to="/class-schedules"> class-schedules </Link> <br/>
          <Link to="/debug"> debug (should work, obviously...) </Link> <br/>
          <Link to="/add/assembled"> /add/assembled </Link> <br/>
          <Link to="/add/class"> /add/class </Link> <br/>
          <Link to="/add/class-schedules"> /add/class-schedules </Link> <br/>
          <br/><br/>
          <br/><br/>
        </div>

      </div>
    </>
  )
}

export default observer(DebugPage)
