PROGRAM Greetings(INPUT, OUTPUT);
USES DOS;
VAR
  QueryString: STRING[100];
  CurPos, StringLength, NumberOfCharacters: INTEGER;
  Ch: CHAR;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  IF QueryString = ''
  THEN
    WRITELN('Hello Anonymous!')
  ELSE
    BEGIN
      CurPos := 6;
      Ch := QueryString[CurPos];
      StringLength := Length(QueryString);
      NumberOfCharacters := 0;
      IF ((StringLength < 6) OR (Ch='&'))
      THEN
        WRITELN('Hello Anonymous!')
      ELSE
        BEGIN
          WHILE ((StringLength >= CurPos) AND (Ch <> '&') AND (Ch <> ' '))
          DO
            BEGIN
              NumberOfCharacters := NumberOfCharacters + 1;
              CurPos := CurPos + 1;
              Ch := QueryString[CurPos]
            END;
          WRITELN('Hello dear, ', Copy(QueryString, CurPos - NumberOfCharacters, NumberOfCharacters), '!')
        END
    END
END.