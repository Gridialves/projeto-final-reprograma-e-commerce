const { connect } = require('./apizRepository')
const bazarModel = require('./apizSchema')

connect()

const getAll = async () => {
  return bazarModel.find((error, bazar) => {
    return bazar
  })
}

const getById = (id) => {
  return bazarModel.findById(id) 
}


const add =  (clothes) => {
  const newClothes = new bazarModel(clothes)
  return newClothes.save()
}


const remove = (id) => {
  return bazarModel.findByIdAndDelete(id)
}

const update = (id, clothes) => {
  return bazarModel.findByIdAndUpdate(
    id,
    { $set: clothes },
    { new: true }
  )
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}