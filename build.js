const fs = require("fs")
const sass = require("node-sass")

sass.render(
  {
    file: "./src/styles.scss",
    includePaths: ["./src/", "./src/utils", "./src/props/"],
    outFile: "./build/atomic.css",
    outputStyle: "expanded",
    sourceMap: false,
  },
  function(err, res) {
    if (err) {
      const { status, column, line, message } = err
      console.error("[SASS]:\n", { status, column, line, message })
    } else {
      fs.writeFile("./build/atomic.css", res.css, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS build file written to disk.")
        }
      })
    }
  }
)
