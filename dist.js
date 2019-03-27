const fs = require("fs")
const sass = require("node-sass")

sass.render(
  {
    file: "./src/styles.scss",
    includePaths: ["./src/", "./src/utils", "./src/props/"],
    outFile: "./dist/atomic.css",
    outputStyle: "compressed",
    sourceMap: true,
  },
  function(err, res) {
    if (err) {
      const { status, column, line, message } = err
      console.error("[SASS]:\n", { status, column, line, message })
    } else {
      fs.writeFile("./dist/atomic.css", res.css, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS dist file written to disk.")
        }
      })
      fs.writeFile("./dist/atomic.map.css", res.map, function(writeErr) {
        if (!writeErr) {
          console.log("[FS]: CSS map dist file written to disk.")
        }
      })
    }
  }
)
