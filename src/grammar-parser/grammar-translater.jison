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
      $$ = yy.transVariable($1[0]);
      for(var i = 1; i < $1.length; ++i) {
        $$ += '.' + $1[i];
      }
    }
  | number {
      $$ = yy.toNumber($1);
    }
  | STRING {
      $$ = $1;
    }
  | expression '&' expression {
      $$ = yy.transByOperator('&', [$1, $3]);
    }
  | expression '=' expression {
      $$ = yy.transByOperator('=', [$1, $3]);
    }
  | expression '+' expression {
      $$ = yy.transByOperator('+', [$1, $3]);
    }
  | '(' expression ')' {
      $$ = $1 + $2 + $3;
    }
  | expression '||' expression {
      $$ = yy.transByOperator('||', [$1, $3]);
    }
  | expression '&&' expression {
      $$ = yy.transByOperator('&&', [$1, $3]);
    }
  | expression '<=' expression {
      $$ = yy.transByOperator('<=', [$1, $3]);
    }
  | expression '>=' expression {
      $$ = yy.transByOperator('>=', [$1, $3]);
    }
  | expression '<>' expression {
      $$ = yy.transByOperator('<>', [$1, $3]);
    }
  | expression NOT expression {
      $$ = yy.transByOperator('NOT', [$1, $3]);
    }
  | expression '>' expression {
      $$ = yy.transByOperator('>', [$1, $3]);
    }
  | expression '<' expression {
      $$ = yy.transByOperator('<', [$1, $3]);
    }
  | expression '-' expression {
      $$ = yy.transByOperator('-', [$1, $3]);
    }
  | expression '*' expression {
      $$ = yy.transByOperator('*', [$1, $3]);
    }
  | expression '/' expression {
      $$ = yy.transByOperator('/', [$1, $3]);
    }
  | expression '%' expression {
      $$ = yy.transByOperator('%', [$1, $3]);
    }
  | expression '^' expression {
      $$ = yy.transByOperator('^', [$1, $3]);
    }
  | '-' expression {
      $$ = $1 + $2;
    }
  | '+' expression {
      $$ = $1 + $2;
    }
  | expression '%' {
      if (typeof $1 === 'number') {
        $$ = $1 * 0.01;
      } else {
        $$ = '(' + $1 + ' * 0.01)';
      }
    }
  | FUNCTION '(' ')' {
      $$ = yy.transFunction($1);
    }
  | FUNCTION '(' expseq ')' {
      $$ = yy.transFunction($1, $3);
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
