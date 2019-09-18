function loadUser(req, res, next) {
  if (req.params.userId) {
    Users.findOne({ id: req.params.userId }, function(err, user) {
      if (err) {
        next(new Error("Couldn't find user: " + err));
        return;
      }

      req.user = user;
      next();
    });
  } else {
    next();
  }
}


app.get('/user/:userId', loadUser, function(req, res) {
  // do something with req.user
});

app.get('/users/:userId?', loadUser, function(req, res) {
  // if req.user was set, it's because userId was specified (and we found the user).
});

// Pretend there's a "loadItem()" which operates similarly, but with itemId.
app.get('/item/:itemId/addTo/:userId', loadItem, loadUser, function(req, res) {
  req.user.items.append(req.item.name);
});

/**
 * Only allows the page to be accessed if the user is an admin.
 * Requires use of `loadUser` middleware.
 */
function requireAdmin(req, res, next) {
  if (!req.user || !req.user.admin) {
    next(new Error("Permission denied."));
    return;
  }

  next();
}

app.get('/top/secret', loadUser, requireAdmin, function(req, res) {
  res.send('blahblahblah');
});
