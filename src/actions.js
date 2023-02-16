import { redirect } from "react-router-dom";
import url from "./url";


// CREATE ACTION
export async function CreateAction ({request}){
    // Get form data
    const formData = await request.formData()

    //construct request body
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    // redirect back to index page
    return redirect("/")
}
////////////////////////////////////////////////////////////

// UPDATE ACTION
export async function UpdateAction ({ request, params }){
    // Get form data
    const formData = await request.formData()

    //construct request body
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    // redirect back to index page
    return redirect("/")
}

////////////////////////////////////////////////////////////

// DELETE ACTION
export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}