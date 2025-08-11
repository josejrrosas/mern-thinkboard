

export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes.");
}

export const createNote = (req, res) => {
  res.status(201).send("note created successfully.");
}

export const updateNote = (req, res) => {
  res.status(200).send("note updated successfully.");

}
export const deleteNote = (req, res) => {
  res.status(200).send("note deleted successfully.");
}