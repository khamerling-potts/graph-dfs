function isPath(graph, vertexA, vertexB, visited = new Set()) {
  // add vertexA to visited set
  // for each vertex in graph[vertexa]:
  //     if vertex is vertexb, return true
  //     if vertex has not been visited and ispath(graph, vertex, vertexb): return true
  // return false

  visited.add(vertexA);
  for (let vertex of graph[vertexA]) {
    if (vertex === vertexB) return true;
    if (!visited.has(vertex) && isPath(graph, vertex, vertexB, visited))
      return true;
  }
  return false;
}

if (require.main === module) {
  // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["jan", "carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: [],
  };

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "dave"));

  console.log("");

  console.log("Expecting: true");
  console.log(isPath(graph, "john", "jambaby"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "carl", "carl"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
