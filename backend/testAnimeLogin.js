const superagent = require('superagent')
const agent = superagent.agent()

async function logToMALCount () {
  let html = await agent.get('https://myanimelist.net/login.php?from=%2F')
  const temp = html.res
  html = html.text
  let indexStart = html.search('<meta name=\'csrf_token\'')
  let indexEnd = html.indexOf('\'>', indexStart)
  let result = html.substring(indexStart, indexEnd + 2)
  // console.log(result)
  indexStart = result.search('content=\'')
  indexEnd = result.indexOf('\'>', indexStart)
  result = result.substring(indexStart + 9, indexEnd)
  console.log('tok==', result)
  // const cookie = 'MALHLOGSESSID=4f1dadcdc9b62b6df896b0fe39490bd6; _ga=GA1.2.950383284.1592982731; _rdt_uuid=1592982731310.da1363ff-77d3-483a-8b6a-406288226f3d; _fbp=fb.1.1592982731425.1201494846; d7s_uid=kbt0snku2prqsk; m_gdpr_mdl_2=1; anime_update_advanced=0; crfgL0cSt0r=true; __gads=ID=4c04236d99c80456:T=1593070435:S=ALNI_MbWqE-8EXoOC2XsUASfa08OCwqnbg; trc_cookie_storage=taboola%2520global%253Auser-id%3D0abe6859-5e61-49c9-b352-afde1ae17445-tuct4e27cd0; pv=%7B%22d%22%3A%221%3A1593071227714%22%7D; _gid=GA1.2.1231711779.1593176121; fc=%7B%7D; _cmpQcif3pcsupported=1; __rtgt_sid=kby3eknawim201; MALSESSIONID=0rfg8ppcl7a9rvagtdh1ga63i7; logglytrackingsession=4ad1c059-5317-4c7b-b80c-d8a944390070; cto_bundle=5eea-F9idnJKSHNJRmg2cUlmWm94NFBQaEhuMWlmOCUyQk9EYU9uSkQxbU5aR0RTa3BzZndiYlVqd2glMkZEeVRQRm1pJTJGeVZyV0prb2daSjFjb1FzaGZmMUNVMm0wQWVlUzlSMEpZJTJCRE1uVmhTT2hha3FWTnBlTmJpbURFVDRUNDJ5d2YwM09vRW9OeGt6ZmNRYVBoRlNFSGJzQURJQSUzRCUzRA; _gat=1; googlepersonalization=O1ffmeO1rOHbAA; eupubconsent=BO1ffmeO1rOHbAKAiAENAAAAAAAAAA; noniabvendorconsent=O1ffmeO1rOHbAKAiAAQA; _gali=content'
  // const cookie = 'MALHLOGSESSID=4f1dadcdc9b62b6df896b0fe39490bd6; _ga=GA1.2.950383284.1592982731; _rdt_uuid=1592982731310.da1363ff-77d3-483a-8b6a-406288226f3d; _fbp=fb.1.1592982731425.1201494846; d7s_uid=kbt0snku2prqsk; m_gdpr_mdl_2=1; anime_update_advanced=0; crfgL0cSt0r=true; __gads=ID=4c04236d99c80456:T=1593070435:S=ALNI_MbWqE-8EXoOC2XsUASfa08OCwqnbg; trc_cookie_storage=taboola%2520global%253Auser-id%3D0abe6859-5e61-49c9-b352-afde1ae17445-tuct4e27cd0; pv=%7B%22d%22%3A%221%3A1593071227714%22%7D; _gid=GA1.2.1231711779.1593176121; fc=%7B%7D; _cmpQcif3pcsupported=1; __rtgt_sid=kby3eknawim201; MALSESSIONID=0rfg8ppcl7a9rvagtdh1ga63i7; logglytrackingsession=4ad1c059-5317-4c7b-b80c-d8a944390070; cto_bundle=5eea-F9idnJKSHNJRmg2cUlmWm94NFBQaEhuMWlmOCUyQk9EYU9uSkQxbU5aR0RTa3BzZndiYlVqd2glMkZEeVRQRm1pJTJGeVZyV0prb2daSjFjb1FzaGZmMUNVMm0wQWVlUzlSMEpZJTJCRE1uVmhTT2hha3FWTnBlTmJpbURFVDRUNDJ5d2YwM09vRW9OeGt6ZmNRYVBoRlNFSGJzQURJQSUzRCUzRA; _gat=1; googlepersonalization=O1ffmeO1rOHbAA; eupubconsent=BO1ffmeO1rOHbAKAiAENAAAAAAAAAA; noniabvendorconsent=O1ffmeO1rOHbAKAiAAQA; _gali=content'
  // const cookie = 'MALHLOGSESSID=4f1dadcdc9b62b6df896b0fe39490bd6; _ga=GA1.2.950383284.1592982731; _rdt_uuid=1592982731310.da1363ff-77d3-483a-8b6a-406288226f3d; _fbp=fb.1.1592982731425.1201494846; d7s_uid=kbt0snku2prqsk; m_gdpr_mdl_2=1; anime_update_advanced=0; crfgL0cSt0r=true; __gads=ID=4c04236d99c80456:T=1593070435:S=ALNI_MbWqE-8EXoOC2XsUASfa08OCwqnbg; trc_cookie_storage=taboola%2520global%253Auser-id%3D0abe6859-5e61-49c9-b352-afde1ae17445-tuct4e27cd0; pv=%7B%22d%22%3A%221%3A1593071227714%22%7D; _gid=GA1.2.1231711779.1593176121; fc=%7B%7D; _cmpQcif3pcsupported=1; __rtgt_sid=kby3eknawim201; logglytrackingsession=4ad1c059-5317-4c7b-b80c-d8a944390070; googlepersonalization=O1ffmeO1rPryAA; eupubconsent=BO1ffmeO1rPryAKAiAENAAAAAAAAAA; noniabvendorconsent=O1ffmeO1rPryAKAiAAQA; cto_bundle=pQYOVl9idnJKSHNJRmg2cUlmWm94NFBQaEhrcnpseG1NVVZDVDI1RXhHbnl1TGN3TVlqMEpuWUVpV3NyWFZLVTRmSGFwSjMwbk5ydjglMkJnVlhGVVB3eWhKJTJCWEVsZ05GMGxwZzh3TDQ0RUFYWFVHJTJGZEFYMEl6U0VFRkpXNjY0V0UwZUVxRFVRZ0s1dHcwJTJCbmRyJTJCa1MlMkZCT2drZlElM0QlM0Q; MALSESSIONID=2jq368q76o07jkpebtpslkbjk4'
  console.log('ress ==', temp.headers['set-cookie'])
  let tempSession = temp.headers['set-cookie'][0]
  let tempSessionLog = temp.headers['set-cookie'][1]
  tempSession = tempSession.split('MALSESSIONID=')
  tempSession = tempSession[1].split(';')
  tempSession = tempSession[0]
  tempSessionLog = tempSessionLog.split('MALHLOGSESSID=')
  tempSessionLog = tempSessionLog[1].split(';')
  tempSessionLog = tempSessionLog[0]
  console.log('t1==', tempSession)
  console.log('t2==', tempSessionLog)
  const cook = 'MALSESSIONID=' + tempSession + '; MALHLOGSESSID=' + tempSessionLog
  console.log('kook==', cook)
  result = await agent.post('https://myanimelist.net/login.php?from=%2F')
    .field('user_name', 'Phanio')
    .field('password', 'TEST2020')
    .field('cookie', 1)
    .field('sublogin', 'Login')
    .field('submit', 1)
    .field('csrf_token', result)
    // .type('form')
    // .set('Cookie',cook)
    /* .send({
        user_name: 'Phanio',
        password: 'TEST2020',
        cookie: '1',
        sublogin: 'Login',
        submit: 1,
        csrf_token: 'e20530786e800f9fb1e3d3ac8bea7728f9c2cb00'
    })  */
    .then(resp => {
      //  console.log(resp.text)
      console.log('header==', resp.res.req._header)
      console.log('Invalid: ', !!resp.text.match(/Username/i) || !!resp.text.match(/Login/i))
    }).catch(err => {
      console.log('error===', err)
    })
}

logToMALCount()
