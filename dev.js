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
    outFile: "./build/atomic.css",
    outputStyle: "expanded",
    sourceMap: false,
  },
  function(err, res) {
    if (err) {
      const { status, column, line, message } = err
      console.error("[SASS]:\n", { status, column, line, message })
    } else {
      fs.outputFile("./build/atomic.css", res.css, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS build file written to disk.")
        }
      })
    }
  }
)
