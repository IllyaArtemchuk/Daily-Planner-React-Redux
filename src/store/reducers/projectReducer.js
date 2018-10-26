const initState = {
  projects: [
    {id: '1', title: 'Movie Rating Search', Content: "filler content, will be added later"},
    {id: '2', title: 'Pokedex', Content: "filler content, will be added later"},
    {id: '3', title: 'Learn Django', Content: "filler content, will be added later"}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer;
