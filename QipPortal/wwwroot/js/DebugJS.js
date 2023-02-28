/* This function captures the current state of the PowerBI report as a bookmark and starts the export
         * this will cause an export Id to be returned by the server which will be used in calls to check the
         * progress of the export.
         * Params:
         * printStrategyName [in] The name of the print strategy (PDF, PPT etc).
         */
//function CaptureState(printStrategyName) {
//    report.bookmarksManager.capture()
//        .then(function (capturedBookmark) {
//            var state = capturedBookmark.state;
//            // Kick off the print operation
//            StartPrint(printStrategyName, state);
//        })
//        .catch(function (error) {
//            alert("Error capturing current state, failed to start export: " + error);
//        });
//}