import {
  awardCredit,
  initializeGitExercise,
} from "../../common/commandLineExercise.js";
import { GIT_STATE } from "../../common/gitStatuses.js";

/*global alert: true, ODSA, console */
$(document).ready(function () {
  const handleAwardCredit =
    (
      getLocalCurrDir,
      getLocalHomeDir,
      getLocalInitialCommit,
      getLocalCurrBranch,
      getRemoteHomeDir,
      getRemoteInitialCommit,
      getRemoteCurrBranch
    ) =>
    (args) => {
      if (args.length > 0 && args[0] === "status") {
        awardCredit();
      }
    };

  initializeGitExercise(
    {
      commandTitle: "git status",
      commandDescription:
        "The git status command prints the status of the files.",
      challengeDescription:
        'Run git status. Notice "index.html" has been modified, "app.js" has been deleted, and "new.js" has been newly created.',
    },
    handleAwardCredit,
    "git",
    null,
    null,
    ["cd src", "vi index.html", "rm app.js", "touch new.js"]
  );
});
