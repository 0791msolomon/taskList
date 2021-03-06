const router = require("express").Router();

const peopleRoutes = require("./routes.people");

module.exports = router;

router.use("/api/people", peopleRoutes);

useAPIErrorHandlers(router);

// register client routes
// router.use(clientRoutes);

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/api/*", (req, res, next) => {
    res.sendStatus(404);
  });

  // Handle API 500
  router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}
