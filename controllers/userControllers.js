const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const userControllers = {

    signUpUser: async (req,res) => { //controlador del usuario nuevo
        //console.log(req.body) //vemos los datos que necesitamos
        let {name, lastName, email, password, from, userPhoto, country} = req.body.userData //requerimos los datos del formulario
        const test = req.body.test
        try {
            const myTUser = await User.findOne({email}) //esperamos a que encuentre el mail dentro de lo usuarios
            //console.log(myTUser)
            if (myTUser) { //si el mail ya fue registrado, entonces myTUser existe
                //console.log('this number is:'+myTUser.from.indexOf(from))
                if (myTUser.from.indexOf(from) === 0) { //si ya fue registrado por este medio (formulario)
                    res.json({
                        success: false,
                        from: "SignUpForm",
                        message: `user ${email} already exists, please LOG IN!`}) //avisa que ya existe
                } else { //si fue registrado por otros medios (google, face)
                    const hashWord = bcryptjs.hashSync(password, 10) //encriptamos la contraseña
                    myTUser.from.push(from) //pusheamos "desde donde se ingresa" (en el modelo se define como un array)
                    myTUser.password.push(hashWord) //pusheamos la contraseña encriptada (tambien es unn array)
                    if (from === "SignUpForm") { //si el ingreso es desde el formulario
                        myTUser.uniqueString = crypto.randomBytes(15).toString('hex') //agrego la propiedad y le asigno un nuevo "codigo/contraseña/token"
                        await myTUser.save() //esperamos el guardado del usuario
                        await sendEmail(email, myTUser.uniqueString) //esperamos el envío del mail
                        res.json({
                            success: true, 
                            from: "SignUpForm", 
                            message: `check ${email}! we send you a mail to confirm your SIGN UP!`}) //avisa que confirme el mail
                    } else { //si el ingreso es por otros medios (google, face)
                        myTUser.save() //guardamos el modelo              
                        res.json({
                            success: true,
                            from:"externalSignUp", 
                            message: `user exist! LOG IN please!`})
                    }
                }
            } else { //si el mail no fue registrado
                const hashWord = bcryptjs.hashSync(password, 10) //encriptamos la contraseña
                const myNewTUser = await new User({ //generamos un nuevo modelo de usuario
                    name,
                    lastName,
                    email,
                    password: [hashWord],
                    from: [from],
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    userPhoto,
                    country,
                    verification: false})
                if (from === "SignUpForm") { //si el nuevo usuario proviene del formulario
                    await myNewTUser.save() //esperamos el guardado del usuario
                    await sendEmail(email, myNewTUser.uniqueString) //esperamos el envío del mail
                    res.json({
                        success: true, 
                        from:"SignUpForm",
                        message: `check ${email} and finish your SIGN UP!`}) //avisa que confirme el mail
                //SI ES POR OTROS MEDIOS
                //SI ES POR OTROS MEDIOS
                //SI ES POR OTROS MEDIOS
                    } else { //si el nuevo usuario proviene de otros medios (google, face)
                    await myNewTUser.save() //esperamos el guardado del usuario
                    res.json({
                        success: true, 
                        from:"externalSignUp",
                        message: `you SIGN UP by ${from}! now LOG IN!`})
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! try in a few minutessssssssssssssssssss!"})
        }
    },

    logInUser: async (req, res) => { //controlador del inicio de sesion en nuestra webapp
        const {email, password, from} = req.body.userLogin
        try {
            const myTUser = await User.findOne({email}) //esperamos a que encuentre el mail dentro de lo usuarios
            if (!myTUser) { //si el mail no existe
                res.json({success: false, message: `${email} has no account in MyTinerary, please SIGN UP!`})
            } else { //si existe el mail
                if (from === "LogInForm") { //si el ingreso es desde el formulario
                    if (myTUser.verification ) { //si el usuario ya fue validado
                        let checkedWord =  myTUser.password.filter(pass => bcryptjs.compareSync(password, pass)) //comparamos la contraseña
                        //console.log(checkedWord)
                        //console.log("resultado de busqueda de contraseña: " +(checkedWord.length >0))
                        if (checkedWord.length > 0) { //si hay mas de una coincidencia con la contraseña de la base de datos
                            const userData = { //definimos una variable con los datos del usuario
                                id: myTUser._id,
                                name: myTUser.name,
                                email: myTUser.email,
                                userPhoto: myTUser.userPhoto,
                                from: myTUser.from}
                            //console.log(userData)
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 }) //generamos un token que expira en un día
                            res.json({
                                success: true, 
                                from: from, 
                                response: {token, userData}, 
                                message: `welcome back ${userData.name}!`})
                        } else { //si no hay coincidencias
                            res.json({ success: false, 
                                from: from,  
                                message: `verify your password!`})
                        }
                    } else { //si el usuario no fue validado
                        res.json({
                            success: false, 
                            from: from, 
                            message:`check ${email}! confirm your SIGN UP and LOG IN!`}) 
                    }
                //SI ES POR OTROS MEDIOS
                //SI ES POR OTROS MEDIOS
                //SI ES POR OTROS MEDIOS
                } else { //si el  usuario ingresa por otros medios (google, face)
                    let checkedWord =  myTUser.password.filter(pass => bcryptjs.compareSync(password, pass)) //comparamos la contraseña
                    if (checkedWord.length > 0) { //si hay mas de una coincidencia con la contraseña de la base de datos
                        const userData = { //definimos una variable con los datos del usuario
                            id: myTUser._id,
                            name: myTUser.name, 
                            email: myTUser.email,
                            userPhoto: myTUser.userPhoto,
                            from: myTUser.from}
                        //console.log(userData)
                        await myTUser.save()
                        const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 }) //generamos un token que expira en un día
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message: `welcome back ${userData.name}!`})
                    } else { //si no hay coincidencias
                        res.json({ success: false, 
                            from: from,  
                            message: `there is no register from ${from}, please SIGN UP`})
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "sorry! try in a few minutes!"})
        }
    },

    signOutUser: async (req, res) => { //controlador del cierre de sesion
        const email = req.body.closeData
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log(email+' sign out!'))
    },

    verifyToken:(req, res) => {
        //console.log(req.user)
        if (!req.err) {
        res.json({
            success: true,
            response: {id: req.user.id,
                name:req.user.name,
                email:req.user.email,
                userPhoto:req.user.userPhoto,
                from:"token"},
            message:"Hi! Welcome back "+req.user.name}) 
        } else {
            res.json({
                success:false,
                message:"sign in please!"}) 
        }
    },

    verifyEmail: async (req, res) => { //controlador de la verificacion del email
        const {uniqueString} = req.params; //requerimos el codigo del link (del mail)
        const user = await User.findOne({uniqueString: uniqueString}) //esperamos que encuentre el codigo en el modelo
        //console.log(user)
        if (user) {
            user.verification = true //cambiamos el booleano para que verifique el mail
            await user.save()
            res.redirect("https://mytinerary-borraz.herokuapp.com/welcome") //redirigimos a la pagina principal
        }
        else { res.json({success: false, response: `email has not been confirmed yet!`}) }
    }

}

const sendEmail = async (email, uniqueString) => {
    const transporter = nodemailer.createTransport({ //definimos desde donde se envía el mail
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "ignaciojavierborraz@gmail.com",
            pass: "Ign@1080"
        }
    })
    let mailOptions = { //definimos el mail que se enviará
        from: 'ignaciojavierborraz@gmail.com',
        to: email,
        subject: "verify MyTinerary account", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
        html: `
        <div>
            <h1><a href=https://mytinerary-borraz.herokuapp.com/api/verify/${uniqueString} style="color:red">CLICK!</a> to confirm you account.</h1>
            <h2>Thanks for signing up!</h2>
            <br>
            <h3>FIND YOUR PERFECT TRIP</h3>
            <h4>designed by insiders who know and love their cities!</h4>
        </div>
        `};
    await transporter.sendMail(mailOptions, function (error, response) { //esperamos el envío del mail
        if (error) { console.log(error) }
        else {
            console.log(`check ${email} to confirm your account`)
        }
    })
}

module.exports = userControllers
