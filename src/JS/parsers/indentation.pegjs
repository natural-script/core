{ var indentStack = [], indent = "", pos = "" }

start
  = INDENT? l:line
    { return l; }

line
  = (SAMEDENT '*' ([ ]+)? line:(!("\n" &(SAMEDENT'*'/(''!SAMEDENT))) c:. { return c; })+ ("\n" &(SAMEDENT'*'/(''!SAMEDENT)))?
    children:( INDENT c:line* DEDENT { return c; })?
    { var o = {}; line = line.join("").split(/[\s]+/).join(" "); o[line] = children; return children ? o : line; }) 
    /(SAMEDENT line:(!EOL c:. { return c; })+ EOL?
    children:( INDENT c:line* DEDENT { return c; })?
    { var o = {}; line = line.join("").split(/[\s]+/).join(" "); o[line] = children; return children ? o : line; })

EOL
  = "\.\n" / "\,\n" / "\:\n"

SAMEDENT
  = i:[ \t]* &{ return i.join("") === indent; }

INDENT
  = &(i:[ \t]+ &{ return i.length > indent.length; }
      { indentStack.push(indent); indent = i.join(""); pos = location; })

DEDENT
  =  !{ indent = indentStack.pop(); }