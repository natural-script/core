{ var indentStack = [], indent = "", pos = "", commandUtils = this.commandUtils }

start
  = INDENT? l:line
    { return l; }

line
  = (SAMEDENT line:(!EOL !('*' ([ ]+)?)c:. { return c; })+ EOL?
    children:( INDENT c:line* DEDENT { return c; })?
    { var o = {}; line = line.join("").split(/[\s]+/).join(" "); o[line] = children; return children ? o : line; })
    /(SAMEDENT line:(!EOL ('*' ([ ]+)?)c:$COMMANDUTILS { return c; })+ EOL?
    children:( INDENT c:line* DEDENT { return c; })?
    { var o = {}; line = line.join("").split(/[\s]+/).join(" "); o[line] = children; return children ? o : line; })
    /(SAMEDENT '*' ([ ]+)? line:(!("\n" &(SAMEDENT'*'/(!SAMEMOREDENT))) c:. { return c; })+ line1:("\n" &(SAMEDENT'*'/(!SAMEMOREDENT)))?
    { var o = {}; line = line.join("").split(/[\r\f\v]+/).join(" "); return line; }) 

EOL
  = "\.\n" / "\,\n" / "\:\n"
  
COMMANDUTILS
  = i:$((. !EOL)+ .) &EOL &{ return new RegExp(`^${commandUtils}$`).test(i); }

SAMEDENT
  = i:[ \t]* &{ return i.join("") === indent; }

SAMEMOREDENT
  = i:[ \t]* &{ return i.join("").length >= indent.length }

INDENT
  = &(i:[ \t]+ &{ return i.length > indent.length; }
      { indentStack.push(indent); indent = i.join(""); pos = location; })

DEDENT
  =  !{ indent = indentStack.pop(); }