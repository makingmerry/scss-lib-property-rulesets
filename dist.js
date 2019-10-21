const fs = require("fs-extra")
const sass = require("node-sass")

sass.render(
  {
    file: "./src/styles.scss",
    includePaths: [
      "./src",
      "./src/extensions",
      "./src/config",
      "./src/helpers",
      "./src/typography",
      "./src/layout",
      "./src/theme",
    ],
    outFile: "./dist/atomic.css",
    outputStyle: "compressed",
    sourceMap: true,
  },
  function(err, res) {
    if (err) {
      const { status, column, line, message } = err
      console.error("[SASS]:\n", { status, column, line, message })
    } else {
      fs.outputFile("./dist/atomic.css", res.css, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS distribution file written to disk.")
        }
      })
      fs.outputFile("./dist/atomic.map.css", res.map, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS map distribution file written to disk.")
        }
      })
    }
  }
)
