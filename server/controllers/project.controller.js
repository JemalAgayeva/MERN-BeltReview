const Project = require('../models/project.model')


module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => { 
            console.log("finding all projects");
            res.json({ results: allProjects })
})
        .catch(err => res.json(err))
}

 
module.exports.createOneProject = (req, res) => {
    Project.create(req.body)
        .then(newlyCreateProject => {
            console.log("creating a project");
            res.json({ results: newlyCreateProject })
        })
        // .catch(err => res.json({ message: 'Something went wrong', error: err }));
        .catch(err => res.json(err));
}

module.exports.findAProject = (req, res) => {
    Project.findOne({_id: req.params.projectId})
    .then (project => {
        console.log("should get one project");
        res.json({results: project})
    })
    .catch(err => res.json(err))
}

module.exports.updateAProject = (req, res) => {
    Project.findOneAndUpdate (
        {_id: req.params.projectId},
        req.body,
        {new:true,
        runValidators:true})
    .then (updatedProject => {
        console.log("should update project");
        res.json({results: updatedProject})
    })
    .catch(err => res.json(err))
}

module.exports.deleteAProject = (req, res) => {
    Project.deleteOne({_id: req.params.projectId})
    .then (deleteProject => {
        console.log("should delete project");
        res.json({results: deleteProject})
    })
    .catch(err => res.json(err))

}

// module.exports.randomProject = (req, res) =>{
//     console.log("random")
//     Project.find()
//         .then (allProjects => {
//             // console.log("all quotes look like this", allProjects)
//             let maxindex=allProjects.length
//             console.log(Math.random(maxindex))
//             function getRandomInt(max){
//                 return Math.floor(Math.random()*Math.floor(max));
//             }
//             let randomNum = getRandomInt(maxindex)
//             console.log("random project: ", randomNum)
//             res.json({results: allProjects[randomNum]})
//         })
//         .catch(err => res.json(err))
// }





