{
  type Todo = { 
    subject: string, 
    tags: {
      [name: string]: boolean 
    }
    // tags is the index signature
  }

  const todo = { 
    subject: "Test", 
    tags: {
      important: true, 
      bug: false, 
      feature: true
    }
  } 

   // this creates a dictionarym so for tags doest import the name, only the structure
}