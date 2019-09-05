function run() {
  const pwToken = process.env.INPUT_PROJECT_WALLACE_TOKEN;
  console.log("pwToken", pwToken);
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
