import ky from "ky"
import { observer } from "mobx-react"
import { useState, useEffect, useContext, useRef } from "react"
import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import { Cookies } from "react-cookie"
import Button from "../../components/ui/Button/Button"

const DebugPage = () => {
  const { authStore } = useContext(StoreContext)
  const [me, setMe] = useState<any>()
  const cookies = new Cookies()

  const inputStyles = {
    border: "1px solid black",
    borderRadius: "5px",
    fontSize: "1.6em",
    width: "5em",
    marginLeft: "0.5em",
    paddingInline: "0.3em"
  }

  const deleteClassWithIdInputRef = useRef<any>()
  const updateClassWithIdInputRef = useRef<any>()

  const fetchMe = async () => {
    try {
      const data = await ky.get("http://localhost:3001/users/me", {
        credentials: "include"
      }).json()
      setMe(data)
      return data
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
  
  useEffect(() => {
   (async () => {
     fetchMe()
   })()
  }, [])

  return (
    <Container>
      <Header>
        <Header.NavHome/>
        <h1>Debug Dashboard (kinda)</h1>
        <Header.BurgerButton/>
      </Header>
      
      <h1>isAuthorized: {authStore.isSignedIn.toString()}</h1>

      <br/>
      <br/>

      <h1>session_id cookie: {cookies.get("session_id")?.toString()}</h1>

      <br/>
      <br/>

      <h1>backend://users/me:</h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      
      <br/>
      <br/>

      <Button onClick={addClass}>Add new class with random uid</Button>
      <br/>
      <br/>
      <Button onClick={() => updateClassWithId()}>Update class with passed uid</Button>
      <input placeholder="uid:" style={inputStyles} ref={updateClassWithIdInputRef}/>
      <br/>
      <br/>
      <Button onClick={deleteAllClasses}>Delete all classes</Button>
      <br/>
      <br/>
      <Button onClick={() => deleteClassWithId()}>Delete class with passed uid</Button>
      <input placeholder="uid:" style={inputStyles} ref={deleteClassWithIdInputRef}/>
      
    </Container>
  )
}

export default observer(DebugPage)
