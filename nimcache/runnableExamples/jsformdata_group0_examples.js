/* Generated by the Nim Compiler v1.7.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555127 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555129 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555119 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555121 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555918 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555082 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555163 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555111 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555123 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555123 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555123.node = NNI33555123;
var NNI33555112 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555112.node = NNI33555112;
NTI33555163.base = NTI33555111;
NTI33555164.base = NTI33555111;
var NNI33555111 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555163, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555164, name: "up", sons: null}]};
NTI33555111.node = NNI33555111;
var NNI33555082 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555082.node = NNI33555082;
NTI33555111.base = NTI33555082;
NTI33555112.base = NTI33555111;
NTI33555123.base = NTI33555112;
var NNI33555918 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555918.node = NNI33555918;
var NNI33555121 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555121.node = NNI33555121;
var NNI33555119 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555119.node = NNI33555119;
NTI33555119.base = NTI33555112;
NTI33555121.base = NTI33555119;
var NNI33555129 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555129.node = NNI33555129;
NTI33555129.base = NTI33555112;
var NNI33555127 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555127.node = NNI33555127;
NTI33555127.base = NTI33555112;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557141, src_33557142, ti_33557143) {
  var result_33557152 = null;

    switch (ti_33557143.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557132(ti_33557143))) {
      result_33557152 = src_33557142;
      }
      else {
        result_33557152 = [src_33557142[0], src_33557142[1]];
      }
      
      break;
    case 19:
            if (dest_33557141 === null || dest_33557141 === undefined) {
        dest_33557141 = {};
      }
      else {
        for (var key in dest_33557141) { delete dest_33557141[key]; }
      }
      for (var key in src_33557142) { dest_33557141[key] = src_33557142[key]; }
      result_33557152 = dest_33557141;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557143.base == null))) {
      result_33557152 = nimCopy(dest_33557141, src_33557142, ti_33557143.base);
      }
      else {
      if ((ti_33557143.kind == 17)) {
      result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {m_type: ti_33557143} : dest_33557141;
      }
      else {
        result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {} : dest_33557141;
      }
      }
      nimCopyAux(result_33557152, src_33557142, ti_33557143.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557142)) { 
        if(dest_33557141 === null || dest_33557141 === undefined || dest_33557141.length != src_33557142.length) {
          dest_33557141 = new src_33557142.constructor(src_33557142);
        } else {
          dest_33557141.set(src_33557142, 0);
        }
        result_33557152 = dest_33557141;
      } else {
        if (src_33557142 === null) {
          result_33557152 = null;
        }
        else {
          if (dest_33557141 === null || dest_33557141 === undefined || dest_33557141.length != src_33557142.length) {
            dest_33557141 = new Array(src_33557142.length);
          }
          result_33557152 = dest_33557141;
          for (var i = 0; i < src_33557142.length; ++i) {
            result_33557152[i] = nimCopy(result_33557152[i], src_33557142[i], ti_33557143.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557142 === null) {
        result_33557152 = null;
      }
      else {
        if (dest_33557141 === null || dest_33557141 === undefined || dest_33557141.length != src_33557142.length) {
          dest_33557141 = new Array(src_33557142.length);
        }
        result_33557152 = dest_33557141;
        for (var i = 0; i < src_33557142.length; ++i) {
          result_33557152[i] = nimCopy(result_33557152[i], src_33557142[i], ti_33557143.base);
        }
      }
    
      break;
    case 28:
            if (src_33557142 !== null) {
        result_33557152 = src_33557142.slice(0);
      }
    
      break;
    default: 
      result_33557152 = src_33557142;
      break;
    }

  return result_33557152;

}

function makeNimstrLit(c_33556802) {
      var result = [];
  for (var i = 0; i < c_33556802.length; ++i) {
    result[i] = c_33556802.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557180, value_33557181, typ_33557182) {
        var result = new Array(len_33557180);
    for (var i = 0; i < len_33557180; ++i) result[i] = nimCopy(null, value_33557181, typ_33557182);
    return result;
  

  
}

function mnewString(len_33556894) {
        return new Array(len_33556894);
  

  
}

function addInt(a_33556941, b_33556942) {
        var result = a_33556941 + b_33556942;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557190, a_33557191, b_33557192) {
      var Temporary1;

  var result_33557193 = 0;

  BeforeRet: do {
      if (!(a_33557191 <= i_33557190)) Temporary1 = false; else {        Temporary1 = (i_33557190 <= b_33557192);      }    if (Temporary1) {
    result_33557193 = i_33557190;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557193;

}

function chckIndx(i_33557185, a_33557186, b_33557187) {
      var Temporary1;

  var result_33557188 = 0;

  BeforeRet: do {
      if (!(a_33557186 <= i_33557185)) Temporary1 = false; else {        Temporary1 = (i_33557185 <= b_33557187);      }    if (Temporary1) {
    result_33557188 = i_33557185;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557185, a_33557186, b_33557187);
    }
    
  } while (false);

  return result_33557188;

}

function cstrToNimstr(c_33556805) {
      var ln = c_33556805.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556805.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556805.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556808) {
                    var Temporary5;
            var Temporary7;

  var result_33556809 = null;

    var res_33556843 = newSeq_33556826((s_33556808).length);
    var i_33556844 = 0;
    var j_33556845 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556844 < (s_33556808).length)) break Label2;
          var c_33556846 = s_33556808[i_33556844];
          if ((c_33556846 < 128)) {
          res_33556843[j_33556845] = String.fromCharCode(c_33556846);
          i_33556844 += 1;
          }
          else {
            var helper_33556858 = newSeq_33556826(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556859 = c_33556846.toString(16);
                  if ((((code_33556859) == null ? 0 : (code_33556859).length) == 1)) {
                  helper_33556858.push("%0");;
                  }
                  else {
                  helper_33556858.push("%");;
                  }
                  
                  helper_33556858.push(code_33556859);;
                  i_33556844 += 1;
                    if (((s_33556808).length <= i_33556844)) Temporary5 = true; else {                      Temporary5 = (s_33556808[i_33556844] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556846 = s_33556808[i_33556844];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556843[j_33556845] = decodeURIComponent(helper_33556858.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556843[j_33556845] = helper_33556858.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556845 += 1;
        }
    } while (false);
    if (res_33556843.length < j_33556845) { for (var i = res_33556843.length ; i < j_33556845 ; ++i) res_33556843.push(null); }
               else { res_33556843.length = j_33556845; };
    result_33556809 = res_33556843.join("");

  return result_33556809;

}

function raiseException(e_33556668, ename_33556669) {
    e_33556668.name = ename_33556669;
    if ((excHandler == 0)) {
    unhandledException(e_33556668);
    }
    
    e_33556668.trace = nimCopy(null, rawWriteStackTrace_33556632(), NTI33554439);
    throw e_33556668;

  
}
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557132(ti_33557133) {
  var result_33557134 = false;

  BeforeRet: do {
    result_33557134 = !((ConstSet1[ti_33557133.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557134;

}

function nimCopyAux(dest_33557145, src_33557146, n_33557147) {
    switch (n_33557147.kind) {
    case 0:
      break;
    case 1:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557147.sons.length; i++) {
      nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i]);
    }
    
      break;
    case 3:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
      for (var i = 0; i < n_33557147.sons.length; ++i) {
        nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556420(x_33556421, x_33556421_Idx, y_33556422) {
          if (x_33556421[x_33556421_Idx] === null) { x_33556421[x_33556421_Idx] = []; }
      var off = x_33556421[x_33556421_Idx].length;
      x_33556421[x_33556421_Idx].length += y_33556422.length;
      for (var i = 0; i < y_33556422.length; ++i) {
        x_33556421[x_33556421_Idx][off+i] = y_33556422.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555121, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556939) {
        if (a_33556939 > 2147483647 || a_33556939 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555129, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556755, a_33556756, b_33556757) {
    var Temporary1;

    if ((b_33556757 < a_33556756)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_318767107(i_33556755) || [],makeNimstrLit(" not in ") || [],HEX24_318767107(a_33556756) || [],makeNimstrLit(" .. ") || [],HEX24_318767107(b_33556757) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555127, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    F.line = 44;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      F.line = 46;
      var iHEX60gensym4_251658435 = 0;
      F.line = 119;
      var i_570425387 = 0;
      Label2: do {
        F.line = 120;
          Label3: while (true) {
          if (!(i_570425387 < n_251658420)) break Label3;
            F.line = 49;
            iHEX60gensym4_251658435 = i_570425387;
            F.line = 49;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            F.line = 122;
            i_570425387 = addInt(i_570425387, 1);
          }
      } while (false);
    } while (false);
  framePtr = F.prev;

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));
  framePtr = F.prev;

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 113;
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));
  framePtr = F.prev;

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 117;
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);
  framePtr = F.prev;

  
}

function HEX24_318767107(x_318767108) {
  var result_318767109 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 12;
    addInt_251658457(result_318767109, 0, x_318767108);
  framePtr = F.prev;

  return result_318767109[0];

}

function auxWriteStackTrace_33556560(f_33556561) {
          var Temporary3;

  var result_33556562 = [[]];

    var it_33556570 = f_33556561;
    var i_33556571 = 0;
    var total_33556572 = 0;
    var tempFrames_33556573 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555918);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556570 == null))) Temporary3 = false; else {            Temporary3 = (i_33556571 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556573[i_33556571].Field0 = it_33556570.procname;
          tempFrames_33556573[i_33556571].Field1 = it_33556570.line;
          tempFrames_33556573[i_33556571].Field2 = it_33556570.filename;
          i_33556571 += 1;
          total_33556572 += 1;
          it_33556570 = it_33556570.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556570 == null))) break Label5;
          total_33556572 += 1;
          it_33556570 = it_33556570.prev;
        }
    } while (false);
    result_33556562[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556572 == i_33556571))) {
    result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("("));;
    result_33556562[0].push.apply(result_33556562[0], HEX24_318767107((total_33556572 - i_33556571)));;
    result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556603 = 0;
      var colontmp__570425379 = 0;
      colontmp__570425379 = (i_33556571 - 1);
      var res_570425381 = colontmp__570425379;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_570425381)) break Label8;
            j_33556603 = res_570425381;
            result_33556562[0].push.apply(result_33556562[0], cstrToNimstr(tempFrames_33556573[j_33556603].Field2));;
            if ((0 < tempFrames_33556573[j_33556603].Field1)) {
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("("));;
            addInt_251658457(result_33556562, 0, tempFrames_33556573[j_33556603].Field1);
            if (false) {
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(", "));;
            addInt_251658457(result_33556562, 0, 0);
            }
            
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(")"));;
            }
            
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(" at "));;
            add_33556420(result_33556562, 0, tempFrames_33556573[j_33556603].Field0);
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("\x0A"));;
            res_570425381 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556562[0];

}

function rawWriteStackTrace_33556632() {
  var result_33556633 = [];

    if (!((framePtr == null))) {
    result_33556633 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556560(framePtr) || []), NTI33554439);
    }
    else {
      result_33556633 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556633;

}

function newSeq_33556826(len_33556828) {
  var result_33556829 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 690;
    result_33556829 = new Array(len_33556828); for (var i = 0 ; i < len_33556828 ; ++i) { result_33556829[i] = null; }  framePtr = F.prev;

  return result_33556829;

}

function unhandledException(e_33556664) {
    var buf_33556665 = [[]];
    if (!(((e_33556664.message).length == 0))) {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556665[0].push.apply(buf_33556665[0], e_33556664.message);;
    }
    else {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit(" ["));;
    add_33556420(buf_33556665, 0, e_33556664.name);
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("]\x0A"));;
    buf_33556665[0].push.apply(buf_33556665[0], rawWriteStackTrace_33556632());;
    var cbuf_33556666 = toJSStr(buf_33556665[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556666);
  }
  else {
    throw cbuf_33556666;
  }
  

  
}

function sysFatal_218103842(message_218103845) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103845, NTI33554439), m_type: NTI33555123, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103840(msg_218103841) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 28;
    sysFatal_218103842(msg_218103841);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103864(msg_218103865) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 38;
    raiseAssert_218103840(msg_218103865);
  framePtr = F.prev;

  
}
var F = {procname: "module jsformdata_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim", line: 0};
framePtr = F;
F.line = 57;
var data_570425346 = new FormData();
F.line = 57;
data_570425346.set("key0", "value0");
F.line = 57;
data_570425346.append("key1", "value1");
F.line = 57;
data_570425346.delete("key1");
if (!(data_570425346.has("key0"))) {
F.line = 57;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim(12, 10) `data.hasKey(\"key0\")` "));
}

if (!((data_570425346.get("key0") == "value0"))) {
F.line = 57;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim(13, 10) `data[\"key0\"] == \"value0\".cstring` "));
}

F.line = 57;
(() => { const frmdt = data_570425346; Array.from(frmdt.keys()).forEach((key) => frmdt.delete(key)) })();
if (!((Array.from(data_570425346.entries()).length == 0))) {
F.line = 57;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim(15, 10) `data.len == 0` "));
}

framePtr = F.prev;
var F = {procname: "module jsformdata_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
