const config = {
    siteTitle: 'Ian Parkinson',
    siteTitleShort: 'Ian Parkinson',
    siteTitleAlt: 'Ian Parkinson',
    siteLogo: '',
    siteUrl: 'https://www.ianparkinson.com',
    repo: 'https://github.com/helloiain/ianparkinson.com',
    pathPrefix: '',
    dateFromFormat: 'YYYY-MM-DD',
    dateFormat: 'MMMM Do, YYYY',
    siteDescription:
      '',
    siteRss: '',
    googleAnalyticsID: '',
    disqusShortname: '',
    postDefaultCategoryID: 'Tech',
    userName: '',
    userEmail: '',
    userTwitter: 'IanPark31931597',
    userLocation: 'Houston, Tx',
    userAvatar: '',
    userDescription:
      '',
    menuLinks: [
      {
        name: 'Blog',
        link: '/blog/',
      },
      {
        name: 'Me',
        link: '/me/',
      },
    ],
    themeColor: '', // Used for setting manifest and progress theme colors.
    backgroundColor: '',
  }
  
  // Make sure pathPrefix is empty if not needed
  if (config.pathPrefix === '/') {
    config.pathPrefix = ''
  } else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
  }
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`
  
  module.exports = config