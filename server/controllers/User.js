export const update = async (req,res, next)=>{
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:res.body
            })
            res.status(200).json(updatedUser )
        } catch (err) {
            next(err)
        }
    }
    else{
        return next(createError(403, "Can't update other accounts"))
    }
}

export const deleteUser = (req,res, next)=>{
    res.json("Its successfull")
}
export const getUser = (req,res, next)=>{
    res.json("Its successfull")
}
export const subscribe = (req,res, next)=>{
    res.json("Its successfull")
}
export const unsubscribe = (req,res, next)=>{
    res.json("Its successfull")
}
export const like = (req,res, next)=>{
    res.json("Its successfull")
}
export const dislike = (req,res, next)=>{
    res.json("Its successfull")
}

