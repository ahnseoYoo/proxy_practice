
export const getAllBooks = async () => {

    const response = await fetch('/api/books')
    // .then((res)=> console.log(res.json()));
    // await fetch('/api/books')
    // .then(res => console.log(res))
    // console.log(await response.json())
    return await response.json();
}

export const createBook = async (data) => {
    console.log(data)
    const response = await fetch('/api/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({book: data})
      }
    //   .then((res)=>console.log(res)) 
      )
    return await response.json();
}