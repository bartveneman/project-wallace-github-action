import * as core from "@actions/core";

function run() {
  console.log("Started `run()`");
  const pwToken = core.getInput("project_wallace_token");
  console.log("pwToken", pwToken);
  core.debug(`pwToken: ${pwToken}`);
  core.setOutput(
    "css_analytics_diff",
    JSON.stringify({
      "stylesheets.size": {
        oldValue: 1,
        newValue: 2,
        diff: 2
      }
    })
  );
  console.log("ended `run()`");
}

run();
