#[
autogenerated by docgen
loc: /home/runner/work/Nim/Nim/lib/std/jsbigints.nim(160, 3)
rdoccmd: 
]#
import "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim"
{.line: ("/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", 160, 3).}:
  var big1: JsBigInt = big"1"
  inc big1, big"2"
  doAssert big1 == big"3"

