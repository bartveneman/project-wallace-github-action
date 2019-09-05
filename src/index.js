import * as core from "@actions/core";

function run() {
  console.log("Started `run()`");
  const pwToken = core.getInput("project_wallace_token");
  console.log("pwToken", pwToken);
  core.debug(`pwToken: ${pwToken}`);
  core.setOutput(
    "stats",
    JSON.stringify({
      "stylesheets.size": 1
    })
  );
  console.log("ended `run()`");
}

run();
