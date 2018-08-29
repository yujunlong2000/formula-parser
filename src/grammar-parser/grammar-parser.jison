/* description: Parses end evaluates mathematical expressions. */
/* lexical grammar */
%lex
%%
\s+                                                                                             {/* skip whitespace */}
'"'("\\"["]|[^"])*'"'                                                                           {return 'STRING';}
"'"('\\'[']|[^'])*"'"                                                                           {return 'STRING';}
[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(])                                                              {return 'FUNCTION';}
'#'[A-Z0-9\/]+('!'|'?')?                                                                        {return 'ERROR';}
[A-Za-z\.]+(?=[(])                                                                              {return 'FUNCTION';}
[A-Za-z]{1,}[A-Za-z_0-9]+                                                                       {return 'VARIABLE';}
[A-Za-z_]+                                                                                      {return 'VARIABLE';}
[0-9]+                                                                                          {return 'NUMBER';}
'['(.*)?']'                                                                                     {return 'ARRAY';}
"&&"                                                                                            {return '&&';}
"&"                                                                                             {return '&';}
"||"                                                                                            {return '||';}
" "                                                                                             {return ' ';}
[.]                                                                                             {return 'DECIMAL';}
":"                                                                                             {return ':';}
";"                                                                                             {return ';';}
","                                                                                             {return ',';}
"*"                                                                                             {return '*';}
"/"                                                                                             {return '/';}
"-"                                                                                             {return '-';}
"+"                                                                                             {return '+';}
"^"                                                                                             {return '^';}
"("                                                                                             {return '(';}
")"                                                                                             {return ')';}
">="                                                                                            {return '>=';}
"<="                                                                                            {return '<=';}
"<>"                                                                                            {return '<>';}
">"                                                                                             {return '>';}
"<"                                                                                             {return '<';}
"NOT"                                                                                           {return 'NOT';}
'"'                                                                                             {return '"';}
"'"                                                                                             {return "'";}
"!"                                                                                             {return "!";}
"="                                                                                             {return '=';}
"%"                                                                                             {return '%';}
[#]                                                                                             {return '#';}
<<EOF>>                                                                                         {return 'EOF';}
/lex

/* operator associations and precedence (low-top, high-bottom) */
%left '='
%left '||'
%left '&&'
%left '<=' '>=' '<>' 'NOT'
%left '>' '<'
%left '+' '-'
%left '*' '/'
%left '^'
%left '&'
%left '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
  : expression EOF {
      return $1;
    }
;

expression
  : variableSequence {
      $$ = yy.callVariable($1[0]);
      for(var i = 1; i < $1.length; ++i) {
        if (undefined === $$[$1[i]]) {
          yy.throwError('#M/U');
        }
        $$ = $$[$1[i]];
      }
    }
  | number {
      $$ = yy.toNumber($1);
    }
  | STRING {
      $$ = yy.trimEdges($1);
    }
  | expression '&' expression {
      $$ = yy.evaluateByOperator('&', [$1, $3]);
    }
  | expression '=' expression {
      $$ = yy.evaluateByOperator('=', [$1, $3]);
    }
  | expression '+' expression {
      $$ = yy.evaluateByOperator('+', [$1, $3]);
    }
  | '(' expression ')' {
      $$ = $2;
    }
  | expression '||' expression {
      $$ = yy.evaluateByOperator('||', [$1, $3]);
    }
  | expression '&&' expression {
      $$ = yy.evaluateByOperator('&&', [$1, $3]);
    }
  | expression '<=' expression {
      $$ = yy.evaluateByOperator('<=', [$1, $3]);
    }
  | expression '>=' expression {
      $$ = yy.evaluateByOperator('>=', [$1, $3]);
    }
  | expression '<>' expression {
      $$ = yy.evaluateByOperator('<>', [$1, $3]);
    }
  | expression NOT expression {
      $$ = yy.evaluateByOperator('NOT', [$1, $3]);
    }
  | expression '>' expression {
      $$ = yy.evaluateByOperator('>', [$1, $3]);
    }
  | expression '<' expression {
      $$ = yy.evaluateByOperator('<', [$1, $3]);
    }
  | expression '-' expression {
      $$ = yy.evaluateByOperator('-', [$1, $3]);
    }
  | expression '*' expression {
      $$ = yy.evaluateByOperator('*', [$1, $3]);
    }
  | expression '/' expression {
      $$ = yy.evaluateByOperator('/', [$1, $3]);
    }
  | expression '%' expression {
      $$ = yy.evaluateByOperator('%', [$1, $3]);
    }
  | expression '^' expression {
      $$ = yy.evaluateByOperator('^', [$1, $3]);
    }
  | '-' expression {
      var n1 = yy.invertNumber($2);

      $$ = n1;

      if (isNaN($$)) {
          $$ = 0;
      }
    }
  | '+' expression {
      var n1 = yy.toNumber($2);

      $$ = n1;

      if (isNaN($$)) {
          $$ = 0;
      }
    }
  | expression '%' {
      var n1 = yy.toNumber($1);

      $$ = $1 * 0.01;

      if (isNaN($$)) {
          $$ = 0;
      }
    }
  | FUNCTION '(' ')' {
      $$ = yy.callFunction($1);
    }
  | FUNCTION '(' expseq ')' {
      $$ = yy.callFunction($1, $3);
    }
  | error
  | error error
;

expseq
  : expression {
      $$ = [$1];
    }
  | ARRAY {
      var result = [];
      var arr = eval("[" + yytext + "]");

      arr.forEach(function(item) {
        result.push(item);
      });

      $$ = result;
    }
  | expseq ';' expression {
      $1.push($3);
      $$ = $1;
    }
  | expseq ',' expression {
      $1.push($3);
      $$ = $1;
    }
;

variableSequence
  : VARIABLE {
      $$ = [$1];
    }
  | variableSequence DECIMAL VARIABLE {
      $$ = (Array.isArray($1) ? $1 : [$1]);
      $$.push($3);
    }
;

number
  : NUMBER {
      $$ = $1;
    }
  | NUMBER DECIMAL NUMBER {
      $$ = ($1 + '.' + $3) * 1;
    }
;

error
  : ERROR {
      $$ = yy.throwError($1);
    }
;

%%
