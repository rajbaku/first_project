

const signup = (req,res)=>{
  res.status(201).json("Signup Successfully...!");
}

const getbill = (req,res)=>{
  res.status(200).json("Getbill Successfully..!")
}

module.exports={
    signup,
    getbill
};