// const core = require("@actions/core");

function run() {
  console.log("Started `run()`");
  // const pwToken = core.getInput("project_wallace_token");
  const pwToken = process.env.INPUT_PROJECT_WALLACE_TOKEN;
  console.log("pwToken", pwToken);
  // core.debug(`pwToken: ${pwToken}`);
  // core.setOutput(
  //   "css_analytics_diff",
  // JSON.stringify({
  //   "stylesheets.size": {
  //     oldValue: 1,
  //     newValue: 2,
  //     diff: 2
  //   }
  // })
  // );
  console.log("ended `run()`");
  // issueCommand('set-output', {name}, value)
  process.stdout.write(
    `##[set-output name=css_analytics_diff;]${JSON.stringify({
      "stylesheets.size": {
        oldValue: 1,
        newValue: 2,
        diff: 2
      }
    })}`
  );
}

run();
