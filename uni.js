
Response {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  res: IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: false,
      ended: true,
      endEmitted: true,
      reading: false,
      sync: false,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      emitClose: true,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    readable: false,
    _events: [Object: null prototype] {
      end: [Function: responseOnEnd],
      error: [Array],
      close: [Function: bound emit]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    socket: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      _SNICallback: null,
      servername: 'myanimelist.net',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 8,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'myanimelist.net',
      _readableState: [ReadableState],
      readable: false,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(res)]: null,
      [Symbol(asyncId)]: 201,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 7587,
      [Symbol(kBytesWritten)]: 401,
      [Symbol(connect-options)]: [Object]
    },
    connection: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      _SNICallback: null,
      servername: 'myanimelist.net',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 8,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'myanimelist.net',
      _readableState: [ReadableState],
      readable: false,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(res)]: null,
      [Symbol(asyncId)]: 201,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 7587,
      [Symbol(kBytesWritten)]: 401,
      [Symbol(connect-options)]: [Object]
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
      date: 'Mon, 08 Jun 2020 08:53:52 GMT',
      'content-type': 'text/html; charset=UTF-8',
      'transfer-encoding': 'chunked',
      connection: 'close',
      server: 'Apache',
      'cache-control': 'no-cache',
      vary: 'User-Agent,Accept-Encoding',
      'content-encoding': 'gzip',
      'strict-transport-security': 'max-age=63072000; includeSubDomains; preload'
    },
    rawHeaders: [
      'Date',
      'Mon, 08 Jun 2020 08:53:52 GMT',
      'Content-Type',
      'text/html; charset=UTF-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'Server',
      'Apache',
      'Cache-Control',
      'no-cache',
      'Vary',
      'User-Agent,Accept-Encoding',
      'Content-Encoding',
      'gzip',
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      _SNICallback: null,
      servername: 'myanimelist.net',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 8,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'myanimelist.net',
      _readableState: [ReadableState],
      readable: false,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(res)]: null,
      [Symbol(asyncId)]: 201,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 7587,
      [Symbol(kBytesWritten)]: 401,
      [Symbol(connect-options)]: [Object]
    },
    _consuming: true,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 141,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [TLSSocket],
      connection: [TLSSocket],
      _header: 'POST /login.php?from=%2F HTTP/1.1\r\n' +
        'Host: myanimelist.net\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Cookie: MALSESSIONID=4002obqtoh39t4emp7d3qlvcf2;MALHLOGSESSID=073e8a4833303eb5ea2e346e54ecc887\r\n' +
        'Content-Length: 141\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      insecureHTTPParser: undefined,
      path: '/login.php?from=%2F',
      _ended: true,
      res: [Circular],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    setEncoding: [Function],
    on: [Function],
    text: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>    \n' +
      '<link rel="preconnect" href="//fonts.gstatic.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//fonts.googleapis.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//tags-cdn.deployads.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//www.googletagservices.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//www.googletagmanager.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//apis.google.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//pixel-sync.sitescout.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//pixel.tapad.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//c.deployads.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//requal-alleased.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//tpc.googlesyndication.com/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//googleads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="//securepubads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
      '<link rel="preconnect" href="https://cdn.myanimelist.net" crossorigin="anonymous" />\n' +
      '\n' +
      '\n' +
      '<title>Login - MyAnimeList.net\n' +
      '</title>\n' +
      '<meta name="description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!" />\n' +
      '\n' +
      '  \n' +
      '<meta name="keywords" content="anime, myanimelist, anime news, manga" />\n' +
      '<link rel="canonical" href="https://myanimelist.net/login.php" />  \n' +
      '<meta property="og:locale" content="en_US"><meta property="fb:app_id" content="360769957454434"><meta property="og:site_name" content="MyAnimeList.net"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@myanimelist"><meta property="og:title" content="Login - MyAnimeList.net "><meta property="og:image" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta name="twitter:image:src" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta property="og:url" content="https://myanimelist.net/login.php"><meta property="og:description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!">\n' +
      '\n' +
      '<meta name="referrer" content="default"><link rel="manifest" href="/manifest.json">\n' +
      '\n' +
      "<meta name='csrf_token' content='ae577223338108b194914ece5ced58ab4780725e'>\n" +
      '<meta name="fo-verify" content="1e927243-8e02-48e3-b098-a7b78c5b4e36"><meta name="viewport" content="initial-scale=1" /><link rel="preload" as="style" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
      '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js" />\n' +
      '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" />\n' +
      '\n' +
      '<link rel="stylesheet" type="text/css" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
      '\n' +
      '<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js"></script>\n' +
      `<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" id="alljs" data-params='{&quot;origin_url&quot;:&quot;https:\\/\\/myanimelist.net&quot;,&quot;is_request_bot_filter_log&quot;:true}' async="async"></script>\n` +
      '\n' +
      '\n' +
      '\n' +
      '<link rel="search" type="application/opensearchdescription+xml" href="https://myanimelist.net/plugins/myanimelist.xml" title="MyAnimeList" />\n' +
      '\n' +
      '<link rel="shortcut icon" href="https://cdn.myanimelist.net/images/favicon.ico" />\n' +
      '\n' +
      '<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">\n' +
      '  <script src="//tags-cdn.deployads.com/a/myanimelist.net.js" async="async"></script>      </head>\n' +
      '\n' +
      '          <body class="page-common  page_login page_password_login" data-ms="true" data-country-code="FR">\n' +
      '  \n' +
      '      <div id="myanimelist">\n' +
      '  \n' +
      "    <script type='text/javascript'>\n" +
      "    window.MAL.SkinAd.prepareForSkin('');\n" +
      '  </script>\n' +
      '\n' +
      '    <div id="ad-skin-bg-left" class="ad-skin-side-outer ad-skin-side-bg bg-left">\n' +
      '    <div id="ad-skin-left" class="ad-skin-side left" style="display: none;">\n' +
      '      <div id="ad-skin-left-absolute-block">\n' +
      '        <div id="ad-skin-left-fixed-block"></div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div><div class="wrapper ">\n' +
      '                <div id="headerSmall" class="">\n' +
      '\n' +
      '<script>\n' +
      '    var trackOutboundLink = function(url) {\n' +
      "        ga('send', 'event', 'outbound', 'click', url, {\n" +
      "            'transport': 'beacon',\n" +
      "            'hitCallback': function(){return true;}\n" +
      '        });\n' +
      '    }\n' +
      '</script><div class="banner-header-anime-straming" style="right:480px;">\n' +
      `  <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
      '\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '<div id="header-menu" ><div class="header-menu-login"><a class="btn-mal-service"\n' +
      '             href="https://myanimelist.net/membership?_location=mal_h_u">Hide Ads</a><a class="btn-login" href="https://myanimelist.net/login.php?from=%2F" id="malLogin">Login</a><a class="btn-signup" href="https://myanimelist.net/register.php?from=%2F">Sign Up</a></div></div><a href="/" class="link-mal-logo">MyAnimeList.net</a>\n' +
      '        </div>\n' +
      '                \n' +
      '          <div id="menu" class="">\n' +
      '    <div id="menu_right"><script type="text/x-template" id="incremental-result-item-anime"><div class="list anime" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Aired: ${ item.payload.aired }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-manga"><div class="list manga" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Published: ${ item.payload.published }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-character"><div class="list character" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div><div class="extra-info"><ul class="related-works"><li v-for="work in item.payload.related_works" class="fs-i">- ${ work }</li></ul>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-person"><div class="list person" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.alternative_name">${ item.payload.alternative_name }<br></span>Birthday: ${ item.payload.birthday }<br>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-store"><div class="list store" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info store"></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info store"></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-club"><div class="list club" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div><div class="extra-info">Members: ${ item.payload.members }<br>Category: ${ item.payload.category }<br>Created by: ${ item.payload.created_by }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-user"><div class="list user" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.authority">${ item.payload.authority }<br></span>Joined: ${ item.payload.joined }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-news"><div class="list news" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-featured"><div class="list featured" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-forum"><div class="list forum" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
      '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="extra-info">${ item.payload.date }<br><span>in ${ item.payload.category }</span></div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
      '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-separator"><div class="list separator"><div class="separator"><span v-show="item.name == \'anime\'">Anime</span><span v-show="item.name == \'manga\'">Manga</span><span v-show="item.name == \'character\'">Characters</span><span v-show="item.name == \'person\'">People</span></div></div></script><div id="top-search-bar"><form id="searchBar" method="get" class="searchBar" @submit.prevent="jump()"><div class="form-select-outer fl-l"><select name="type" id="topSearchValue" class="inputtext" v-model="type"><option value="all">All</option><option value="anime">Anime</option><option value="manga">Manga</option><option value="character">Characters</option><option value="person">People</option><option value="store">Manga Store</option><option value="news">News</option><option value="featured">Featured Articles</option><option value="forum">Forum</option><option value="club">Clubs</option><option value="user">Users</option></select></div><input v-model="keyword" id="topSearchText" type="text"\n' +
      '            name="keyword" class="inputtext fl-l" placeholder="Search Anime, Manga, and more..."\n' +
      '            size="30" autocomplete="off"\n' +
      '            @keydown.up.prevent="moveSelection(-1)" @keydown.down.prevent="moveSelection(1)"\n' +
      `            @focus="isFocused = true" @blur="isFocused = false"><input id="topSearchButon" class="fl-l" :class="{'notActive': (keyword.length < 3)}" type="submit" value="&#xf002"></form><div id="topSearchResultList" class="incrementalSearchResultList" :style="{display: (showResult ? 'block' : 'none')}" @mousedown.prevent=""><div v-for="(item, i) in items" @mouseover="selection=i"><component :is="resolveComponent(item)" :item="item" :focus="selection == i" :url="generateItemPageUrl(item)"></component></div><div class="list list-bottom" :class="{'focus': selection == -1}" @mouseover="selection = -1"\n` +
      `               :style="{display: (showViewAllLink ? 'block' : 'none')}"><a :href="resultPageUrl">\n` +
      '              View all results for <span class="fw-b">${ keyword }</span><i v-show="isRequesting" class="fa fa-spinner fa-spin ml4"></i></a></div></div></div></div><div id="menu_left">\n' +
      '      <ul id="nav">\n' +
      '        <li class="small"><a href="#" class="non-link">Anime</a>\n' +
      '          <ul class="wider">\n' +
      '            <li><a href="https://myanimelist.net/anime.php?_location=mal_h_m">Anime Search</a></li>\n' +
      '            <li><a href="https://myanimelist.net/topanime.php?_location=mal_h_m">Top Anime</a></li>\n' +
      '            <li><a href="https://myanimelist.net/anime/season?_location=mal_h_m">Seasonal Anime</a></li>\n' +
      '                        <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m_a">Videos</a></li>\n' +
      '            <li><a href="https://myanimelist.net/reviews.php?t=anime&amp;_location=mal_h_m">Reviews</a></li>\n' +
      '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=anime&amp;_location=mal_h_m">Recommendations</a></li>\n' +
      '            <li><a href="https://myanimelist.net/forum?topicid=1818368&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        <li class="small"><a href="#" class="non-link">Manga</a>\n' +
      '          <ul class="wider">\n' +
      '            <li><a href="https://myanimelist.net/manga.php?_location=mal_h_m">Manga Search</a></li>\n' +
      '            <li><a href="https://myanimelist.net/topmanga.php?_location=mal_h_m">Top Manga</a></li>\n' +
      '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
      '            <li><a href="https://myanimelist.net/reviews.php?t=manga&amp;_location=mal_h_m">Reviews</a></li>\n' +
      '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=manga&amp;_location=mal_h_m">Recommendations</a></li>\n' +
      '            <li><a href="https://myanimelist.net/forum?topicid=1818367&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        <li><a href="#" class="non-link">Community</a>\n' +
      '          <ul>\n' +
      '            <li><a href="https://myanimelist.net/forum/?_location=mal_h_m">Forums</a></li>\n' +
      '            <li><a href="https://myanimelist.net/clubs.php?_location=mal_h_m">Clubs</a></li>\n' +
      '            <li><a href="https://myanimelist.net/blog.php?_location=mal_h_m">Blogs</a></li>\n' +
      '            <li><a href="https://myanimelist.net/users.php?_location=mal_h_m">Users</a></li>\n' +
      '            <li><a href="https://discord.gg/E2xC8ZF">Discord Chat</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        <li class="small2"><a href="#" class="non-link">Industry</a>\n' +
      '          <ul class="wider">\n' +
      '            <li><a href="https://myanimelist.net/news?_location=mal_h_m">News</a></li>\n' +
      '            <li><a href="https://myanimelist.net/featured?_location=mal_h_m">Featured Articles</a></li>\n' +
      '            <li><a href="https://myanimelist.net/people.php?_location=mal_h_m">People</a></li>\n' +
      '            <li><a href="https://myanimelist.net/character.php?_location=mal_h_m">Characters</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        <li class="small"><a href="#" class="non-link">Watch</a>\n' +
      '          <ul class="wider">\n' +
      '            <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m">Episode Videos</a></li>\n' +
      '            <li><a href="https://myanimelist.net/watch/promotion?_location=mal_h_m">Promotional Videos</a></li></ul>\n' +
      '        </li>\n' +
      '        <li class="smaller"><a href="#" class="non-link">Read</a>\n' +
      '          <ul class="wider">\n' +
      '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        <li class="smaller"><a href="#" class="non-link">Help</a>\n' +
      '          <ul class="wide">\n' +
      '            <li><a href="https://myanimelist.net/about.php?_location=mal_h_m">About</a></li>\n' +
      '            <li><a href="https://myanimelist.net/about.php?go=support&amp;_location=mal_h_m">Support</a></li>\n' +
      '            <li><a href="https://myanimelist.net/advertising?_location=mal_h_m">Advertising</a></li>\n' +
      '            <li><a href="https://myanimelist.net/forum/?topicid=515949&amp;_location=mal_h_m">FAQ</a></li>\n' +
      '            <li><a href="https://myanimelist.net/modules.php?go=report&amp;_location=mal_h_m">Report</a></li>\n' +
      '            <li><a href="https://myanimelist.net/about.php?go=team&amp;_location=mal_h_m">Staff</a></li><li><a href="https://myanimelist.net/membership?_location=mal_h_m">MAL Supporter</a></li>\n' +
      '          </ul>\n' +
      '        </li>\n' +
      '        \n' +
      '            \n' +
      '      </ul>\n' +
      '    </div>  </div>        <div id="contentWrapper" >\n' +
      '          <div>\n' +
      '            <h1 class="h1">Login</h1>          </div>\n' +
      '            <div id="content">\n' +
      '    \n' +
      '    \n' +
      '<table id="dialog" cellpadding="0" cellspacing="0" style="width: 530px;">\n' +
      '  <tr>\n' +
      '    <td class="">\n' +
      '            <div class="social-login-block mauto">\n' +
      '\n' +
      '    <p class="ff-avenir fs16 pt12 ac">Login with</p>\n' +
      '\n' +
      '    <div class="login-sns-buttons pt16 pb24 ac"><a class="icon-social-login icon-fb" href="https://myanimelist.net/sns/login/facebook?from=%2F">Facebook</a><a class="icon-social-login icon-tw" href="https://myanimelist.net/sns/login/twitter?from=%2F">Twitter</a><a class="icon-social-login icon-gp" href="https://myanimelist.net/sns/login/google?from=%2F">Google</a></div>\n' +
      '</div>\n' +
      '<form name="loginForm" method="post" action="https://myanimelist.net/login.php?from=%2F">\n' +
      '\n' +
      '          <div class="login-form-block form_password_login pb16">\n' +
      '\n' +
      '            <p class="pt16">\n' +
      '              <label class="di-b fs12 pb4">Username</label>\n' +
      '              <input type="text" class="inputtext login-inputtext" name="user_name" id="loginUserName" value="" size="30" maxlength="50">\n' +
      '            </p>\n' +
      '\n' +
      '            <p class="pt16">\n' +
      '              <span class="fl-r di-ib fs12 ff-avenir" data-ajax="false">\n' +
      '                <input id="show-password" type="checkbox" name="show_password" value="0">\n' +
      '                Show Password\n' +
      '              </span>\n' +
      '              <label class="di-b fs12 pb4">Password</label>\n' +
      '              <input type="password" id="login-password" class="inputtext login-inputtext" name="password" size="30" maxlength="50">\n' +
      '\n' +
      '              <p class="badresult-text">\n' +
      '                              </p>\n' +
      '            </p>\n' +
      '\n' +
      '            <p class="pt12">\n' +
      '              <input type="checkbox" name="cookie" value="1" checked="checked"> Always stay logged in?\n' +
      '            </p>\n' +
      '\n' +
      '            \n' +
      '                        <div class="user-password-note">\n' +
      '  <i aria-hidden="true" class="fa fa-exclamation-circle user-password-note-icon"></i>\n' +
      '  Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password.\n' +
      '</div>\n' +
      '\n' +
      '            <p class="pt16 ac">\n' +
      '              <input type="submit" class="inputButton btn-form-submit" name="sublogin" value="Login">            </p><p class="pt12 pb8 ac">\n' +
      '              <a href="https://myanimelist.net/password.php?username=1&amp;from=%2F">Forgot username?</a> | <a href="https://myanimelist.net/password.php?from=%2F">Forgot password?</a>\n' +
      '            </p>\n' +
      '            <p class="pt24 pb8 ac">\n' +
      `              <input type="button" onclick="document.location='https://myanimelist.net/register.php?from=%2F';" name="register" value="Sign Up" class="inputButton btn-form-submit small">            </p></div>\n` +
      '\n' +
      '          \n' +
      '          <input type="hidden" name="submit" value="1">\n' +
      '        </form>\n' +
      '          </td>\n' +
      '  </tr>\n' +
      '</table>\n' +
      '\n' +
      '  </div>\n' +
      '                                              </div>            <!--  control container height -->\n' +
      '            <div style="clear:both;"></div>\n' +
      '            <!-- end rightbody -->\n' +
      '          \n' +
      '                      \n' +
      '\n' +
      '                </div>\n' +
      '    <div id="ad-skin-bg-right" class="ad-skin-side-outer ad-skin-side-bg bg-right">\n' +
      '    <div id="ad-skin-right" class="ad-skin-side right" style="display: none;">\n' +
      '      <div id="ad-skin-right-absolute-block">\n' +
      '        <div id="ad-skin-right-fixed-block"></div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div></div>\n' +
      '                  \n' +
      '<div class="footer-ranking">\n' +
      '  <div class="ranking-container">\n' +
      '          <div class="ranking-unit">\n' +
      '        <h3 class="title"><a href="https://myanimelist.net/topanime.php" class="view_more fl-r">More</a>Top Anime\n' +
      '        </h3>\n' +
      '        <ol>\n' +
      '                      <li>\n' +
      '              <span class="rank">1</span>\n' +
      '              <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood">Fullmetal Alchemist: Brotherhood</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">2</span>\n' +
      '              <a href="https://myanimelist.net/anime/9253/Steins_Gate">Steins;Gate</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">3</span>\n' +
      '              <a href="https://myanimelist.net/anime/28977/Gintama°">Gintama°</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">4</span>\n' +
      '              <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">Hunter x Hunter (2011)</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">5</span>\n' +
      '              <a href="https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu">Ginga Eiyuu Densetsu</a>\n' +
      '            </li>\n' +
      '                  </ol>\n' +
      '      </div>\n' +
      '          <div class="ranking-unit">\n' +
      '        <h3 class="title"><a href="https://myanimelist.net/topanime.php?type=airing" class="view_more fl-r">More</a>Top Airing Anime\n' +
      '        </h3>\n' +
      '        <ol>\n' +
      '                      <li>\n' +
      '              <span class="rank">1</span>\n' +
      '              <a href="https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen">Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">2</span>\n' +
      '              <a href="https://myanimelist.net/anime/40682/Kingdom_3rd_Season">Kingdom 3rd Season</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">3</span>\n' +
      '              <a href="https://myanimelist.net/anime/21/One_Piece">One Piece</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">4</span>\n' +
      '              <a href="https://myanimelist.net/anime/38481/Toaru_Kagaku_no_Railgun_T">Toaru Kagaku no Railgun T</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">5</span>\n' +
      '              <a href="https://myanimelist.net/anime/40417/Fruits_Basket_2nd_Season">Fruits Basket 2nd Season</a>\n' +
      '            </li>\n' +
      '                  </ol>\n' +
      '      </div>\n' +
      '          <div class="ranking-unit">\n' +
      '        <h3 class="title"><a href="https://myanimelist.net/character.php" class="view_more fl-r">More</a>Most Popular Characters\n' +
      '        </h3>\n' +
      '        <ol>\n' +
      '                      <li>\n' +
      '              <span class="rank">1</span>\n' +
      '              <a href="https://myanimelist.net/character/417/Lelouch_Lamperouge">Lamperouge, Lelouch</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">2</span>\n' +
      '              <a href="https://myanimelist.net/character/71/L_Lawliet">Lawliet, L</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">3</span>\n' +
      '              <a href="https://myanimelist.net/character/40/Luffy_Monkey_D">Monkey D., Luffy</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">4</span>\n' +
      '              <a href="https://myanimelist.net/character/45627/Levi">Levi</a>\n' +
      '            </li>\n' +
      '                      <li>\n' +
      '              <span class="rank">5</span>\n' +
      '              <a href="https://myanimelist.net/character/11/Edward_Elric">Elric, Edward</a>\n' +
      '            </li>\n' +
      '                  </ol>\n' +
      '      </div>\n' +
      '      </div>\n' +
      '</div>\n' +
      '          \n' +
      '          <footer>\n' +
      '  <div id="footer-block">\n' +
      '    <div class="footer-link-block">\n' +
      '      <p class="footer-link home di-ib">\n' +
      '        <a href="https://myanimelist.net/">Home</a>\n' +
      '      </p>\n' +
      '      <p class="footer-link di-ib">\n' +
      '        <a href="https://myanimelist.net/about.php">About</a>\n' +
      '        <a href="https://myanimelist.net/pressroom">Press Room</a>\n' +
      '        <a href="https://myanimelist.net/about.php?go=contact">Support</a>\n' +
      '        <a href="https://myanimelist.net/advertising">Advertising</a>\n' +
      '        <a href="https://myanimelist.net/forum/?topicid=515949">FAQ</a>\n' +
      '        <a href="https://myanimelist.net/about/terms_of_use">Terms</a>\n' +
      '        <a href="https://myanimelist.net/about/privacy_policy">Privacy</a>\n' +
      '        <a href="https://myanimelist.net/about/cookie_policy">Cookie</a>\n' +
      '        <a href="https://myanimelist.net/about/sitemap">Sitemap</a>\n' +
      '      </p>\n' +
      '            <p class="footer-link login di-ib">\n' +
      '        <a href="https://myanimelist.net/login.php?from=%2F" id="malLogin" rel="nofollow">Login</a>\n' +
      '        <a href="https://myanimelist.net/register.php?from=%2F">Sign Up</a>\n' +
      '      </p>\n' +
      '          </div>\n' +
      '\n' +
      '    \n' +
      '    <div class="banner-footer-anime-streaming">\n' +
      `      <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
      '\n' +
      '    </div>\n' +
      '\n' +
      '        <div class="footer-link-icon-block">\n' +
      '            <div class="footer-social-media ac">\n' +
      '        <a target="_blank" class="icon-sns icon-fb di-ib" href="https://www.facebook.com/OfficialMyAnimeList"></a>\n' +
      '        <a target="_blank" class="icon-sns icon-tw di-ib" title="Follow @myanimelist on Twitter" href="https://twitter.com/myanimelist"></a></div>\n' +
      '            <div class="footer-recommended ac">\n' +
      '        <a target="_blank" class="icon-recommended icon-tokyo-otaku-mode" href="http://otakumode.com/fb/5aO">Tokyo Otaku Mode</a>\n' +
      `        <a target="_blank" class="icon-recommended icon-honeys-anime" href="https://honeysanime.com">Honey's Anime</a>\n` +
      '        <a target="_blank" class="icon-recommended icon-manga-store" href="https://myanimelist.net/store?_location=mal_f_m">Manga Store</a>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '\n' +
      '    <div class="footer-fb">\n' +
      '      <div class="footer-fb-item">\n' +
      '        <div class="pa-d-footer">\n' +
      '                  </div>\n' +
      '      </div>\n' +
      '      <div class="footer-fb-item">\n' +
      '                <iframe class="fb-page" src="" width="450" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n' +
      '      </div>\n' +
      '      <div class="footer-fb-item">\n' +
      '        <div class="pa-d-footer">\n' +
      '                  </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '        \n' +
      '    <div id="copyright">\n' +
      '      MyAnimeList.net is a property of MyAnimeList, LLC. &copy;2020 All Rights Reserved.\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</footer>\n' +
      '    \n' +
      `        <script src='//www.googletagservices.com/tag/js/gpt.js' async="async"></script>\n` +
      '<script>\n' +
      '    var googletag = googletag || {};\n' +
      '    googletag.cmd = googletag.cmd || [];\n' +
      '</script>\n' +
      '\n' +
      '<script async>\n' +
      "  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
      '  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
      '  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
      "  })(window,document,'script','//www.google-analytics.com/analytics.js','ga')\n" +
      '\n' +
      "  ga('create', 'UA-369102-1', 'auto')\n" +
      "  ga('set', 'anonymizeIp', true)\n" +
      "  ga('require', 'linkid') // Enhanced Link Attribution\n" +
      "  ga('send', 'pageview')\n" +
      '</script>\n' +
      '  <script>\n' +
      'window.onscroll = function(e){\n' +
      '    const scrollThreshold = 50;\n' +
      '    if (window.pageYOffset >= scrollThreshold) {\n' +
      "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
      '            let t_height = ad.offsetHeight;\n' +
      '            let offsetY = ad.getBoundingClientRect().top;\n' +
      '            let screenHeight = window.outerHeight;\n' +
      '            let t_position = offsetY - screenHeight;\n' +
      '            if(-screenHeight<=(t_position　+　t_height) && t_position<0) {\n' +
      "                ad.className = 'ad-tag';\n" +
      '                (deployads = window.deployads || []).push({});\n' +
      '            }\n' +
      '        });\n' +
      '    }\n' +
      '}\n' +
      'var timer = 0;\n' +
      'window.onresize = function(e){\n' +
      '    if (timer > 0) {\n' +
      '        clearTimeout(timer);\n' +
      '    }\n' +
      '\n' +
      '    timer = setTimeout(function () {\n' +
      "        console.log('window resized');\n" +
      "        [].forEach.call(document.querySelectorAll('.ad-tag'), function(ad) {\n" +
      "            ad.className = 'no-ad';\n" +
      '            (deployads = window.deployads || []).push({});\n' +
      '        });\n' +
      "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
      "            ad.className = 'ad-tag';\n" +
      '            (deployads = window.deployads || []).push({});\n' +
      '        });\n' +
      '    }, 200);\n' +
      '}\n' +
      '</script><script src="https://www.google.com/recaptcha/api.js?hl=en" async="async"></script>\n' +
      '\n' +
      "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
      "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
      "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
      "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
      `})(window,document,'script','dataLayer','GTM-WL4QW3G');</script><script type="text/javascript">\n` +
      '    window.MAL.magia = "06410c4e6b2518e9add8f6df0ccb2da2876bb8c980aacb43a8dcaa8153c0f92c";\n' +
      '  window.MAL.madoka = "hZrDKm9k6FVRnqd3i%=K";\n' +
      '\n' +
      '  window.MAL.SLVK = "g4OvMLVOmEI3J8u7dt8f8+mAuualsqCo";\n' +
      '  window.MAL.CDN_URL = "https://cdn.myanimelist.net";\n' +
      '\n' +
      '  window.MAL.CURRENT_TUTORIAL_STEP_ID = null;\n' +
      '  window.MAL.USER_NAME = ""\n' +
      '  window.MAL.FACEBOOK.APP_ID = "360769957454434"\n' +
      '  window.MAL.FACEBOOK.API_VERSION = "v2.12"\n' +
      '</script>\n' +
      '\n' +
      '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4QW3G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n' +
      '\n' +
      '    </body>\n' +
      '</html>\n',
    [Symbol(kCapture)]: false
  },
  request: Request {
    _events: [Object: null prototype] {
      response: [Function: bound ],
      redirect: [Array],
      abort: [Function]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    _enableHttp2: false,
    _agent: false,
    _formData: null,
    method: 'POST',
    url: 'https://myanimelist.net/login.php?from=%2F',
    _header: { 'content-type': 'application/json' },
    header: { 'Content-Type': 'application/json' },
    writable: true,
    _redirects: 0,
    _maxRedirects: 5,
    cookies: 'MALSESSIONID=4002obqtoh39t4emp7d3qlvcf2;MALHLOGSESSID=073e8a4833303eb5ea2e346e54ecc887',
    qs: {},
    _query: [],
    qsRaw: [],
    _redirectList: [],
    _streamRequest: false,
    _data: {
      user_name: 'Phanio',
      password: 'TEST2020',
      csrf_token: 'ae577223338108b194914ece5ced58ab4780725e',
      cookie: 1,
      submit: 1,
      sublogin: 'Login'
    },
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 141,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [TLSSocket],
      connection: [TLSSocket],
      _header: 'POST /login.php?from=%2F HTTP/1.1\r\n' +
        'Host: myanimelist.net\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Cookie: MALSESSIONID=4002obqtoh39t4emp7d3qlvcf2;MALHLOGSESSID=073e8a4833303eb5ea2e346e54ecc887\r\n' +
        'Content-Length: 141\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      insecureHTTPParser: undefined,
      path: '/login.php?from=%2F',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    protocol: 'https:',
    host: 'myanimelist.net',
    _endCalled: true,
    _callback: [Function],
    _fullfilledPromise: Promise { [Circular] },
    res: IncomingMessage {
      _readableState: [ReadableState],
      readable: false,
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      socket: [TLSSocket],
      connection: [TLSSocket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [TLSSocket],
      _consuming: true,
      _dumped: false,
      req: [ClientRequest],
      setEncoding: [Function],
      on: [Function],
      text: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>    \n' +
        '<link rel="preconnect" href="//fonts.gstatic.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//fonts.googleapis.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//tags-cdn.deployads.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//www.googletagservices.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//www.googletagmanager.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//apis.google.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//pixel-sync.sitescout.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//pixel.tapad.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//c.deployads.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//requal-alleased.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//tpc.googlesyndication.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//googleads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//securepubads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="https://cdn.myanimelist.net" crossorigin="anonymous" />\n' +
        '\n' +
        '\n' +
        '<title>Login - MyAnimeList.net\n' +
        '</title>\n' +
        '<meta name="description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!" />\n' +
        '\n' +
        '  \n' +
        '<meta name="keywords" content="anime, myanimelist, anime news, manga" />\n' +
        '<link rel="canonical" href="https://myanimelist.net/login.php" />  \n' +
        '<meta property="og:locale" content="en_US"><meta property="fb:app_id" content="360769957454434"><meta property="og:site_name" content="MyAnimeList.net"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@myanimelist"><meta property="og:title" content="Login - MyAnimeList.net "><meta property="og:image" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta name="twitter:image:src" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta property="og:url" content="https://myanimelist.net/login.php"><meta property="og:description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!">\n' +
        '\n' +
        '<meta name="referrer" content="default"><link rel="manifest" href="/manifest.json">\n' +
        '\n' +
        "<meta name='csrf_token' content='ae577223338108b194914ece5ced58ab4780725e'>\n" +
        '<meta name="fo-verify" content="1e927243-8e02-48e3-b098-a7b78c5b4e36"><meta name="viewport" content="initial-scale=1" /><link rel="preload" as="style" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
        '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js" />\n' +
        '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" />\n' +
        '\n' +
        '<link rel="stylesheet" type="text/css" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
        '\n' +
        '<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js"></script>\n' +
        `<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" id="alljs" data-params='{&quot;origin_url&quot;:&quot;https:\\/\\/myanimelist.net&quot;,&quot;is_request_bot_filter_log&quot;:true}' async="async"></script>\n` +
        '\n' +
        '\n' +
        '\n' +
        '<link rel="search" type="application/opensearchdescription+xml" href="https://myanimelist.net/plugins/myanimelist.xml" title="MyAnimeList" />\n' +
        '\n' +
        '<link rel="shortcut icon" href="https://cdn.myanimelist.net/images/favicon.ico" />\n' +
        '\n' +
        '<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">\n' +
        '  <script src="//tags-cdn.deployads.com/a/myanimelist.net.js" async="async"></script>      </head>\n' +
        '\n' +
        '          <body class="page-common  page_login page_password_login" data-ms="true" data-country-code="FR">\n' +
        '  \n' +
        '      <div id="myanimelist">\n' +
        '  \n' +
        "    <script type='text/javascript'>\n" +
        "    window.MAL.SkinAd.prepareForSkin('');\n" +
        '  </script>\n' +
        '\n' +
        '    <div id="ad-skin-bg-left" class="ad-skin-side-outer ad-skin-side-bg bg-left">\n' +
        '    <div id="ad-skin-left" class="ad-skin-side left" style="display: none;">\n' +
        '      <div id="ad-skin-left-absolute-block">\n' +
        '        <div id="ad-skin-left-fixed-block"></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div><div class="wrapper ">\n' +
        '                <div id="headerSmall" class="">\n' +
        '\n' +
        '<script>\n' +
        '    var trackOutboundLink = function(url) {\n' +
        "        ga('send', 'event', 'outbound', 'click', url, {\n" +
        "            'transport': 'beacon',\n" +
        "            'hitCallback': function(){return true;}\n" +
        '        });\n' +
        '    }\n' +
        '</script><div class="banner-header-anime-straming" style="right:480px;">\n' +
        `  <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
        '\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '<div id="header-menu" ><div class="header-menu-login"><a class="btn-mal-service"\n' +
        '             href="https://myanimelist.net/membership?_location=mal_h_u">Hide Ads</a><a class="btn-login" href="https://myanimelist.net/login.php?from=%2F" id="malLogin">Login</a><a class="btn-signup" href="https://myanimelist.net/register.php?from=%2F">Sign Up</a></div></div><a href="/" class="link-mal-logo">MyAnimeList.net</a>\n' +
        '        </div>\n' +
        '                \n' +
        '          <div id="menu" class="">\n' +
        '    <div id="menu_right"><script type="text/x-template" id="incremental-result-item-anime"><div class="list anime" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Aired: ${ item.payload.aired }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-manga"><div class="list manga" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Published: ${ item.payload.published }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-character"><div class="list character" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div><div class="extra-info"><ul class="related-works"><li v-for="work in item.payload.related_works" class="fs-i">- ${ work }</li></ul>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-person"><div class="list person" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.alternative_name">${ item.payload.alternative_name }<br></span>Birthday: ${ item.payload.birthday }<br>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-store"><div class="list store" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info store"></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info store"></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-club"><div class="list club" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div><div class="extra-info">Members: ${ item.payload.members }<br>Category: ${ item.payload.category }<br>Created by: ${ item.payload.created_by }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-user"><div class="list user" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.authority">${ item.payload.authority }<br></span>Joined: ${ item.payload.joined }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-news"><div class="list news" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-featured"><div class="list featured" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-forum"><div class="list forum" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
        '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="extra-info">${ item.payload.date }<br><span>in ${ item.payload.category }</span></div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
        '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-separator"><div class="list separator"><div class="separator"><span v-show="item.name == \'anime\'">Anime</span><span v-show="item.name == \'manga\'">Manga</span><span v-show="item.name == \'character\'">Characters</span><span v-show="item.name == \'person\'">People</span></div></div></script><div id="top-search-bar"><form id="searchBar" method="get" class="searchBar" @submit.prevent="jump()"><div class="form-select-outer fl-l"><select name="type" id="topSearchValue" class="inputtext" v-model="type"><option value="all">All</option><option value="anime">Anime</option><option value="manga">Manga</option><option value="character">Characters</option><option value="person">People</option><option value="store">Manga Store</option><option value="news">News</option><option value="featured">Featured Articles</option><option value="forum">Forum</option><option value="club">Clubs</option><option value="user">Users</option></select></div><input v-model="keyword" id="topSearchText" type="text"\n' +
        '            name="keyword" class="inputtext fl-l" placeholder="Search Anime, Manga, and more..."\n' +
        '            size="30" autocomplete="off"\n' +
        '            @keydown.up.prevent="moveSelection(-1)" @keydown.down.prevent="moveSelection(1)"\n' +
        `            @focus="isFocused = true" @blur="isFocused = false"><input id="topSearchButon" class="fl-l" :class="{'notActive': (keyword.length < 3)}" type="submit" value="&#xf002"></form><div id="topSearchResultList" class="incrementalSearchResultList" :style="{display: (showResult ? 'block' : 'none')}" @mousedown.prevent=""><div v-for="(item, i) in items" @mouseover="selection=i"><component :is="resolveComponent(item)" :item="item" :focus="selection == i" :url="generateItemPageUrl(item)"></component></div><div class="list list-bottom" :class="{'focus': selection == -1}" @mouseover="selection = -1"\n` +
        `               :style="{display: (showViewAllLink ? 'block' : 'none')}"><a :href="resultPageUrl">\n` +
        '              View all results for <span class="fw-b">${ keyword }</span><i v-show="isRequesting" class="fa fa-spinner fa-spin ml4"></i></a></div></div></div></div><div id="menu_left">\n' +
        '      <ul id="nav">\n' +
        '        <li class="small"><a href="#" class="non-link">Anime</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/anime.php?_location=mal_h_m">Anime Search</a></li>\n' +
        '            <li><a href="https://myanimelist.net/topanime.php?_location=mal_h_m">Top Anime</a></li>\n' +
        '            <li><a href="https://myanimelist.net/anime/season?_location=mal_h_m">Seasonal Anime</a></li>\n' +
        '                        <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m_a">Videos</a></li>\n' +
        '            <li><a href="https://myanimelist.net/reviews.php?t=anime&amp;_location=mal_h_m">Reviews</a></li>\n' +
        '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=anime&amp;_location=mal_h_m">Recommendations</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum?topicid=1818368&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small"><a href="#" class="non-link">Manga</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/manga.php?_location=mal_h_m">Manga Search</a></li>\n' +
        '            <li><a href="https://myanimelist.net/topmanga.php?_location=mal_h_m">Top Manga</a></li>\n' +
        '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
        '            <li><a href="https://myanimelist.net/reviews.php?t=manga&amp;_location=mal_h_m">Reviews</a></li>\n' +
        '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=manga&amp;_location=mal_h_m">Recommendations</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum?topicid=1818367&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li><a href="#" class="non-link">Community</a>\n' +
        '          <ul>\n' +
        '            <li><a href="https://myanimelist.net/forum/?_location=mal_h_m">Forums</a></li>\n' +
        '            <li><a href="https://myanimelist.net/clubs.php?_location=mal_h_m">Clubs</a></li>\n' +
        '            <li><a href="https://myanimelist.net/blog.php?_location=mal_h_m">Blogs</a></li>\n' +
        '            <li><a href="https://myanimelist.net/users.php?_location=mal_h_m">Users</a></li>\n' +
        '            <li><a href="https://discord.gg/E2xC8ZF">Discord Chat</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small2"><a href="#" class="non-link">Industry</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/news?_location=mal_h_m">News</a></li>\n' +
        '            <li><a href="https://myanimelist.net/featured?_location=mal_h_m">Featured Articles</a></li>\n' +
        '            <li><a href="https://myanimelist.net/people.php?_location=mal_h_m">People</a></li>\n' +
        '            <li><a href="https://myanimelist.net/character.php?_location=mal_h_m">Characters</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small"><a href="#" class="non-link">Watch</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m">Episode Videos</a></li>\n' +
        '            <li><a href="https://myanimelist.net/watch/promotion?_location=mal_h_m">Promotional Videos</a></li></ul>\n' +
        '        </li>\n' +
        '        <li class="smaller"><a href="#" class="non-link">Read</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="smaller"><a href="#" class="non-link">Help</a>\n' +
        '          <ul class="wide">\n' +
        '            <li><a href="https://myanimelist.net/about.php?_location=mal_h_m">About</a></li>\n' +
        '            <li><a href="https://myanimelist.net/about.php?go=support&amp;_location=mal_h_m">Support</a></li>\n' +
        '            <li><a href="https://myanimelist.net/advertising?_location=mal_h_m">Advertising</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum/?topicid=515949&amp;_location=mal_h_m">FAQ</a></li>\n' +
        '            <li><a href="https://myanimelist.net/modules.php?go=report&amp;_location=mal_h_m">Report</a></li>\n' +
        '            <li><a href="https://myanimelist.net/about.php?go=team&amp;_location=mal_h_m">Staff</a></li><li><a href="https://myanimelist.net/membership?_location=mal_h_m">MAL Supporter</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        \n' +
        '            \n' +
        '      </ul>\n' +
        '    </div>  </div>        <div id="contentWrapper" >\n' +
        '          <div>\n' +
        '            <h1 class="h1">Login</h1>          </div>\n' +
        '            <div id="content">\n' +
        '    \n' +
        '    \n' +
        '<table id="dialog" cellpadding="0" cellspacing="0" style="width: 530px;">\n' +
        '  <tr>\n' +
        '    <td class="">\n' +
        '            <div class="social-login-block mauto">\n' +
        '\n' +
        '    <p class="ff-avenir fs16 pt12 ac">Login with</p>\n' +
        '\n' +
        '    <div class="login-sns-buttons pt16 pb24 ac"><a class="icon-social-login icon-fb" href="https://myanimelist.net/sns/login/facebook?from=%2F">Facebook</a><a class="icon-social-login icon-tw" href="https://myanimelist.net/sns/login/twitter?from=%2F">Twitter</a><a class="icon-social-login icon-gp" href="https://myanimelist.net/sns/login/google?from=%2F">Google</a></div>\n' +
        '</div>\n' +
        '<form name="loginForm" method="post" action="https://myanimelist.net/login.php?from=%2F">\n' +
        '\n' +
        '          <div class="login-form-block form_password_login pb16">\n' +
        '\n' +
        '            <p class="pt16">\n' +
        '              <label class="di-b fs12 pb4">Username</label>\n' +
        '              <input type="text" class="inputtext login-inputtext" name="user_name" id="loginUserName" value="" size="30" maxlength="50">\n' +
        '            </p>\n' +
        '\n' +
        '            <p class="pt16">\n' +
        '              <span class="fl-r di-ib fs12 ff-avenir" data-ajax="false">\n' +
        '                <input id="show-password" type="checkbox" name="show_password" value="0">\n' +
        '                Show Password\n' +
        '              </span>\n' +
        '              <label class="di-b fs12 pb4">Password</label>\n' +
        '              <input type="password" id="login-password" class="inputtext login-inputtext" name="password" size="30" maxlength="50">\n' +
        '\n' +
        '              <p class="badresult-text">\n' +
        '                              </p>\n' +
        '            </p>\n' +
        '\n' +
        '            <p class="pt12">\n' +
        '              <input type="checkbox" name="cookie" value="1" checked="checked"> Always stay logged in?\n' +
        '            </p>\n' +
        '\n' +
        '            \n' +
        '                        <div class="user-password-note">\n' +
        '  <i aria-hidden="true" class="fa fa-exclamation-circle user-password-note-icon"></i>\n' +
        '  Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password.\n' +
        '</div>\n' +
        '\n' +
        '            <p class="pt16 ac">\n' +
        '              <input type="submit" class="inputButton btn-form-submit" name="sublogin" value="Login">            </p><p class="pt12 pb8 ac">\n' +
        '              <a href="https://myanimelist.net/password.php?username=1&amp;from=%2F">Forgot username?</a> | <a href="https://myanimelist.net/password.php?from=%2F">Forgot password?</a>\n' +
        '            </p>\n' +
        '            <p class="pt24 pb8 ac">\n' +
        `              <input type="button" onclick="document.location='https://myanimelist.net/register.php?from=%2F';" name="register" value="Sign Up" class="inputButton btn-form-submit small">            </p></div>\n` +
        '\n' +
        '          \n' +
        '          <input type="hidden" name="submit" value="1">\n' +
        '        </form>\n' +
        '          </td>\n' +
        '  </tr>\n' +
        '</table>\n' +
        '\n' +
        '  </div>\n' +
        '                                              </div>            <!--  control container height -->\n' +
        '            <div style="clear:both;"></div>\n' +
        '            <!-- end rightbody -->\n' +
        '          \n' +
        '                      \n' +
        '\n' +
        '                </div>\n' +
        '    <div id="ad-skin-bg-right" class="ad-skin-side-outer ad-skin-side-bg bg-right">\n' +
        '    <div id="ad-skin-right" class="ad-skin-side right" style="display: none;">\n' +
        '      <div id="ad-skin-right-absolute-block">\n' +
        '        <div id="ad-skin-right-fixed-block"></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div></div>\n' +
        '                  \n' +
        '<div class="footer-ranking">\n' +
        '  <div class="ranking-container">\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/topanime.php" class="view_more fl-r">More</a>Top Anime\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood">Fullmetal Alchemist: Brotherhood</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/anime/9253/Steins_Gate">Steins;Gate</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/anime/28977/Gintama°">Gintama°</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">Hunter x Hunter (2011)</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu">Ginga Eiyuu Densetsu</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/topanime.php?type=airing" class="view_more fl-r">More</a>Top Airing Anime\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen">Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/anime/40682/Kingdom_3rd_Season">Kingdom 3rd Season</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/anime/21/One_Piece">One Piece</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/anime/38481/Toaru_Kagaku_no_Railgun_T">Toaru Kagaku no Railgun T</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/anime/40417/Fruits_Basket_2nd_Season">Fruits Basket 2nd Season</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/character.php" class="view_more fl-r">More</a>Most Popular Characters\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/character/417/Lelouch_Lamperouge">Lamperouge, Lelouch</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/character/71/L_Lawliet">Lawliet, L</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/character/40/Luffy_Monkey_D">Monkey D., Luffy</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/character/45627/Levi">Levi</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/character/11/Edward_Elric">Elric, Edward</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '      </div>\n' +
        '</div>\n' +
        '          \n' +
        '          <footer>\n' +
        '  <div id="footer-block">\n' +
        '    <div class="footer-link-block">\n' +
        '      <p class="footer-link home di-ib">\n' +
        '        <a href="https://myanimelist.net/">Home</a>\n' +
        '      </p>\n' +
        '      <p class="footer-link di-ib">\n' +
        '        <a href="https://myanimelist.net/about.php">About</a>\n' +
        '        <a href="https://myanimelist.net/pressroom">Press Room</a>\n' +
        '        <a href="https://myanimelist.net/about.php?go=contact">Support</a>\n' +
        '        <a href="https://myanimelist.net/advertising">Advertising</a>\n' +
        '        <a href="https://myanimelist.net/forum/?topicid=515949">FAQ</a>\n' +
        '        <a href="https://myanimelist.net/about/terms_of_use">Terms</a>\n' +
        '        <a href="https://myanimelist.net/about/privacy_policy">Privacy</a>\n' +
        '        <a href="https://myanimelist.net/about/cookie_policy">Cookie</a>\n' +
        '        <a href="https://myanimelist.net/about/sitemap">Sitemap</a>\n' +
        '      </p>\n' +
        '            <p class="footer-link login di-ib">\n' +
        '        <a href="https://myanimelist.net/login.php?from=%2F" id="malLogin" rel="nofollow">Login</a>\n' +
        '        <a href="https://myanimelist.net/register.php?from=%2F">Sign Up</a>\n' +
        '      </p>\n' +
        '          </div>\n' +
        '\n' +
        '    \n' +
        '    <div class="banner-footer-anime-streaming">\n' +
        `      <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
        '\n' +
        '    </div>\n' +
        '\n' +
        '        <div class="footer-link-icon-block">\n' +
        '            <div class="footer-social-media ac">\n' +
        '        <a target="_blank" class="icon-sns icon-fb di-ib" href="https://www.facebook.com/OfficialMyAnimeList"></a>\n' +
        '        <a target="_blank" class="icon-sns icon-tw di-ib" title="Follow @myanimelist on Twitter" href="https://twitter.com/myanimelist"></a></div>\n' +
        '            <div class="footer-recommended ac">\n' +
        '        <a target="_blank" class="icon-recommended icon-tokyo-otaku-mode" href="http://otakumode.com/fb/5aO">Tokyo Otaku Mode</a>\n' +
        `        <a target="_blank" class="icon-recommended icon-honeys-anime" href="https://honeysanime.com">Honey's Anime</a>\n` +
        '        <a target="_blank" class="icon-recommended icon-manga-store" href="https://myanimelist.net/store?_location=mal_f_m">Manga Store</a>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="footer-fb">\n' +
        '      <div class="footer-fb-item">\n' +
        '        <div class="pa-d-footer">\n' +
        '                  </div>\n' +
        '      </div>\n' +
        '      <div class="footer-fb-item">\n' +
        '                <iframe class="fb-page" src="" width="450" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n' +
        '      </div>\n' +
        '      <div class="footer-fb-item">\n' +
        '        <div class="pa-d-footer">\n' +
        '                  </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '        \n' +
        '    <div id="copyright">\n' +
        '      MyAnimeList.net is a property of MyAnimeList, LLC. &copy;2020 All Rights Reserved.\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</footer>\n' +
        '    \n' +
        `        <script src='//www.googletagservices.com/tag/js/gpt.js' async="async"></script>\n` +
        '<script>\n' +
        '    var googletag = googletag || {};\n' +
        '    googletag.cmd = googletag.cmd || [];\n' +
        '</script>\n' +
        '\n' +
        '<script async>\n' +
        "  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
        '  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
        '  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
        "  })(window,document,'script','//www.google-analytics.com/analytics.js','ga')\n" +
        '\n' +
        "  ga('create', 'UA-369102-1', 'auto')\n" +
        "  ga('set', 'anonymizeIp', true)\n" +
        "  ga('require', 'linkid') // Enhanced Link Attribution\n" +
        "  ga('send', 'pageview')\n" +
        '</script>\n' +
        '  <script>\n' +
        'window.onscroll = function(e){\n' +
        '    const scrollThreshold = 50;\n' +
        '    if (window.pageYOffset >= scrollThreshold) {\n' +
        "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
        '            let t_height = ad.offsetHeight;\n' +
        '            let offsetY = ad.getBoundingClientRect().top;\n' +
        '            let screenHeight = window.outerHeight;\n' +
        '            let t_position = offsetY - screenHeight;\n' +
        '            if(-screenHeight<=(t_position　+　t_height) && t_position<0) {\n' +
        "                ad.className = 'ad-tag';\n" +
        '                (deployads = window.deployads || []).push({});\n' +
        '            }\n' +
        '        });\n' +
        '    }\n' +
        '}\n' +
        'var timer = 0;\n' +
        'window.onresize = function(e){\n' +
        '    if (timer > 0) {\n' +
        '        clearTimeout(timer);\n' +
        '    }\n' +
        '\n' +
        '    timer = setTimeout(function () {\n' +
        "        console.log('window resized');\n" +
        "        [].forEach.call(document.querySelectorAll('.ad-tag'), function(ad) {\n" +
        "            ad.className = 'no-ad';\n" +
        '            (deployads = window.deployads || []).push({});\n' +
        '        });\n' +
        "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
        "            ad.className = 'ad-tag';\n" +
        '            (deployads = window.deployads || []).push({});\n' +
        '        });\n' +
        '    }, 200);\n' +
        '}\n' +
        '</script><script src="https://www.google.com/recaptcha/api.js?hl=en" async="async"></script>\n' +
        '\n' +
        "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
        "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
        "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
        "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
        `})(window,document,'script','dataLayer','GTM-WL4QW3G');</script><script type="text/javascript">\n` +
        '    window.MAL.magia = "06410c4e6b2518e9add8f6df0ccb2da2876bb8c980aacb43a8dcaa8153c0f92c";\n' +
        '  window.MAL.madoka = "hZrDKm9k6FVRnqd3i%=K";\n' +
        '\n' +
        '  window.MAL.SLVK = "g4OvMLVOmEI3J8u7dt8f8+mAuualsqCo";\n' +
        '  window.MAL.CDN_URL = "https://cdn.myanimelist.net";\n' +
        '\n' +
        '  window.MAL.CURRENT_TUTORIAL_STEP_ID = null;\n' +
        '  window.MAL.USER_NAME = ""\n' +
        '  window.MAL.FACEBOOK.APP_ID = "360769957454434"\n' +
        '  window.MAL.FACEBOOK.API_VERSION = "v2.12"\n' +
        '</script>\n' +
        '\n' +
        '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4QW3G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n' +
        '\n' +
        '    </body>\n' +
        '</html>\n',
      [Symbol(kCapture)]: false
    },
    _resBuffered: true,
    response: [Circular],
    called: true,
    [Symbol(kCapture)]: false
  },
  req: ClientRequest {
    _events: [Object: null prototype] {
      drain: [Function],
      error: [Function],
      prefinish: [Function: requestOnPrefinish]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: 141,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    socket: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      _SNICallback: null,
      servername: 'myanimelist.net',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 8,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'myanimelist.net',
      _readableState: [ReadableState],
      readable: false,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [Circular],
      [Symbol(res)]: null,
      [Symbol(asyncId)]: 201,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 7587,
      [Symbol(kBytesWritten)]: 401,
      [Symbol(connect-options)]: [Object]
    },
    connection: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      _SNICallback: null,
      servername: 'myanimelist.net',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 8,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'myanimelist.net',
      _readableState: [ReadableState],
      readable: false,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [Circular],
      [Symbol(res)]: null,
      [Symbol(asyncId)]: 201,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 7587,
      [Symbol(kBytesWritten)]: 401,
      [Symbol(connect-options)]: [Object]
    },
    _header: 'POST /login.php?from=%2F HTTP/1.1\r\n' +
      'Host: myanimelist.net\r\n' +
      'Accept-Encoding: gzip, deflate\r\n' +
      'Content-Type: application/json\r\n' +
      'Cookie: MALSESSIONID=4002obqtoh39t4emp7d3qlvcf2;MALHLOGSESSID=073e8a4833303eb5ea2e346e54ecc887\r\n' +
      'Content-Length: 141\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _onPendingData: [Function: noopPendingOutput],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object],
      requests: {},
      sockets: {},
      freeSockets: {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    insecureHTTPParser: undefined,
    path: '/login.php?from=%2F',
    _ended: true,
    res: IncomingMessage {
      _readableState: [ReadableState],
      readable: false,
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      socket: [TLSSocket],
      connection: [TLSSocket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [TLSSocket],
      _consuming: true,
      _dumped: false,
      req: [Circular],
      setEncoding: [Function],
      on: [Function],
      text: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>    \n' +
        '<link rel="preconnect" href="//fonts.gstatic.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//fonts.googleapis.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//tags-cdn.deployads.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//www.googletagservices.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//www.googletagmanager.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//apis.google.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//pixel-sync.sitescout.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//pixel.tapad.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//c.deployads.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//requal-alleased.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//tpc.googlesyndication.com/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//googleads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="//securepubads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
        '<link rel="preconnect" href="https://cdn.myanimelist.net" crossorigin="anonymous" />\n' +
        '\n' +
        '\n' +
        '<title>Login - MyAnimeList.net\n' +
        '</title>\n' +
        '<meta name="description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!" />\n' +
        '\n' +
        '  \n' +
        '<meta name="keywords" content="anime, myanimelist, anime news, manga" />\n' +
        '<link rel="canonical" href="https://myanimelist.net/login.php" />  \n' +
        '<meta property="og:locale" content="en_US"><meta property="fb:app_id" content="360769957454434"><meta property="og:site_name" content="MyAnimeList.net"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@myanimelist"><meta property="og:title" content="Login - MyAnimeList.net "><meta property="og:image" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta name="twitter:image:src" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta property="og:url" content="https://myanimelist.net/login.php"><meta property="og:description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!">\n' +
        '\n' +
        '<meta name="referrer" content="default"><link rel="manifest" href="/manifest.json">\n' +
        '\n' +
        "<meta name='csrf_token' content='ae577223338108b194914ece5ced58ab4780725e'>\n" +
        '<meta name="fo-verify" content="1e927243-8e02-48e3-b098-a7b78c5b4e36"><meta name="viewport" content="initial-scale=1" /><link rel="preload" as="style" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
        '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js" />\n' +
        '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" />\n' +
        '\n' +
        '<link rel="stylesheet" type="text/css" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
        '\n' +
        '<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js"></script>\n' +
        `<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" id="alljs" data-params='{&quot;origin_url&quot;:&quot;https:\\/\\/myanimelist.net&quot;,&quot;is_request_bot_filter_log&quot;:true}' async="async"></script>\n` +
        '\n' +
        '\n' +
        '\n' +
        '<link rel="search" type="application/opensearchdescription+xml" href="https://myanimelist.net/plugins/myanimelist.xml" title="MyAnimeList" />\n' +
        '\n' +
        '<link rel="shortcut icon" href="https://cdn.myanimelist.net/images/favicon.ico" />\n' +
        '\n' +
        '<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">\n' +
        '  <script src="//tags-cdn.deployads.com/a/myanimelist.net.js" async="async"></script>      </head>\n' +
        '\n' +
        '          <body class="page-common  page_login page_password_login" data-ms="true" data-country-code="FR">\n' +
        '  \n' +
        '      <div id="myanimelist">\n' +
        '  \n' +
        "    <script type='text/javascript'>\n" +
        "    window.MAL.SkinAd.prepareForSkin('');\n" +
        '  </script>\n' +
        '\n' +
        '    <div id="ad-skin-bg-left" class="ad-skin-side-outer ad-skin-side-bg bg-left">\n' +
        '    <div id="ad-skin-left" class="ad-skin-side left" style="display: none;">\n' +
        '      <div id="ad-skin-left-absolute-block">\n' +
        '        <div id="ad-skin-left-fixed-block"></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div><div class="wrapper ">\n' +
        '                <div id="headerSmall" class="">\n' +
        '\n' +
        '<script>\n' +
        '    var trackOutboundLink = function(url) {\n' +
        "        ga('send', 'event', 'outbound', 'click', url, {\n" +
        "            'transport': 'beacon',\n" +
        "            'hitCallback': function(){return true;}\n" +
        '        });\n' +
        '    }\n' +
        '</script><div class="banner-header-anime-straming" style="right:480px;">\n' +
        `  <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
        '\n' +
        '</div>\n' +
        '\n' +
        '\n' +
        '<div id="header-menu" ><div class="header-menu-login"><a class="btn-mal-service"\n' +
        '             href="https://myanimelist.net/membership?_location=mal_h_u">Hide Ads</a><a class="btn-login" href="https://myanimelist.net/login.php?from=%2F" id="malLogin">Login</a><a class="btn-signup" href="https://myanimelist.net/register.php?from=%2F">Sign Up</a></div></div><a href="/" class="link-mal-logo">MyAnimeList.net</a>\n' +
        '        </div>\n' +
        '                \n' +
        '          <div id="menu" class="">\n' +
        '    <div id="menu_right"><script type="text/x-template" id="incremental-result-item-anime"><div class="list anime" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Aired: ${ item.payload.aired }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-manga"><div class="list manga" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Published: ${ item.payload.published }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-character"><div class="list character" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div><div class="extra-info"><ul class="related-works"><li v-for="work in item.payload.related_works" class="fs-i">- ${ work }</li></ul>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-person"><div class="list person" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.alternative_name">${ item.payload.alternative_name }<br></span>Birthday: ${ item.payload.birthday }<br>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-store"><div class="list store" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info store"></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info store"></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-club"><div class="list club" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div><div class="extra-info">Members: ${ item.payload.members }<br>Category: ${ item.payload.category }<br>Created by: ${ item.payload.created_by }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-user"><div class="list user" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.authority">${ item.payload.authority }<br></span>Joined: ${ item.payload.joined }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-news"><div class="list news" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-featured"><div class="list featured" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-forum"><div class="list forum" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
        '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="extra-info">${ item.payload.date }<br><span>in ${ item.payload.category }</span></div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
        '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-separator"><div class="list separator"><div class="separator"><span v-show="item.name == \'anime\'">Anime</span><span v-show="item.name == \'manga\'">Manga</span><span v-show="item.name == \'character\'">Characters</span><span v-show="item.name == \'person\'">People</span></div></div></script><div id="top-search-bar"><form id="searchBar" method="get" class="searchBar" @submit.prevent="jump()"><div class="form-select-outer fl-l"><select name="type" id="topSearchValue" class="inputtext" v-model="type"><option value="all">All</option><option value="anime">Anime</option><option value="manga">Manga</option><option value="character">Characters</option><option value="person">People</option><option value="store">Manga Store</option><option value="news">News</option><option value="featured">Featured Articles</option><option value="forum">Forum</option><option value="club">Clubs</option><option value="user">Users</option></select></div><input v-model="keyword" id="topSearchText" type="text"\n' +
        '            name="keyword" class="inputtext fl-l" placeholder="Search Anime, Manga, and more..."\n' +
        '            size="30" autocomplete="off"\n' +
        '            @keydown.up.prevent="moveSelection(-1)" @keydown.down.prevent="moveSelection(1)"\n' +
        `            @focus="isFocused = true" @blur="isFocused = false"><input id="topSearchButon" class="fl-l" :class="{'notActive': (keyword.length < 3)}" type="submit" value="&#xf002"></form><div id="topSearchResultList" class="incrementalSearchResultList" :style="{display: (showResult ? 'block' : 'none')}" @mousedown.prevent=""><div v-for="(item, i) in items" @mouseover="selection=i"><component :is="resolveComponent(item)" :item="item" :focus="selection == i" :url="generateItemPageUrl(item)"></component></div><div class="list list-bottom" :class="{'focus': selection == -1}" @mouseover="selection = -1"\n` +
        `               :style="{display: (showViewAllLink ? 'block' : 'none')}"><a :href="resultPageUrl">\n` +
        '              View all results for <span class="fw-b">${ keyword }</span><i v-show="isRequesting" class="fa fa-spinner fa-spin ml4"></i></a></div></div></div></div><div id="menu_left">\n' +
        '      <ul id="nav">\n' +
        '        <li class="small"><a href="#" class="non-link">Anime</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/anime.php?_location=mal_h_m">Anime Search</a></li>\n' +
        '            <li><a href="https://myanimelist.net/topanime.php?_location=mal_h_m">Top Anime</a></li>\n' +
        '            <li><a href="https://myanimelist.net/anime/season?_location=mal_h_m">Seasonal Anime</a></li>\n' +
        '                        <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m_a">Videos</a></li>\n' +
        '            <li><a href="https://myanimelist.net/reviews.php?t=anime&amp;_location=mal_h_m">Reviews</a></li>\n' +
        '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=anime&amp;_location=mal_h_m">Recommendations</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum?topicid=1818368&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small"><a href="#" class="non-link">Manga</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/manga.php?_location=mal_h_m">Manga Search</a></li>\n' +
        '            <li><a href="https://myanimelist.net/topmanga.php?_location=mal_h_m">Top Manga</a></li>\n' +
        '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
        '            <li><a href="https://myanimelist.net/reviews.php?t=manga&amp;_location=mal_h_m">Reviews</a></li>\n' +
        '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=manga&amp;_location=mal_h_m">Recommendations</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum?topicid=1818367&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li><a href="#" class="non-link">Community</a>\n' +
        '          <ul>\n' +
        '            <li><a href="https://myanimelist.net/forum/?_location=mal_h_m">Forums</a></li>\n' +
        '            <li><a href="https://myanimelist.net/clubs.php?_location=mal_h_m">Clubs</a></li>\n' +
        '            <li><a href="https://myanimelist.net/blog.php?_location=mal_h_m">Blogs</a></li>\n' +
        '            <li><a href="https://myanimelist.net/users.php?_location=mal_h_m">Users</a></li>\n' +
        '            <li><a href="https://discord.gg/E2xC8ZF">Discord Chat</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small2"><a href="#" class="non-link">Industry</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/news?_location=mal_h_m">News</a></li>\n' +
        '            <li><a href="https://myanimelist.net/featured?_location=mal_h_m">Featured Articles</a></li>\n' +
        '            <li><a href="https://myanimelist.net/people.php?_location=mal_h_m">People</a></li>\n' +
        '            <li><a href="https://myanimelist.net/character.php?_location=mal_h_m">Characters</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="small"><a href="#" class="non-link">Watch</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m">Episode Videos</a></li>\n' +
        '            <li><a href="https://myanimelist.net/watch/promotion?_location=mal_h_m">Promotional Videos</a></li></ul>\n' +
        '        </li>\n' +
        '        <li class="smaller"><a href="#" class="non-link">Read</a>\n' +
        '          <ul class="wider">\n' +
        '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li class="smaller"><a href="#" class="non-link">Help</a>\n' +
        '          <ul class="wide">\n' +
        '            <li><a href="https://myanimelist.net/about.php?_location=mal_h_m">About</a></li>\n' +
        '            <li><a href="https://myanimelist.net/about.php?go=support&amp;_location=mal_h_m">Support</a></li>\n' +
        '            <li><a href="https://myanimelist.net/advertising?_location=mal_h_m">Advertising</a></li>\n' +
        '            <li><a href="https://myanimelist.net/forum/?topicid=515949&amp;_location=mal_h_m">FAQ</a></li>\n' +
        '            <li><a href="https://myanimelist.net/modules.php?go=report&amp;_location=mal_h_m">Report</a></li>\n' +
        '            <li><a href="https://myanimelist.net/about.php?go=team&amp;_location=mal_h_m">Staff</a></li><li><a href="https://myanimelist.net/membership?_location=mal_h_m">MAL Supporter</a></li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        \n' +
        '            \n' +
        '      </ul>\n' +
        '    </div>  </div>        <div id="contentWrapper" >\n' +
        '          <div>\n' +
        '            <h1 class="h1">Login</h1>          </div>\n' +
        '            <div id="content">\n' +
        '    \n' +
        '    \n' +
        '<table id="dialog" cellpadding="0" cellspacing="0" style="width: 530px;">\n' +
        '  <tr>\n' +
        '    <td class="">\n' +
        '            <div class="social-login-block mauto">\n' +
        '\n' +
        '    <p class="ff-avenir fs16 pt12 ac">Login with</p>\n' +
        '\n' +
        '    <div class="login-sns-buttons pt16 pb24 ac"><a class="icon-social-login icon-fb" href="https://myanimelist.net/sns/login/facebook?from=%2F">Facebook</a><a class="icon-social-login icon-tw" href="https://myanimelist.net/sns/login/twitter?from=%2F">Twitter</a><a class="icon-social-login icon-gp" href="https://myanimelist.net/sns/login/google?from=%2F">Google</a></div>\n' +
        '</div>\n' +
        '<form name="loginForm" method="post" action="https://myanimelist.net/login.php?from=%2F">\n' +
        '\n' +
        '          <div class="login-form-block form_password_login pb16">\n' +
        '\n' +
        '            <p class="pt16">\n' +
        '              <label class="di-b fs12 pb4">Username</label>\n' +
        '              <input type="text" class="inputtext login-inputtext" name="user_name" id="loginUserName" value="" size="30" maxlength="50">\n' +
        '            </p>\n' +
        '\n' +
        '            <p class="pt16">\n' +
        '              <span class="fl-r di-ib fs12 ff-avenir" data-ajax="false">\n' +
        '                <input id="show-password" type="checkbox" name="show_password" value="0">\n' +
        '                Show Password\n' +
        '              </span>\n' +
        '              <label class="di-b fs12 pb4">Password</label>\n' +
        '              <input type="password" id="login-password" class="inputtext login-inputtext" name="password" size="30" maxlength="50">\n' +
        '\n' +
        '              <p class="badresult-text">\n' +
        '                              </p>\n' +
        '            </p>\n' +
        '\n' +
        '            <p class="pt12">\n' +
        '              <input type="checkbox" name="cookie" value="1" checked="checked"> Always stay logged in?\n' +
        '            </p>\n' +
        '\n' +
        '            \n' +
        '                        <div class="user-password-note">\n' +
        '  <i aria-hidden="true" class="fa fa-exclamation-circle user-password-note-icon"></i>\n' +
        '  Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password.\n' +
        '</div>\n' +
        '\n' +
        '            <p class="pt16 ac">\n' +
        '              <input type="submit" class="inputButton btn-form-submit" name="sublogin" value="Login">            </p><p class="pt12 pb8 ac">\n' +
        '              <a href="https://myanimelist.net/password.php?username=1&amp;from=%2F">Forgot username?</a> | <a href="https://myanimelist.net/password.php?from=%2F">Forgot password?</a>\n' +
        '            </p>\n' +
        '            <p class="pt24 pb8 ac">\n' +
        `              <input type="button" onclick="document.location='https://myanimelist.net/register.php?from=%2F';" name="register" value="Sign Up" class="inputButton btn-form-submit small">            </p></div>\n` +
        '\n' +
        '          \n' +
        '          <input type="hidden" name="submit" value="1">\n' +
        '        </form>\n' +
        '          </td>\n' +
        '  </tr>\n' +
        '</table>\n' +
        '\n' +
        '  </div>\n' +
        '                                              </div>            <!--  control container height -->\n' +
        '            <div style="clear:both;"></div>\n' +
        '            <!-- end rightbody -->\n' +
        '          \n' +
        '                      \n' +
        '\n' +
        '                </div>\n' +
        '    <div id="ad-skin-bg-right" class="ad-skin-side-outer ad-skin-side-bg bg-right">\n' +
        '    <div id="ad-skin-right" class="ad-skin-side right" style="display: none;">\n' +
        '      <div id="ad-skin-right-absolute-block">\n' +
        '        <div id="ad-skin-right-fixed-block"></div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div></div>\n' +
        '                  \n' +
        '<div class="footer-ranking">\n' +
        '  <div class="ranking-container">\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/topanime.php" class="view_more fl-r">More</a>Top Anime\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood">Fullmetal Alchemist: Brotherhood</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/anime/9253/Steins_Gate">Steins;Gate</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/anime/28977/Gintama°">Gintama°</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">Hunter x Hunter (2011)</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu">Ginga Eiyuu Densetsu</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/topanime.php?type=airing" class="view_more fl-r">More</a>Top Airing Anime\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen">Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/anime/40682/Kingdom_3rd_Season">Kingdom 3rd Season</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/anime/21/One_Piece">One Piece</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/anime/38481/Toaru_Kagaku_no_Railgun_T">Toaru Kagaku no Railgun T</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/anime/40417/Fruits_Basket_2nd_Season">Fruits Basket 2nd Season</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '          <div class="ranking-unit">\n' +
        '        <h3 class="title"><a href="https://myanimelist.net/character.php" class="view_more fl-r">More</a>Most Popular Characters\n' +
        '        </h3>\n' +
        '        <ol>\n' +
        '                      <li>\n' +
        '              <span class="rank">1</span>\n' +
        '              <a href="https://myanimelist.net/character/417/Lelouch_Lamperouge">Lamperouge, Lelouch</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">2</span>\n' +
        '              <a href="https://myanimelist.net/character/71/L_Lawliet">Lawliet, L</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">3</span>\n' +
        '              <a href="https://myanimelist.net/character/40/Luffy_Monkey_D">Monkey D., Luffy</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">4</span>\n' +
        '              <a href="https://myanimelist.net/character/45627/Levi">Levi</a>\n' +
        '            </li>\n' +
        '                      <li>\n' +
        '              <span class="rank">5</span>\n' +
        '              <a href="https://myanimelist.net/character/11/Edward_Elric">Elric, Edward</a>\n' +
        '            </li>\n' +
        '                  </ol>\n' +
        '      </div>\n' +
        '      </div>\n' +
        '</div>\n' +
        '          \n' +
        '          <footer>\n' +
        '  <div id="footer-block">\n' +
        '    <div class="footer-link-block">\n' +
        '      <p class="footer-link home di-ib">\n' +
        '        <a href="https://myanimelist.net/">Home</a>\n' +
        '      </p>\n' +
        '      <p class="footer-link di-ib">\n' +
        '        <a href="https://myanimelist.net/about.php">About</a>\n' +
        '        <a href="https://myanimelist.net/pressroom">Press Room</a>\n' +
        '        <a href="https://myanimelist.net/about.php?go=contact">Support</a>\n' +
        '        <a href="https://myanimelist.net/advertising">Advertising</a>\n' +
        '        <a href="https://myanimelist.net/forum/?topicid=515949">FAQ</a>\n' +
        '        <a href="https://myanimelist.net/about/terms_of_use">Terms</a>\n' +
        '        <a href="https://myanimelist.net/about/privacy_policy">Privacy</a>\n' +
        '        <a href="https://myanimelist.net/about/cookie_policy">Cookie</a>\n' +
        '        <a href="https://myanimelist.net/about/sitemap">Sitemap</a>\n' +
        '      </p>\n' +
        '            <p class="footer-link login di-ib">\n' +
        '        <a href="https://myanimelist.net/login.php?from=%2F" id="malLogin" rel="nofollow">Login</a>\n' +
        '        <a href="https://myanimelist.net/register.php?from=%2F">Sign Up</a>\n' +
        '      </p>\n' +
        '          </div>\n' +
        '\n' +
        '    \n' +
        '    <div class="banner-footer-anime-streaming">\n' +
        `      <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
        '\n' +
        '    </div>\n' +
        '\n' +
        '        <div class="footer-link-icon-block">\n' +
        '            <div class="footer-social-media ac">\n' +
        '        <a target="_blank" class="icon-sns icon-fb di-ib" href="https://www.facebook.com/OfficialMyAnimeList"></a>\n' +
        '        <a target="_blank" class="icon-sns icon-tw di-ib" title="Follow @myanimelist on Twitter" href="https://twitter.com/myanimelist"></a></div>\n' +
        '            <div class="footer-recommended ac">\n' +
        '        <a target="_blank" class="icon-recommended icon-tokyo-otaku-mode" href="http://otakumode.com/fb/5aO">Tokyo Otaku Mode</a>\n' +
        `        <a target="_blank" class="icon-recommended icon-honeys-anime" href="https://honeysanime.com">Honey's Anime</a>\n` +
        '        <a target="_blank" class="icon-recommended icon-manga-store" href="https://myanimelist.net/store?_location=mal_f_m">Manga Store</a>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="footer-fb">\n' +
        '      <div class="footer-fb-item">\n' +
        '        <div class="pa-d-footer">\n' +
        '                  </div>\n' +
        '      </div>\n' +
        '      <div class="footer-fb-item">\n' +
        '                <iframe class="fb-page" src="" width="450" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n' +
        '      </div>\n' +
        '      <div class="footer-fb-item">\n' +
        '        <div class="pa-d-footer">\n' +
        '                  </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '        \n' +
        '    <div id="copyright">\n' +
        '      MyAnimeList.net is a property of MyAnimeList, LLC. &copy;2020 All Rights Reserved.\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</footer>\n' +
        '    \n' +
        `        <script src='//www.googletagservices.com/tag/js/gpt.js' async="async"></script>\n` +
        '<script>\n' +
        '    var googletag = googletag || {};\n' +
        '    googletag.cmd = googletag.cmd || [];\n' +
        '</script>\n' +
        '\n' +
        '<script async>\n' +
        "  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
        '  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
        '  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
        "  })(window,document,'script','//www.google-analytics.com/analytics.js','ga')\n" +
        '\n' +
        "  ga('create', 'UA-369102-1', 'auto')\n" +
        "  ga('set', 'anonymizeIp', true)\n" +
        "  ga('require', 'linkid') // Enhanced Link Attribution\n" +
        "  ga('send', 'pageview')\n" +
        '</script>\n' +
        '  <script>\n' +
        'window.onscroll = function(e){\n' +
        '    const scrollThreshold = 50;\n' +
        '    if (window.pageYOffset >= scrollThreshold) {\n' +
        "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
        '            let t_height = ad.offsetHeight;\n' +
        '            let offsetY = ad.getBoundingClientRect().top;\n' +
        '            let screenHeight = window.outerHeight;\n' +
        '            let t_position = offsetY - screenHeight;\n' +
        '            if(-screenHeight<=(t_position　+　t_height) && t_position<0) {\n' +
        "                ad.className = 'ad-tag';\n" +
        '                (deployads = window.deployads || []).push({});\n' +
        '            }\n' +
        '        });\n' +
        '    }\n' +
        '}\n' +
        'var timer = 0;\n' +
        'window.onresize = function(e){\n' +
        '    if (timer > 0) {\n' +
        '        clearTimeout(timer);\n' +
        '    }\n' +
        '\n' +
        '    timer = setTimeout(function () {\n' +
        "        console.log('window resized');\n" +
        "        [].forEach.call(document.querySelectorAll('.ad-tag'), function(ad) {\n" +
        "            ad.className = 'no-ad';\n" +
        '            (deployads = window.deployads || []).push({});\n' +
        '        });\n' +
        "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
        "            ad.className = 'ad-tag';\n" +
        '            (deployads = window.deployads || []).push({});\n' +
        '        });\n' +
        '    }, 200);\n' +
        '}\n' +
        '</script><script src="https://www.google.com/recaptcha/api.js?hl=en" async="async"></script>\n' +
        '\n' +
        "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
        "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
        "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
        "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
        `})(window,document,'script','dataLayer','GTM-WL4QW3G');</script><script type="text/javascript">\n` +
        '    window.MAL.magia = "06410c4e6b2518e9add8f6df0ccb2da2876bb8c980aacb43a8dcaa8153c0f92c";\n' +
        '  window.MAL.madoka = "hZrDKm9k6FVRnqd3i%=K";\n' +
        '\n' +
        '  window.MAL.SLVK = "g4OvMLVOmEI3J8u7dt8f8+mAuualsqCo";\n' +
        '  window.MAL.CDN_URL = "https://cdn.myanimelist.net";\n' +
        '\n' +
        '  window.MAL.CURRENT_TUTORIAL_STEP_ID = null;\n' +
        '  window.MAL.USER_NAME = ""\n' +
        '  window.MAL.FACEBOOK.APP_ID = "360769957454434"\n' +
        '  window.MAL.FACEBOOK.API_VERSION = "v2.12"\n' +
        '</script>\n' +
        '\n' +
        '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4QW3G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n' +
        '\n' +
        '    </body>\n' +
        '</html>\n',
      [Symbol(kCapture)]: false
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    [Symbol(kCapture)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      host: [Array],
      'accept-encoding': [Array],
      'content-type': [Array],
      cookie: [Array],
      'content-length': [Array]
    }
  },
  text: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>    \n' +
    '<link rel="preconnect" href="//fonts.gstatic.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//fonts.googleapis.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//tags-cdn.deployads.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//www.googletagservices.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//www.googletagmanager.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//apis.google.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//pixel-sync.sitescout.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//pixel.tapad.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//c.deployads.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//requal-alleased.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//tpc.googlesyndication.com/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//googleads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="//securepubads.g.doubleclick.net/" crossorigin="anonymous" />\n' +
    '<link rel="preconnect" href="https://cdn.myanimelist.net" crossorigin="anonymous" />\n' +
    '\n' +
    '\n' +
    '<title>Login - MyAnimeList.net\n' +
    '</title>\n' +
    '<meta name="description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!" />\n' +
    '\n' +
    '  \n' +
    '<meta name="keywords" content="anime, myanimelist, anime news, manga" />\n' +
    '<link rel="canonical" href="https://myanimelist.net/login.php" />  \n' +
    '<meta property="og:locale" content="en_US"><meta property="fb:app_id" content="360769957454434"><meta property="og:site_name" content="MyAnimeList.net"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@myanimelist"><meta property="og:title" content="Login - MyAnimeList.net "><meta property="og:image" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta name="twitter:image:src" content="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"><meta property="og:url" content="https://myanimelist.net/login.php"><meta property="og:description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Login or Signup now! Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!">\n' +
    '\n' +
    '<meta name="referrer" content="default"><link rel="manifest" href="/manifest.json">\n' +
    '\n' +
    "<meta name='csrf_token' content='ae577223338108b194914ece5ced58ab4780725e'>\n" +
    '<meta name="fo-verify" content="1e927243-8e02-48e3-b098-a7b78c5b4e36"><meta name="viewport" content="initial-scale=1" /><link rel="preload" as="style" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
    '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js" />\n' +
    '<link rel="preload" as="script" href="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" />\n' +
    '\n' +
    '<link rel="stylesheet" type="text/css" href="https://cdn.myanimelist.net/static/assets/css/pc/style-65fd6d23e6.css" />\n' +
    '\n' +
    '<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/header-e1fc28402e.js"></script>\n' +
    `<script type="text/javascript" src="https://cdn.myanimelist.net/static/assets/js/pc/all-1bd6b6e946.js" id="alljs" data-params='{&quot;origin_url&quot;:&quot;https:\\/\\/myanimelist.net&quot;,&quot;is_request_bot_filter_log&quot;:true}' async="async"></script>\n` +
    '\n' +
    '\n' +
    '\n' +
    '<link rel="search" type="application/opensearchdescription+xml" href="https://myanimelist.net/plugins/myanimelist.xml" title="MyAnimeList" />\n' +
    '\n' +
    '<link rel="shortcut icon" href="https://cdn.myanimelist.net/images/favicon.ico" />\n' +
    '\n' +
    '<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">\n' +
    '  <script src="//tags-cdn.deployads.com/a/myanimelist.net.js" async="async"></script>      </head>\n' +
    '\n' +
    '          <body class="page-common  page_login page_password_login" data-ms="true" data-country-code="FR">\n' +
    '  \n' +
    '      <div id="myanimelist">\n' +
    '  \n' +
    "    <script type='text/javascript'>\n" +
    "    window.MAL.SkinAd.prepareForSkin('');\n" +
    '  </script>\n' +
    '\n' +
    '    <div id="ad-skin-bg-left" class="ad-skin-side-outer ad-skin-side-bg bg-left">\n' +
    '    <div id="ad-skin-left" class="ad-skin-side left" style="display: none;">\n' +
    '      <div id="ad-skin-left-absolute-block">\n' +
    '        <div id="ad-skin-left-fixed-block"></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div><div class="wrapper ">\n' +
    '                <div id="headerSmall" class="">\n' +
    '\n' +
    '<script>\n' +
    '    var trackOutboundLink = function(url) {\n' +
    "        ga('send', 'event', 'outbound', 'click', url, {\n" +
    "            'transport': 'beacon',\n" +
    "            'hitCallback': function(){return true;}\n" +
    '        });\n' +
    '    }\n' +
    '</script><div class="banner-header-anime-straming" style="right:480px;">\n' +
    `  <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div id="header-menu" ><div class="header-menu-login"><a class="btn-mal-service"\n' +
    '             href="https://myanimelist.net/membership?_location=mal_h_u">Hide Ads</a><a class="btn-login" href="https://myanimelist.net/login.php?from=%2F" id="malLogin">Login</a><a class="btn-signup" href="https://myanimelist.net/register.php?from=%2F">Sign Up</a></div></div><a href="/" class="link-mal-logo">MyAnimeList.net</a>\n' +
    '        </div>\n' +
    '                \n' +
    '          <div id="menu" class="">\n' +
    '    <div id="menu_right"><script type="text/x-template" id="incremental-result-item-anime"><div class="list anime" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Aired: ${ item.payload.aired }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info anime"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-manga"><div class="list manga" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name } <span class="media-type">(${ item.payload.media_type })</span></div><div class="extra-info">Published: ${ item.payload.published }<br>Score: ${ item.payload.score }<br>Status: ${ item.payload.status }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info manga"><div class="name">${ item.name }</div><div class="media-type">(${ mediaTypeWithStartYear })</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-character"><div class="list character" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div><div class="extra-info"><ul class="related-works"><li v-for="work in item.payload.related_works" class="fs-i">- ${ work }</li></ul>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info character"><div class="name"  v-html="item.name"></div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-person"><div class="list person" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.alternative_name">${ item.payload.alternative_name }<br></span>Birthday: ${ item.payload.birthday }<br>Favorites: ${ item.payload.favorites }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info person"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-store"><div class="list store" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info store"></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info store"></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-club"><div class="list club" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div><div class="extra-info">Members: ${ item.payload.members }<br>Category: ${ item.payload.category }<br>Created by: ${ item.payload.created_by }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info club"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-user"><div class="list user" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div><div class="extra-info"><span v-if="item.payload.authority">${ item.payload.authority }<br></span>Joined: ${ item.payload.joined }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info user"><div class="name">${ item.name }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-news"><div class="list news" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info news"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-featured"><div class="list featured" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="extra-info">${ item.payload.date }</div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info featured"><div class="name">${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-forum"><div class="list forum" :class="{\'focus\': focus}"><a :href="url" class="clearfix"><div class="on" v-if="focus"><span class="image" :style="{\'background-image\': \'url(\' + item.image_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
    '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="extra-info">${ item.payload.date }<br><span>in ${ item.payload.category }</span></div></div></div><div class="off" v-if="!focus"><span class="image" :style="{\'background-image\': \'url(\' + item.thumbnail_url + \')\'}"></span><div class="info forum"><div class="name"><span v-show="item.payload.work_title">${ item.payload.work_title}\n' +
    '                      <i class="fa fa-caret-right"></i></span> ${ item.name }</div><div class="media-type">${ item.payload.date }</div></div></div></a></div></script><script type="text/x-template" id="incremental-result-item-separator"><div class="list separator"><div class="separator"><span v-show="item.name == \'anime\'">Anime</span><span v-show="item.name == \'manga\'">Manga</span><span v-show="item.name == \'character\'">Characters</span><span v-show="item.name == \'person\'">People</span></div></div></script><div id="top-search-bar"><form id="searchBar" method="get" class="searchBar" @submit.prevent="jump()"><div class="form-select-outer fl-l"><select name="type" id="topSearchValue" class="inputtext" v-model="type"><option value="all">All</option><option value="anime">Anime</option><option value="manga">Manga</option><option value="character">Characters</option><option value="person">People</option><option value="store">Manga Store</option><option value="news">News</option><option value="featured">Featured Articles</option><option value="forum">Forum</option><option value="club">Clubs</option><option value="user">Users</option></select></div><input v-model="keyword" id="topSearchText" type="text"\n' +
    '            name="keyword" class="inputtext fl-l" placeholder="Search Anime, Manga, and more..."\n' +
    '            size="30" autocomplete="off"\n' +
    '            @keydown.up.prevent="moveSelection(-1)" @keydown.down.prevent="moveSelection(1)"\n' +
    `            @focus="isFocused = true" @blur="isFocused = false"><input id="topSearchButon" class="fl-l" :class="{'notActive': (keyword.length < 3)}" type="submit" value="&#xf002"></form><div id="topSearchResultList" class="incrementalSearchResultList" :style="{display: (showResult ? 'block' : 'none')}" @mousedown.prevent=""><div v-for="(item, i) in items" @mouseover="selection=i"><component :is="resolveComponent(item)" :item="item" :focus="selection == i" :url="generateItemPageUrl(item)"></component></div><div class="list list-bottom" :class="{'focus': selection == -1}" @mouseover="selection = -1"\n` +
    `               :style="{display: (showViewAllLink ? 'block' : 'none')}"><a :href="resultPageUrl">\n` +
    '              View all results for <span class="fw-b">${ keyword }</span><i v-show="isRequesting" class="fa fa-spinner fa-spin ml4"></i></a></div></div></div></div><div id="menu_left">\n' +
    '      <ul id="nav">\n' +
    '        <li class="small"><a href="#" class="non-link">Anime</a>\n' +
    '          <ul class="wider">\n' +
    '            <li><a href="https://myanimelist.net/anime.php?_location=mal_h_m">Anime Search</a></li>\n' +
    '            <li><a href="https://myanimelist.net/topanime.php?_location=mal_h_m">Top Anime</a></li>\n' +
    '            <li><a href="https://myanimelist.net/anime/season?_location=mal_h_m">Seasonal Anime</a></li>\n' +
    '                        <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m_a">Videos</a></li>\n' +
    '            <li><a href="https://myanimelist.net/reviews.php?t=anime&amp;_location=mal_h_m">Reviews</a></li>\n' +
    '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=anime&amp;_location=mal_h_m">Recommendations</a></li>\n' +
    '            <li><a href="https://myanimelist.net/forum?topicid=1818368&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="small"><a href="#" class="non-link">Manga</a>\n' +
    '          <ul class="wider">\n' +
    '            <li><a href="https://myanimelist.net/manga.php?_location=mal_h_m">Manga Search</a></li>\n' +
    '            <li><a href="https://myanimelist.net/topmanga.php?_location=mal_h_m">Top Manga</a></li>\n' +
    '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
    '            <li><a href="https://myanimelist.net/reviews.php?t=manga&amp;_location=mal_h_m">Reviews</a></li>\n' +
    '            <li><a href="https://myanimelist.net/recommendations.php?s=recentrecs&amp;t=manga&amp;_location=mal_h_m">Recommendations</a></li>\n' +
    '            <li><a href="https://myanimelist.net/forum?topicid=1818367&amp;_location=mal_h_m">2020 Challenge</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li><a href="#" class="non-link">Community</a>\n' +
    '          <ul>\n' +
    '            <li><a href="https://myanimelist.net/forum/?_location=mal_h_m">Forums</a></li>\n' +
    '            <li><a href="https://myanimelist.net/clubs.php?_location=mal_h_m">Clubs</a></li>\n' +
    '            <li><a href="https://myanimelist.net/blog.php?_location=mal_h_m">Blogs</a></li>\n' +
    '            <li><a href="https://myanimelist.net/users.php?_location=mal_h_m">Users</a></li>\n' +
    '            <li><a href="https://discord.gg/E2xC8ZF">Discord Chat</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="small2"><a href="#" class="non-link">Industry</a>\n' +
    '          <ul class="wider">\n' +
    '            <li><a href="https://myanimelist.net/news?_location=mal_h_m">News</a></li>\n' +
    '            <li><a href="https://myanimelist.net/featured?_location=mal_h_m">Featured Articles</a></li>\n' +
    '            <li><a href="https://myanimelist.net/people.php?_location=mal_h_m">People</a></li>\n' +
    '            <li><a href="https://myanimelist.net/character.php?_location=mal_h_m">Characters</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="small"><a href="#" class="non-link">Watch</a>\n' +
    '          <ul class="wider">\n' +
    '            <li><a href="https://myanimelist.net/watch/episode?_location=mal_h_m">Episode Videos</a></li>\n' +
    '            <li><a href="https://myanimelist.net/watch/promotion?_location=mal_h_m">Promotional Videos</a></li></ul>\n' +
    '        </li>\n' +
    '        <li class="smaller"><a href="#" class="non-link">Read</a>\n' +
    '          <ul class="wider">\n' +
    '            <li><a href="https://myanimelist.net/store?_location=mal_h_m">Manga Store</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="smaller"><a href="#" class="non-link">Help</a>\n' +
    '          <ul class="wide">\n' +
    '            <li><a href="https://myanimelist.net/about.php?_location=mal_h_m">About</a></li>\n' +
    '            <li><a href="https://myanimelist.net/about.php?go=support&amp;_location=mal_h_m">Support</a></li>\n' +
    '            <li><a href="https://myanimelist.net/advertising?_location=mal_h_m">Advertising</a></li>\n' +
    '            <li><a href="https://myanimelist.net/forum/?topicid=515949&amp;_location=mal_h_m">FAQ</a></li>\n' +
    '            <li><a href="https://myanimelist.net/modules.php?go=report&amp;_location=mal_h_m">Report</a></li>\n' +
    '            <li><a href="https://myanimelist.net/about.php?go=team&amp;_location=mal_h_m">Staff</a></li><li><a href="https://myanimelist.net/membership?_location=mal_h_m">MAL Supporter</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        \n' +
    '            \n' +
    '      </ul>\n' +
    '    </div>  </div>        <div id="contentWrapper" >\n' +
    '          <div>\n' +
    '            <h1 class="h1">Login</h1>          </div>\n' +
    '            <div id="content">\n' +
    '    \n' +
    '    \n' +
    '<table id="dialog" cellpadding="0" cellspacing="0" style="width: 530px;">\n' +
    '  <tr>\n' +
    '    <td class="">\n' +
    '            <div class="social-login-block mauto">\n' +
    '\n' +
    '    <p class="ff-avenir fs16 pt12 ac">Login with</p>\n' +
    '\n' +
    '    <div class="login-sns-buttons pt16 pb24 ac"><a class="icon-social-login icon-fb" href="https://myanimelist.net/sns/login/facebook?from=%2F">Facebook</a><a class="icon-social-login icon-tw" href="https://myanimelist.net/sns/login/twitter?from=%2F">Twitter</a><a class="icon-social-login icon-gp" href="https://myanimelist.net/sns/login/google?from=%2F">Google</a></div>\n' +
    '</div>\n' +
    '<form name="loginForm" method="post" action="https://myanimelist.net/login.php?from=%2F">\n' +
    '\n' +
    '          <div class="login-form-block form_password_login pb16">\n' +
    '\n' +
    '            <p class="pt16">\n' +
    '              <label class="di-b fs12 pb4">Username</label>\n' +
    '              <input type="text" class="inputtext login-inputtext" name="user_name" id="loginUserName" value="" size="30" maxlength="50">\n' +
    '            </p>\n' +
    '\n' +
    '            <p class="pt16">\n' +
    '              <span class="fl-r di-ib fs12 ff-avenir" data-ajax="false">\n' +
    '                <input id="show-password" type="checkbox" name="show_password" value="0">\n' +
    '                Show Password\n' +
    '              </span>\n' +
    '              <label class="di-b fs12 pb4">Password</label>\n' +
    '              <input type="password" id="login-password" class="inputtext login-inputtext" name="password" size="30" maxlength="50">\n' +
    '\n' +
    '              <p class="badresult-text">\n' +
    '                              </p>\n' +
    '            </p>\n' +
    '\n' +
    '            <p class="pt12">\n' +
    '              <input type="checkbox" name="cookie" value="1" checked="checked"> Always stay logged in?\n' +
    '            </p>\n' +
    '\n' +
    '            \n' +
    '                        <div class="user-password-note">\n' +
    '  <i aria-hidden="true" class="fa fa-exclamation-circle user-password-note-icon"></i>\n' +
    '  Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password.\n' +
    '</div>\n' +
    '\n' +
    '            <p class="pt16 ac">\n' +
    '              <input type="submit" class="inputButton btn-form-submit" name="sublogin" value="Login">            </p><p class="pt12 pb8 ac">\n' +
    '              <a href="https://myanimelist.net/password.php?username=1&amp;from=%2F">Forgot username?</a> | <a href="https://myanimelist.net/password.php?from=%2F">Forgot password?</a>\n' +
    '            </p>\n' +
    '            <p class="pt24 pb8 ac">\n' +
    `              <input type="button" onclick="document.location='https://myanimelist.net/register.php?from=%2F';" name="register" value="Sign Up" class="inputButton btn-form-submit small">            </p></div>\n` +
    '\n' +
    '          \n' +
    '          <input type="hidden" name="submit" value="1">\n' +
    '        </form>\n' +
    '          </td>\n' +
    '  </tr>\n' +
    '</table>\n' +
    '\n' +
    '  </div>\n' +
    '                                              </div>            <!--  control container height -->\n' +
    '            <div style="clear:both;"></div>\n' +
    '            <!-- end rightbody -->\n' +
    '          \n' +
    '                      \n' +
    '\n' +
    '                </div>\n' +
    '    <div id="ad-skin-bg-right" class="ad-skin-side-outer ad-skin-side-bg bg-right">\n' +
    '    <div id="ad-skin-right" class="ad-skin-side right" style="display: none;">\n' +
    '      <div id="ad-skin-right-absolute-block">\n' +
    '        <div id="ad-skin-right-fixed-block"></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div></div>\n' +
    '                  \n' +
    '<div class="footer-ranking">\n' +
    '  <div class="ranking-container">\n' +
    '          <div class="ranking-unit">\n' +
    '        <h3 class="title"><a href="https://myanimelist.net/topanime.php" class="view_more fl-r">More</a>Top Anime\n' +
    '        </h3>\n' +
    '        <ol>\n' +
    '                      <li>\n' +
    '              <span class="rank">1</span>\n' +
    '              <a href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood">Fullmetal Alchemist: Brotherhood</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">2</span>\n' +
    '              <a href="https://myanimelist.net/anime/9253/Steins_Gate">Steins;Gate</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">3</span>\n' +
    '              <a href="https://myanimelist.net/anime/28977/Gintama°">Gintama°</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">4</span>\n' +
    '              <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">Hunter x Hunter (2011)</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">5</span>\n' +
    '              <a href="https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu">Ginga Eiyuu Densetsu</a>\n' +
    '            </li>\n' +
    '                  </ol>\n' +
    '      </div>\n' +
    '          <div class="ranking-unit">\n' +
    '        <h3 class="title"><a href="https://myanimelist.net/topanime.php?type=airing" class="view_more fl-r">More</a>Top Airing Anime\n' +
    '        </h3>\n' +
    '        <ol>\n' +
    '                      <li>\n' +
    '              <span class="rank">1</span>\n' +
    '              <a href="https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen">Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">2</span>\n' +
    '              <a href="https://myanimelist.net/anime/40682/Kingdom_3rd_Season">Kingdom 3rd Season</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">3</span>\n' +
    '              <a href="https://myanimelist.net/anime/21/One_Piece">One Piece</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">4</span>\n' +
    '              <a href="https://myanimelist.net/anime/38481/Toaru_Kagaku_no_Railgun_T">Toaru Kagaku no Railgun T</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">5</span>\n' +
    '              <a href="https://myanimelist.net/anime/40417/Fruits_Basket_2nd_Season">Fruits Basket 2nd Season</a>\n' +
    '            </li>\n' +
    '                  </ol>\n' +
    '      </div>\n' +
    '          <div class="ranking-unit">\n' +
    '        <h3 class="title"><a href="https://myanimelist.net/character.php" class="view_more fl-r">More</a>Most Popular Characters\n' +
    '        </h3>\n' +
    '        <ol>\n' +
    '                      <li>\n' +
    '              <span class="rank">1</span>\n' +
    '              <a href="https://myanimelist.net/character/417/Lelouch_Lamperouge">Lamperouge, Lelouch</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">2</span>\n' +
    '              <a href="https://myanimelist.net/character/71/L_Lawliet">Lawliet, L</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">3</span>\n' +
    '              <a href="https://myanimelist.net/character/40/Luffy_Monkey_D">Monkey D., Luffy</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">4</span>\n' +
    '              <a href="https://myanimelist.net/character/45627/Levi">Levi</a>\n' +
    '            </li>\n' +
    '                      <li>\n' +
    '              <span class="rank">5</span>\n' +
    '              <a href="https://myanimelist.net/character/11/Edward_Elric">Elric, Edward</a>\n' +
    '            </li>\n' +
    '                  </ol>\n' +
    '      </div>\n' +
    '      </div>\n' +
    '</div>\n' +
    '          \n' +
    '          <footer>\n' +
    '  <div id="footer-block">\n' +
    '    <div class="footer-link-block">\n' +
    '      <p class="footer-link home di-ib">\n' +
    '        <a href="https://myanimelist.net/">Home</a>\n' +
    '      </p>\n' +
    '      <p class="footer-link di-ib">\n' +
    '        <a href="https://myanimelist.net/about.php">About</a>\n' +
    '        <a href="https://myanimelist.net/pressroom">Press Room</a>\n' +
    '        <a href="https://myanimelist.net/about.php?go=contact">Support</a>\n' +
    '        <a href="https://myanimelist.net/advertising">Advertising</a>\n' +
    '        <a href="https://myanimelist.net/forum/?topicid=515949">FAQ</a>\n' +
    '        <a href="https://myanimelist.net/about/terms_of_use">Terms</a>\n' +
    '        <a href="https://myanimelist.net/about/privacy_policy">Privacy</a>\n' +
    '        <a href="https://myanimelist.net/about/cookie_policy">Cookie</a>\n' +
    '        <a href="https://myanimelist.net/about/sitemap">Sitemap</a>\n' +
    '      </p>\n' +
    '            <p class="footer-link login di-ib">\n' +
    '        <a href="https://myanimelist.net/login.php?from=%2F" id="malLogin" rel="nofollow">Login</a>\n' +
    '        <a href="https://myanimelist.net/register.php?from=%2F">Sign Up</a>\n' +
    '      </p>\n' +
    '          </div>\n' +
    '\n' +
    '    \n' +
    '    <div class="banner-footer-anime-streaming">\n' +
    `      <a href="/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner" onclick="trackOutboundLink('/membership?utm_source=myanimelist&utm_medium=banner&utm_campaign=support_mal_20200416&utm_content=footer_minibanner')"> <img src="https://cdn.myanimelist.net/images/event/support_mal/banner-ani-500x72.gif" width='250' height='36' alt='Support MAL!' title='Support MAL!' > </a>\n` +
    '\n' +
    '    </div>\n' +
    '\n' +
    '        <div class="footer-link-icon-block">\n' +
    '            <div class="footer-social-media ac">\n' +
    '        <a target="_blank" class="icon-sns icon-fb di-ib" href="https://www.facebook.com/OfficialMyAnimeList"></a>\n' +
    '        <a target="_blank" class="icon-sns icon-tw di-ib" title="Follow @myanimelist on Twitter" href="https://twitter.com/myanimelist"></a></div>\n' +
    '            <div class="footer-recommended ac">\n' +
    '        <a target="_blank" class="icon-recommended icon-tokyo-otaku-mode" href="http://otakumode.com/fb/5aO">Tokyo Otaku Mode</a>\n' +
    `        <a target="_blank" class="icon-recommended icon-honeys-anime" href="https://honeysanime.com">Honey's Anime</a>\n` +
    '        <a target="_blank" class="icon-recommended icon-manga-store" href="https://myanimelist.net/store?_location=mal_f_m">Manga Store</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="footer-fb">\n' +
    '      <div class="footer-fb-item">\n' +
    '        <div class="pa-d-footer">\n' +
    '                  </div>\n' +
    '      </div>\n' +
    '      <div class="footer-fb-item">\n' +
    '                <iframe class="fb-page" src="" width="450" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n' +
    '      </div>\n' +
    '      <div class="footer-fb-item">\n' +
    '        <div class="pa-d-footer">\n' +
    '                  </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '        \n' +
    '    <div id="copyright">\n' +
    '      MyAnimeList.net is a property of MyAnimeList, LLC. &copy;2020 All Rights Reserved.\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer>\n' +
    '    \n' +
    `        <script src='//www.googletagservices.com/tag/js/gpt.js' async="async"></script>\n` +
    '<script>\n' +
    '    var googletag = googletag || {};\n' +
    '    googletag.cmd = googletag.cmd || [];\n' +
    '</script>\n' +
    '\n' +
    '<script async>\n' +
    "  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
    '  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    "  })(window,document,'script','//www.google-analytics.com/analytics.js','ga')\n" +
    '\n' +
    "  ga('create', 'UA-369102-1', 'auto')\n" +
    "  ga('set', 'anonymizeIp', true)\n" +
    "  ga('require', 'linkid') // Enhanced Link Attribution\n" +
    "  ga('send', 'pageview')\n" +
    '</script>\n' +
    '  <script>\n' +
    'window.onscroll = function(e){\n' +
    '    const scrollThreshold = 50;\n' +
    '    if (window.pageYOffset >= scrollThreshold) {\n' +
    "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
    '            let t_height = ad.offsetHeight;\n' +
    '            let offsetY = ad.getBoundingClientRect().top;\n' +
    '            let screenHeight = window.outerHeight;\n' +
    '            let t_position = offsetY - screenHeight;\n' +
    '            if(-screenHeight<=(t_position　+　t_height) && t_position<0) {\n' +
    "                ad.className = 'ad-tag';\n" +
    '                (deployads = window.deployads || []).push({});\n' +
    '            }\n' +
    '        });\n' +
    '    }\n' +
    '}\n' +
    'var timer = 0;\n' +
    'window.onresize = function(e){\n' +
    '    if (timer > 0) {\n' +
    '        clearTimeout(timer);\n' +
    '    }\n' +
    '\n' +
    '    timer = setTimeout(function () {\n' +
    "        console.log('window resized');\n" +
    "        [].forEach.call(document.querySelectorAll('.ad-tag'), function(ad) {\n" +
    "            ad.className = 'no-ad';\n" +
    '            (deployads = window.deployads || []).push({});\n' +
    '        });\n' +
    "        [].forEach.call(document.querySelectorAll('.no-ad'), function(ad) {\n" +
    "            ad.className = 'ad-tag';\n" +
    '            (deployads = window.deployads || []).push({});\n' +
    '        });\n' +
    '    }, 200);\n' +
    '}\n' +
    '</script><script src="https://www.google.com/recaptcha/api.js?hl=en" async="async"></script>\n' +
    '\n' +
    "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
    `})(window,document,'script','dataLayer','GTM-WL4QW3G');</script><script type="text/javascript">\n` +
    '    window.MAL.magia = "06410c4e6b2518e9add8f6df0ccb2da2876bb8c980aacb43a8dcaa8153c0f92c";\n' +
    '  window.MAL.madoka = "hZrDKm9k6FVRnqd3i%=K";\n' +
    '\n' +
    '  window.MAL.SLVK = "g4OvMLVOmEI3J8u7dt8f8+mAuualsqCo";\n' +
    '  window.MAL.CDN_URL = "https://cdn.myanimelist.net";\n' +
    '\n' +
    '  window.MAL.CURRENT_TUTORIAL_STEP_ID = null;\n' +
    '  window.MAL.USER_NAME = ""\n' +
    '  window.MAL.FACEBOOK.APP_ID = "360769957454434"\n' +
    '  window.MAL.FACEBOOK.API_VERSION = "v2.12"\n' +
    '</script>\n' +
    '\n' +
    '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4QW3G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n' +
    '\n' +
    '    </body>\n' +
    '</html>\n',
  body: {},
  files: undefined,
  buffered: true,
  headers: {
    date: 'Mon, 08 Jun 2020 08:53:52 GMT',
    'content-type': 'text/html; charset=UTF-8',
    'transfer-encoding': 'chunked',
    connection: 'close',
    server: 'Apache',
    'cache-control': 'no-cache',
    vary: 'User-Agent,Accept-Encoding',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=63072000; includeSubDomains; preload'
  },
  header: {
    date: 'Mon, 08 Jun 2020 08:53:52 GMT',
    'content-type': 'text/html; charset=UTF-8',
    'transfer-encoding': 'chunked',
    connection: 'close',
    server: 'Apache',
    'cache-control': 'no-cache',
    vary: 'User-Agent,Accept-Encoding',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=63072000; includeSubDomains; preload'
  },
  statusCode: 200,
  status: 200,
  statusType: 2,
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  created: false,
  accepted: false,
  noContent: false,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  forbidden: false,
  notFound: false,
  unprocessableEntity: false,
  type: 'text/html',
  charset: 'UTF-8',
  links: {},
  setEncoding: [Function: bound ],
  redirects: [],
  pipe: [Function],
  [Symbol(kCapture)]: false
}

