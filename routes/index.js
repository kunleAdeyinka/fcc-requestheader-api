module.exports = function(app) {
  app.route('/api/whoami').get((req, res) => {
    var ipAddrs = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||
                  req.connection.socket.remoteAddress;


    let headerInfo = {
      'ipaddress': ipAddrs.split(',')[0],
      'language': req.headers["accept-language"].split(',')[0],
      'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };

    res.send(headerInfo);
  });

  //sends users who try to access other areas of the api back to the proper route
  app.use("*", (req, res, next) =>{
    res.redirect('/api/whoami');
  });
};
