const createShift = async (req, res) => {
    res.send('create shift')
}

const getAllShifts = async (req, res) => {
    res.send('get all shifts')
}

const updateShift = async (req, res) => {
    res.send('update shift')
}

const deleteShift = async (req, res) => {
    res.send('delete shift') 
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export { createShift, getAllShifts, updateShift, deleteShift, showStats }