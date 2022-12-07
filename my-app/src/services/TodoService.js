export const getAllTodos = async () => {

    const response = await fetch('/api2/todos')
    // .then((res)=> console.log(res.json()));
    // await fetch('/api/books')
    // .then(res => console.log(res))
    console.log(await response.json())
    // return await response.json();
}

export const createTodo = async (data) => {
    console.log(data)
    const response = await fetch('/api2/todo', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({book: data})
      }
    //   .then((res)=>console.log(res)) 
      )
    // return await response.json();
}

///api2/todos