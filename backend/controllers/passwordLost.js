const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const User = require('../models/user_model')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ekpkomi@gmail.com',
    pass: ''
  }
})

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

async function passwordLost (req, res) {
  if (req.session.userId) {
    res.status(200).json('Already authenticated')
    return
  }

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // on vérifie l'email et le mot de passe de l'utilisateur
  let user = await User.getByEmail(req.params.email, ['id', 'name'])
  console.log('email==', user)
  // si on a trouvé un utilisateur correspondant, alors on sauvegarde son ID
  // dans l'objet req.session
  if (!user) {
    res.status(400).json('User doesn\'t exite!')
    return
  }
  const resetPass = randomStr(8, ['GERDPSAZERDFCCSSFM0342452'])
  console.log(resetPass)
  const hashedPassword = await bcrypt.hash(resetPass, 10)

  user = await User.update(user.id, hashedPassword)
  if (user && user.id) {
    //
    var mailOptions = {
      from: 'ekpkomi@gmail.com',
      to: req.body.email,
      subject: 'MyPerfectList : Reset Password',
      text: req.body.message,
      html: '<b>Your new password is : ' + resetPass + '</b>'
    }
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
    res.status(200).json('The password is reseted successfully!')
    return
  }
  res.status(400).json('System error')
}

function randomStr (len, arr) {
  var ans = ''
  for (var i = len; i > 0; i--) {
    ans +=
        arr[Math.floor(Math.random() * arr.length)]
  }
  return ans
}

module.exports = passwordLost
